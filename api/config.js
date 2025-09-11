import axios from "axios"

// Configure your backend API base URL here
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api"

// Create axios instance with default configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

// API endpoints configuration
export const API_ENDPOINTS = {
  // Pet management endpoints
  pets: {
    getAll: "/pets",
    getById: (id) => `/pets/${id}`,
    create: "/pets",
    update: (id) => `/pets/${id}`,
    delete: (id) => `/pets/${id}`,
    uploadPhoto: (id) => `/pets/${id}/photos`,
  },

  // Appointment endpoints
  appointments: {
    getAll: "/appointments",
    getById: (id) => `/appointments/${id}`,
    create: "/appointments",
    update: (id) => `/appointments/${id}`,
    delete: (id) => `/appointments/${id}`,
  },

  // Veterinarian endpoints
  veterinarians: {
    getAll: "/veterinarians",
    getById: (id) => `/veterinarians/${id}`,
    getSuggestions: "/veterinarians/suggestions",
  },
}

// Request interceptor for adding auth tokens
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message)
    return Promise.reject(error)
  },
)

export default api

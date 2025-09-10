"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./LoginPage.css"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "pet-owner",
  })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Add authentication logic here
    console.log("Login attempt:", formData)

    // Redirect to appropriate dashboard based on role
    switch (formData.role) {
      case "pet-owner":
        navigate("/dashboard/pet-owner")
        break
      case "veterinarian":
        navigate("/dashboard/veterinarian")
        break
      case "shelter":
        navigate("/dashboard/shelter")
        break
      default:
        navigate("/dashboard/pet-owner")
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
          <h1>🐾 FurShield Login</h1>
          <p>Welcome back! Please sign in to your account.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>

          <div className="form-group">
            <label className="form-label">I am a:</label>
            <select name="role" className="form-input" value={formData.role} onChange={handleChange}>
              <option value="pet-owner">Pet Owner</option>
              <option value="veterinarian">Veterinarian</option>
              <option value="shelter">Animal Shelter</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary login-btn">
            Sign In
          </button>
        </form>

        <div className="login-footer">
          <p>
            Don't have an account? <Link to="/register">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

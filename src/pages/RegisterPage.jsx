"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./RegisterPage.css"

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "pet-owner",
  })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Add registration logic here
    console.log("Registration attempt:", formData)

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
    <div className="register-page">
      <div className="register-container">
        <div className="register-header">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
          <h1>🐾 Join FurShield</h1>
          <p>Create your account and start caring for pets today.</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

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
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-input"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
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

          <button type="submit" className="btn btn-primary register-btn">
            Create Account
          </button>
        </form>

        <div className="register-footer">
          <p>
            Already have an account? <Link to="/login">Sign in here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage

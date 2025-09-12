"use client"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import "./DashboardNavbar.css"

const DashboardNavbar = ({ userRole }) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    // TODO: Add logout logic here
    navigate("/")
  }

  return (
    <nav className="dashboard-navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Brand */}
          <div className="navbar-brand">
            <Link to="/">🐾 FurShield</Link>
            <span className="role-badge">{userRole}</span>
          </div>

          {/* Hamburger button */}
          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Menu */}
          <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <button
              onClick={handleLogout}
              className="btn btn-secondary logout-btn"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default DashboardNavbar

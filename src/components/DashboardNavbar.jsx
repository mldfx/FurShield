"use client"
import { Link, useNavigate } from "react-router-dom"
import "./DashboardNavbar.css"

const DashboardNavbar = ({ userRole }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // TODO: Add logout logic here
    navigate("/")
  }

  return (
    <nav className="dashboard-navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <Link to="/">🐾 FurShield</Link>
            <span className="role-badge">{userRole}</span>
          </div>

          <div className="navbar-menu">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <button onClick={handleLogout} className="btn btn-secondary logout-btn">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default DashboardNavbar

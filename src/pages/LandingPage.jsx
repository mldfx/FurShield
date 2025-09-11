import { useState } from "react"
import { Link } from "react-router-dom"
import "./LandingPage.css"

import logo from "../assets/images/furshield-logo.jpg"
import heroImg from "../assets/images/happy-pet-with-veterinarian.jpg"
import petOwnerImg from "../assets/images/pet-owner.jpg"
import vetImg from "../assets/images/veterinarian.jpg"
import shelterImg from "../assets/images/animal-shelter.jpg"

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container nav">
          <div className="logo">
            <img src={logo} alt="FurShield Logo" className="logo-img" />
            <h2 className="logo-text">FurShield</h2>
          </div>

          {/* Hamburger */}
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>

          {/* Nav Links */}
          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/products">Products</Link>
            <Link to="/feedback">Feedback</Link>
            <div className="auth-buttons">
              <Link to="/login" className="btn btn-secondary">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Complete Pet Care Platform</h1>
            <p>
              Connect with veterinarians, manage pet health records, and find loving homes for pets in need.
            </p>
            <div className="hero-buttons">
              <Link to="/register" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/login" className="btn btn-secondary">
                Sign In
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImg} alt="Happy pet with veterinarian" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose FurShield?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src={petOwnerImg} alt="Pet Owner" />
              </div>
              <h3>For Pet Owners</h3>
              <p>Manage your pet's health records, book appointments, and access care resources.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src={vetImg} alt="Veterinarian" />
              </div>
              <h3>For Veterinarians</h3>
              <p>Manage appointments, access patient records, and provide quality care.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src={shelterImg} alt="Animal Shelter" />
              </div>
              <h3>For Shelters</h3>
              <p>Manage adoption listings and track care status for shelter animals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo} alt="FurShield" />
              <span>FurShield</span>
            </div>
            <p>Professional pet care platform connecting owners, vets, and shelters.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/feedback">Feedback</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="/help">Help Center</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 FurShield. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

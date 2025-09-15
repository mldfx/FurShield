import { useState } from "react"
import { Link } from "react-router-dom"
import "./FeedbackPage.css"
import logo from "../assets/images/furshield-logo.jpg";

export default function FeedbackPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <div className="feedback-page">
      {/* Header */}
      <header className="header">
        <div className="container nav">
          <div className="logo">
            <img src={logo} alt="FurShield Logo" />
            <span className="logo-text">FurShield</span>
          </div>

          {/* Hamburger */}
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>

          {/* Nav Links */}
          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/feedback">Feedback</Link>

            {/* Auth Buttons inside dropdown for mobile */}
            <div className="auth-buttons">
              <Link to="/login" className="btn-secondary">
                Login
              </Link>
              <Link to="/register" className="btn-primary">
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Feedback Hero Section */}
      <section className="feedback-hero">
        <div className="container">
          <div className="feedback-hero-content">
            <h1>Your Feedback Matters</h1>
            <p>Help us improve FurShield by sharing your experience and suggestions</p>
          </div>
        </div>
      </section>

      {/* Feedback Content */}
      <section className="feedback-content">
        <div className="container">
          <div className="feedback-grid">
            {/* Feedback Form */}
            <div className="feedback-form-section">
              <h2>Share Your Experience</h2>
              <form className="feedback-form">
                <div className="form-group">
                  <label htmlFor="user-type">I am a:</label>
                  <select id="user-type" name="user-type" required>
                    <option value="">Select your role</option>
                    <option value="pet-owner">Pet Owner</option>
                    <option value="veterinarian">Veterinarian</option>
                    <option value="shelter">Animal Shelter</option>
                    <option value="visitor">Visitor</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="rating">Overall Rating</label>
                  <div className="rating-stars">
                    <input type="radio" id="star5" name="rating" value="5" />
                    <label htmlFor="star5">★</label>
                    <input type="radio" id="star4" name="rating" value="4" />
                    <label htmlFor="star4">★</label>
                    <input type="radio" id="star3" name="rating" value="3" />
                    <label htmlFor="star3">★</label>
                    <input type="radio" id="star2" name="rating" value="2" />
                    <label htmlFor="star2">★</label>
                    <input type="radio" id="star1" name="rating" value="1" />
                    <label htmlFor="star1">★</label>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="category">Feedback Category</label>
                  <select id="category" name="category" required>
                    <option value="">Select category</option>
                    <option value="usability">Website Usability</option>
                    <option value="features">Features & Functionality</option>
                    <option value="performance">Performance</option>
                    <option value="design">Design & Interface</option>
                    <option value="content">Content Quality</option>
                    <option value="suggestion">Feature Suggestion</option>
                    <option value="bug">Bug Report</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="feedback-text">Your Feedback</label>
                  <textarea
                    id="feedback-text"
                    name="feedback-text"
                    rows="6"
                    placeholder="Please share your thoughts, suggestions, or report any issues..."
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Leave your email if you'd like us to follow up"
                  />
                </div>

                <button type="submit" className="btn-primary">
                  Submit Feedback
                </button>
              </form>
            </div>

            {/* Feedback Info */}
            <div className="feedback-info-section">
              <h2>Why Your Feedback is Important</h2>
              <div className="feedback-benefits">
                <div className="benefit-item">
                  <h3>Improve User Experience</h3>
                  <p>Your insights help us create a better, more intuitive platform for all users.</p>
                </div>
                <div className="benefit-item">
                  <h3>Shape New Features</h3>
                  <p>Suggest features that would make pet care management easier for you.</p>
                </div>
                <div className="benefit-item">
                  <h3>Report Issues</h3>
                  <p>Help us identify and fix bugs to ensure a smooth experience for everyone.</p>
                </div>
                <div className="benefit-item">
                  <h3>Community Impact</h3>
                  <p>Your feedback helps improve pet care services for the entire community.</p>
                </div>
              </div>

              <div className="feedback-stats">
                <h3>Recent Improvements</h3>
                <ul>
                  <li>Enhanced mobile responsiveness based on user feedback</li>
                  <li>Improved appointment booking flow</li>
                  <li>Added dark mode option (coming soon)</li>
                  <li>Streamlined registration process</li>
                </ul>
              </div>
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

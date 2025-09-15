// ContactUs.jsx
import "./ContactPage.css"
import logo from "../assets/images/furshield-logo.jpg";
import { useState } from "react"
import { Link } from "react-router-dom"

export default function ContactUs() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <div className="contact-page">
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

      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contact Us</h1>
            <p>Get in touch with our team for support, questions, or partnerships</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" required>
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Get in Touch</h2>
              <div className="contact-info">
                <div className="info-item">
                  <h3>Email</h3>
                  <p>support@furshield.com</p>
                  <p>partnerships@furshield.com</p>
                </div>
                <div className="info-item">
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                  <p>Mon-Fri: 9AM-6PM EST</p>
                </div>
                <div className="info-item">
                  <h3>Address</h3>
                  <p>123 Pet Care Avenue</p>
                  <p>Animal City, AC 12345</p>
                  <p>United States</p>
                </div>
                <div className="info-item">
                  <h3>Emergency Support</h3>
                  <p>
                    For urgent veterinary emergencies, please contact your local
                    emergency vet clinic directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-placeholder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25016.35197701405!2d3.8688026108398357!3d7.414494899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398dc0fd699c6b%3A0xfe390394488fc9b9!2sShaleekeen%20Pet%20Home!5e1!3m2!1sen!2sng!4v1757753406741!5m2!1sen!2sng"
              width="600"
              height="450"
              style={{ width: "100%", height: "400px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FurShield Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img src={logo} alt="FurShield" />
                <span>FurShield</span>
              </div>
              <p>
                Professional pet care platform connecting owners, vets, and
                shelters.
              </p>
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
                  <Link to="/help">Help Center</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 FurShield. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

import { useState } from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";
import logo from "../assets/images/furshield-logo.jpg";
import petcare from "../assets/images/pet-care.jpg";

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="about-page">
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

      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About FurShield</h1>
            <p>
              Connecting pet owners, veterinarians, and shelters for
              comprehensive pet care
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At FurShield, we believe every pet deserves the best care
                possible. Our platform connects pet owners with trusted
                veterinarians and shelters, making pet healthcare accessible,
                efficient, and comprehensive.
              </p>
              <p>
                We're dedicated to improving the lives of pets and their
                families through innovative technology and compassionate care
                coordination.
              </p>
            </div>
            <div className="mission-image">
              <img src={petcare} alt="Pet Care" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-info">
                <h3>Enny</h3>
                <p>Veterinarian Module Lead</p>
                <p>
                  Specializes in vet registration, profile management, and
                  appointment systems.
                </p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-info">
                <h3>Gbebemi</h3>
                <p>Medical Records Specialist</p>
                <p>
                  Focuses on treatment logs, medical history, and structured
                  health data.
                </p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-info">
                <h3>Clinton</h3>
                <p>Pet Owner Experience Lead</p>
                <p>
                  Develops health tracking, insurance management, and owner
                  dashboard features.
                </p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-info">
                <h3>Dabira</h3>
                <p>Products & Care Specialist</p>
                <p>
                  Manages care resources, product catalog, and AI-powered
                  assistance features.
                </p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-info">
                <h3>Malik</h3>
                <p>Products & Care Specialist</p>
                <p>
                  Manages care resources, product catalog, and AI-powered
                  assistance features.
                </p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-info">
                <h3>Fawaz</h3>
                <p>Products & Care Specialist</p>
                <p>
                  Manages care resources, product catalog, and AI-powered
                  assistance features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Compassionate Care</h3>
              <p>
                Every pet deserves loving, professional care from qualified
                veterinarians.
              </p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>
                We use cutting-edge technology to make pet healthcare more
                accessible.
              </p>
            </div>
            <div className="value-card">
              <h3>Trust</h3>
              <p>
                Building lasting relationships between pet owners and healthcare
                providers.
              </p>
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
  );
}

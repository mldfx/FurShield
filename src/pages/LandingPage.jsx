import { useState } from "react"
import { Link } from "react-router-dom"
import "./LandingPage.css"

import logo from "../assets/images/furshield-logo.jpg"
import heroImg from "../assets/images/happy-pet-with-veterinarian.jpg"
import petOwnerImg from "../assets/images/pet-owner.jpg"
import vetImg from "../assets/images/veterinarian.jpg"
import shelterImg from "../assets/images/animal-shelter.jpg"

const LandingPage = () => {
  const reviewsData = [
    {
      id: "r1",
      name: "Noah C.",
      petType: "Dog owner",
      date: "Sep 8, 2025",
      avatar:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400",
      images: [
        "https://i.imgur.com/mM7KULp.jpeg?fb",
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=800",
      ],
      text: "The vet team was calm, explained everything and took great care of Bella.",
      rating: 5,
      likes: 24,
      comments: 3,
      distance: "2.3 km",
    },
    {
      id: "r2",
      name: "Anna Johnson",
      petType: "Cat owner",
      date: "Aug 30, 2025",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400",
      images: [
        "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1600",
      ],
      text: "Saved us a panic visit — the vet handled Milo's emergency with calm and skill.",
      rating: 4.5,
      likes: 12,
      comments: 1,
      distance: "4.1 km",
    },
    {
      id: "r3",
      name: "Kelly",
      petType: "Rabbit owner",
      date: "Jul 21, 2025",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400",
      images: [
        "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1600",
        "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=800",
      ],
      text: "Super gentle staff and clean facility. The treatment plan included dietary advice which helped my rabbit recover fast.",
      rating: 5,
      likes: 31,
      comments: 6,
      distance: "1.2 km",
    },
  ]

  const services = [
    {
      title: "Veterinary Consultation",
      description: "Professional check-ups and health assessments for your pets.",
      icon: "🐾",
    },
    {
      title: "Pet Health Management",
      description: "Keep track of vaccinations, medications, and health records.",
      icon: "💉",
    },
    {
      title: "Pet Food and Accessory Store",
      description: "Buy quality pet supplies and medications.",
      icon: "🛒",
    },
    {
      title: "Pet Adoption Services",
      description: "Find loving homes for pets in need.",
      icon: "🏡",
    },
  ]

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
            <Link to="/catalog">Products</Link>
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
              Connect with veterinarians, manage pet health records, and find
              loving homes for pets in need.
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
              <p>
                Manage your pet's health records, book appointments, and access
                care resources.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src={vetImg} alt="Veterinarian" />
              </div>
              <h3>For Veterinarians</h3>
              <p>
                Manage appointments, access patient records, and provide quality
                care.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src={shelterImg} alt="Animal Shelter" />
              </div>
              <h3>For Shelters</h3>
              <p>
                Manage adoption listings and track care status for shelter
                animals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-overview">
        <div className="services-container">
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Comprehensive care to keep your pets healthy and happy.
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="book-appointment-cta">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Give Your Pet the Best Care?</h2>
          <p className="cta-subtitle">
            Schedule an appointment with our experienced veterinarians today and
            ensure your pet’s well-being.
          </p>
          <a href="/register" className="cta-button">
            Book Appointment
          </a>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="pet-product-showcase">
        <div className="landing-page-pet-prdt">
          <div className="product-image">
            <img
              src="https://i.pinimg.com/originals/1d/18/c4/1d18c4c968534d9b4513f9eba26bdc1b.jpg"
              alt="Grooming Table"
            />
          </div>
          <div className="product-details">
            <h2 className="product-name">Pet Carrier Bag</h2>
            <p className="product-description">
              Keep your furry friend safe and stylish on every trip with the
              PawPorter Travel Carrier. Designed with breathable mesh panels for
              ventilation, a sturdy yet lightweight frame, and a cozy removable
              pad for comfort, this carrier makes vet visits and weekend getaways
              stress-free. Its adjustable shoulder strap and top handles give you
              flexible carrying options, while the foldable design saves space
              when not in use.
            </p>
            <p className="product-price">$49.99</p>
            <a href="/catalog" className="product-button">
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="pc-reviews-wrap" aria-live="polite">
        <div className="pc-toolbar">
          <div>
            <div className="pc-title">Pet Parent Reviews</div>
          </div>
        </div>
        <div className="pc-carousel">
          {reviewsData.map((r) => (
            <article key={r.id} className="pc-card">
              <div className="pc-header">
                <img src={r.avatar} alt={r.name} className="pc-avatar" />
                <div className="pc-user">
                  <div className="pc-name">{r.name}</div>
                </div>
              </div>
              {r.images && r.images.length > 0 && (
                <img src={r.images[0]} alt="review" className="pc-image-main" />
              )}
              <div className="pc-actions">
                <div className="pc-rating">{r.rating}★</div>
              </div>
              <div className="pc-caption">{r.text}</div>
            </article>
          ))}
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
  )
}

export default LandingPage

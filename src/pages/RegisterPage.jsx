import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "pet-owner",
    licenseNumber: "",
    specialization: "",
    organizationName: "",
    shelterType: "",
    petCount: "",
    experience: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration attempt:", formData);

    // Redirect to login after registration
    navigate("/login");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const renderRoleSpecificFields = () => {
    switch (formData.role) {
      case "veterinarian":
        return (
          <>
            <div className="form-group">
              <label className="form-label">Veterinary License Number</label>
              <input
                type="text"
                name="licenseNumber"
                className="form-input"
                value={formData.licenseNumber}
                onChange={handleChange}
                required
                placeholder="Enter your license number"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Specialization</label>
              <select
                name="specialization"
                className="form-input"
                value={formData.specialization}
                onChange={handleChange}
              >
                <option value="">Select specialization</option>
                <option value="general">General Practice</option>
                <option value="surgery">Surgery</option>
                <option value="internal-medicine">Internal Medicine</option>
                <option value="emergency">Emergency Medicine</option>
                <option value="exotic">Exotic Animals</option>
                <option value="dermatology">Dermatology</option>
                <option value="cardiology">Cardiology</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Years of Experience</label>
              <select name="experience" className="form-input" value={formData.experience} onChange={handleChange}>
                <option value="">Select experience</option>
                <option value="0-2">0-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>
          </>
        );
      case "shelter":
        return (
          <>
            <div className="form-group">
              <label className="form-label">Organization Name</label>
              <input
                type="text"
                name="organizationName"
                className="form-input"
                value={formData.organizationName}
                onChange={handleChange}
                required
                placeholder="Enter shelter/organization name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Shelter Type</label>
              <select name="shelterType" className="form-input" value={formData.shelterType} onChange={handleChange}>
                <option value="">Select shelter type</option>
                <option value="municipal">Municipal Shelter</option>
                <option value="private">Private Shelter</option>
                <option value="rescue">Rescue Organization</option>
                <option value="sanctuary">Animal Sanctuary</option>
                <option value="foster">Foster Network</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Current Animal Capacity</label>
              <select name="petCount" className="form-input" value={formData.petCount} onChange={handleChange}>
                <option value="">Select capacity</option>
                <option value="1-25">1-25 animals</option>
                <option value="26-50">26-50 animals</option>
                <option value="51-100">51-100 animals</option>
                <option value="100+">100+ animals</option>
              </select>
            </div>
          </>
        );
      case "pet-owner":
        return (
          <div className="form-group">
            <label className="form-label">Number of Pets</label>
            <select name="petCount" className="form-input" value={formData.petCount} onChange={handleChange}>
              <option value="">Select number of pets</option>
              <option value="1">1 pet</option>
              <option value="2">2 pets</option>
              <option value="3">3 pets</option>
              <option value="4+">4+ pets</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  const getRoleSpecificHeader = () => {
    switch (formData.role) {
      case "veterinarian":
        return {
          title: "🩺 Join as Veterinarian",
          subtitle: "Register your practice and start managing patient care",
        };
      case "shelter":
        return {
          title: "🏠 Register Your Shelter",
          subtitle: "Join our network and streamline your adoption process",
        };
      case "pet-owner":
      default:
        return {
          title: "🐾 Join FurShield",
          subtitle: "Create your account and start caring for pets today",
        };
    }
  };

  const headerContent = getRoleSpecificHeader();

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-header">
          <a href="/" className="back-link">← Back to Home</a>
          <h1>{headerContent.title}</h1>
          <p>{headerContent.subtitle}</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">I am a:</label>
            <select name="role" className="form-input" value={formData.role} onChange={handleChange}>
              <option value="pet-owner">Pet Owner</option>
              <option value="veterinarian">Veterinarian</option>
              <option value="shelter">Animal Shelter</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">{formData.role === "shelter" ? "Contact Person Name" : "Full Name"}</label>
            <input
              type="text"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={`Enter your ${formData.role === "shelter" ? "contact person" : "full"} name`}
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
              placeholder={`Enter your ${formData.role === "veterinarian" ? "professional" : formData.role === "shelter" ? "organization" : ""} email`}
            />
          </div>

          {renderRoleSpecificFields()}

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

          <button type="submit" className="btn btn-primary register-btn">
            {formData.role === "veterinarian"
              ? "Register Practice"
              : formData.role === "shelter"
                ? "Register Shelter"
                : "Create Account"}
          </button>
        </form>

        <div className="register-footer">
          <p>Already have an account? <a href="/login">Sign in here</a></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

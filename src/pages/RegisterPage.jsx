import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import axios from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "owner",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Registration attempt:", formData);

    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/auth/signup`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Registration successful:", res.data);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  const getRoleSpecificHeader = () => {
    switch (formData.role) {
      case "vet":
        return {
          title: "🩺 Join as Veterinarian",
          subtitle: "Register your practice and start managing patient care",
        };
      case "shelter":
        return {
          title: "🏠 Register Your Shelter",
          subtitle: "Join our network and streamline your adoption process",
        };
      case "owner":
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
          <a href="/" className="back-link">
            ← Back to Home
          </a>
          <h1>{headerContent.title}</h1>
          <p>{headerContent.subtitle}</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">I am a:</label>
            <select
              name="role"
              className="form-input"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="owner">Pet Owner</option>
              <option value="vet">Veterinarian</option>
              <option value="shelter">Animal Shelter</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">
              {formData.role === "shelter"
                ? "Contact Person Name"
                : "Full Name"}
            </label>
            <input
              type="text"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={`Enter your ${
                formData.role === "shelter" ? "contact person" : "full"
              } name`}
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
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="form-input"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Address</label>
            <input
              type="text"
              name="address"
              className="form-input"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter your address"
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

          <button type="submit" className="btn btn-primary register-btn">
            {formData.role === "vet"
              ? "Register Practice"
              : formData.role === "shelter"
              ? "Register Shelter"
              : "Create Account"}
          </button>
        </form>

        <div className="register-footer">
          <p>
            Already have an account? <a href="/login">Sign in here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

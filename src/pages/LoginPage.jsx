import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "pet-owner",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", formData);

    // Redirect to dashboard based on role
    switch (formData.role) {
      case "pet-owner":
        navigate("/dashboard/pet-owner");
        break;
      case "veterinarian":
        navigate("/dashboard/veterinarian");
        break;
      case "shelter":
        navigate("/dashboard/shelter");
        break;
      default:
        navigate("/");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getRoleSpecificContent = () => {
    switch (formData.role) {
      case "pet-owner":
        return {
          title: "🐾 Pet Owner Login",
          subtitle: "Access your pet's health records and appointments",
          additionalInfo: "Manage your furry family members with ease",
        };
      case "veterinarian":
        return {
          title: "🩺 Veterinarian Portal",
          subtitle: "Access your practice management tools",
          additionalInfo: "Review patient records and schedule appointments",
        };
      case "shelter":
        return {
          title: "🏠 Animal Shelter Login",
          subtitle: "Manage shelter operations and adoptions",
          additionalInfo: "Track animals, volunteers, and adoption processes",
        };
      default:
        return {
          title: "🐾 FurShield Login",
          subtitle: "Welcome back! Please sign in to your account.",
          additionalInfo: "",
        };
    }
  };

  const roleContent = getRoleSpecificContent();

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <a href="/" className="back-link">← Back to Home</a>
          <h1>{roleContent.title}</h1>
          <p>{roleContent.subtitle}</p>
          {roleContent.additionalInfo && (
            <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)", marginTop: "0.5rem" }}>
              {roleContent.additionalInfo}
            </p>
          )}
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">I am a:</label>
            <select name="role" className="form-input" value={formData.role} onChange={handleChange}>
              <option value="pet-owner">Pet Owner</option>
              <option value="veterinarian">Veterinarian</option>
              <option value="shelter">Animal Shelter</option>
            </select>
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

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>

          {formData.role === "veterinarian" && (
            <div className="form-group">
              <div style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>
                🔒 Secure access to patient medical records
              </div>
            </div>
          )}

          {formData.role === "shelter" && (
            <div className="form-group">
              <div style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>
                📊 Access shelter management dashboard
              </div>
            </div>
          )}

          <button type="submit" className="btn btn-primary login-btn">
            {formData.role === "veterinarian"
              ? "Access Practice"
              : formData.role === "shelter"
                ? "Access Shelter Portal"
                : "Sign In"}
          </button>
        </form>

        <div className="login-footer">
          <p>Don't have an account? <a href="/register">Sign up here</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

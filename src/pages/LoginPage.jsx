import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "owner", // must match backend: "owner", "vet", "shelter"
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/v1/auth/login", {
        email: formData.email,
        password: formData.password,
        role: formData.role, // include role if your backend checks it
      });

      const { token, user } = res.data;

      // Save token & user
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect based on actual user.role from backend
      switch (user.role) {
        case "owner":
          navigate("/dashboard/pet-owner");
          break;
        case "vet":
          navigate("/dashboard/veterinarian");
          break;
        case "shelter":
          navigate("/dashboard/shelter");
          break;
        default:
          navigate("/");
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  const getRoleSpecificContent = () => {
    switch (formData.role) {
      case "owner":
        return {
          title: "🐾 Pet Owner Login",
          subtitle: "Access your pet's health records and appointments",
          additionalInfo: "Manage your furry family members with ease",
        };
      case "vet":
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
          <a href="/" className="back-link">
            ← Back to Home
          </a>
          <h1>{roleContent.title}</h1>
          <p>{roleContent.subtitle}</p>
          {roleContent.additionalInfo && (
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--muted-foreground)",
                marginTop: "0.5rem",
              }}
            >
              {roleContent.additionalInfo}
            </p>
          )}
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
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

          {error && (
            <div className="form-group">
              <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>
            </div>
          )}

          <button type="submit" className="btn btn-primary login-btn">
            {formData.role === "vet"
              ? "Access Practice"
              : formData.role === "shelter"
              ? "Access Shelter Portal"
              : "Sign In"}
          </button>
        </form>

        <div className="login-footer">
          <p>
            Don't have an account? <a href="/register">Sign up here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

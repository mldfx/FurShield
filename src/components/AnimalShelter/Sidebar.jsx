import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/ShelterDashboard.css";

const Sidebar = ({ activeView, setActiveView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "pets", label: "Pets Profile", icon: "🐕" },
    { id: "care", label: "Pet Care Status Update", icon: "🏥" },
    { id: "adopters", label: "Adopter Interest Form", icon: "❤️" },
  ];

  const handleLogout = () => {
    // Clear session/auth if needed
    setIsOpen(false);
    navigate("/"); // Go back to landing page
  };

  return (
    <>
      {/* Hamburger Button (only visible on mobile) */}
      <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h1 className="sidebar-title">🐾 Animal Shelter</h1>

          {/* Close button on mobile */}
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>

        <nav>
          <ul className="sidebar-nav">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-link ${
                    activeView === item.id ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveView(item.id);
                    setIsOpen(false); // auto-close on mobile after navigation
                  }}
                >
                  <span style={{ marginRight: "0.5rem" }}>{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div style={{ marginTop: "auto", paddingTop: "2rem" }}>
          <button
            className="btn btn-secondary"
            style={{ width: "100%" }}
            onClick={handleLogout}
          >
            ❌ Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

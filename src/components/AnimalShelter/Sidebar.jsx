import "../../pages/ShelterDashboard.css";

const Sidebar = ({ activeView, setActiveView }) => {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "pets", label: "Pets Profile", icon: "🐕" },
    { id: "care", label: "Pet Care Status Update", icon: "🏥" },
    { id: "adopters", label: "Adopter Interest Form", icon: "❤️" },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">🐾 Animal Shelter</h1>
      </div>
      <nav>
        <ul className="sidebar-nav">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                className={`nav-link ${activeView === item.id ? "active" : ""}`}
                onClick={() => setActiveView(item.id)}
              >
                <span style={{ marginRight: "0.5rem" }}>{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

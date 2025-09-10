import DashboardNavbar from "../components/DashboardNavbar"
import "./ShelterDashboard.css"

const ShelterDashboard = () => {
  return (
    <div className="shelter-dashboard">
      <DashboardNavbar userRole="Animal Shelter" />

      <div className="dashboard-content">
        <div className="container">
          <div className="dashboard-header">
            <h1>Shelter Dashboard</h1>
            <p>Manage adoptions and animal care</p>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3>🏠 Shelter Profile</h3>
              <p>Shelter information will be implemented here</p>
              <div className="placeholder-text">
                • Shelter registration details
                <br />• Contact information
                <br />• Operating hours and capacity
              </div>
            </div>

            <div className="dashboard-card">
              <h3>🐕 Adoption Listings</h3>
              <p>Adoption management will be implemented here</p>
              <div className="placeholder-text">
                • Create adoption listings
                <br />• Update pet information
                <br />• Manage adoption status
              </div>
            </div>

            <div className="dashboard-card">
              <h3>💊 Care Status</h3>
              <p>Animal care management will be implemented here</p>
              <div className="placeholder-text">
                • Track medical care
                <br />• Monitor health status
                <br />• Care schedule management
              </div>
            </div>

            <div className="dashboard-card">
              <h3>📊 Statistics</h3>
              <p>Shelter analytics will be implemented here</p>
              <div className="placeholder-text">
                • Adoption success rates
                <br />• Animal intake/outcome data
                <br />• Monthly reports
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShelterDashboard

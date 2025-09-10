import DashboardNavbar from "../components/DashboardNavbar"
import "./VeterinarianDashboard.css"

const VeterinarianDashboard = () => {
  return (
    <div className="veterinarian-dashboard">
      <DashboardNavbar userRole="Veterinarian" />

      <div className="dashboard-content">
        <div className="container">
          <div className="dashboard-header">
            <h1>Veterinarian Dashboard</h1>
            <p>Manage appointments and patient care</p>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3>👨‍⚕️ My Profile</h3>
              <p>Profile management will be implemented here</p>
              <div className="placeholder-text">
                • Specialization settings
                <br />• Available time slots
                <br />• Professional credentials
              </div>
            </div>

            <div className="dashboard-card">
              <h3>📅 Appointments</h3>
              <p>Appointment management will be implemented here</p>
              <div className="placeholder-text">
                • View upcoming bookings
                <br />• Approve/reschedule appointments
                <br />• Update availability
              </div>
            </div>

            <div className="dashboard-card">
              <h3>🐾 Patient Records</h3>
              <p>Pet medical history will be implemented here</p>
              <div className="placeholder-text">
                • View pet medical history
                <br />• Access booked pets' data
                <br />• Patient information overview
              </div>
            </div>

            <div className="dashboard-card">
              <h3>📝 Treatment Logs</h3>
              <p>Treatment logging will be implemented here</p>
              <div className="placeholder-text">
                • Log treatments & observations
                <br />• Diagnosis and medication records
                <br />• Follow-up action plans
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VeterinarianDashboard

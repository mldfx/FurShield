import DashboardNavbar from "../components/DashboardNavbar"
import "./PetOwnerDashboard.css"

const PetOwnerDashboard = () => {
  return (
    <div className="pet-owner-dashboard">
      <DashboardNavbar userRole="Pet Owner" />

      <div className="dashboard-content">
        <div className="container">
          <div className="dashboard-header">
            <h1>Pet Owner Dashboard</h1>
            <p>Manage your pets' health and care</p>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3>🐕 My Pets</h3>
              <p>Pet profile management will be implemented here</p>
              <div className="placeholder-text">
                • Add/Edit/Delete/View pets
                <br />• Pet information and photos
                <br />• Breed and age tracking
              </div>
            </div>

            <div className="dashboard-card">
              <h3>📋 Health Records</h3>
              <p>Health record timeline UI will be implemented here</p>
              <div className="placeholder-text">
                • Vaccination tracking
                <br />• Medical history timeline
                <br />• Upload medical files/images
              </div>
            </div>

            <div className="dashboard-card">
              <h3>📅 Appointments</h3>
              <p>Appointment booking system will be implemented here</p>
              <div className="placeholder-text">
                • Book vet appointments
                <br />• View upcoming visits
                <br />• Appointment history
              </div>
            </div>

            <div className="dashboard-card">
              <h3>📚 Care Resources</h3>
              <p>Pet care information will be implemented here</p>
              <div className="placeholder-text">
                • Feeding guidelines
                <br />• Exercise tips
                <br />• Health articles and videos
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetOwnerDashboard

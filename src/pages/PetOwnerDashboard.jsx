import { Link } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import "./PetOwnerDashboard.css";

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

            <Link to="/dashboard/health-records">
              <div className="dashboard-card">
                <h3>📋 Health Records</h3>
                <p>View and manage your pet's health records</p>
                <div className="placeholder-text">
                  • Vaccination tracking
                  <br />• Medical history timeline
                  <br />• Upload medical files/images
                </div>
              </div>
            </Link>

            <Link to="/dashboard/health-timeline">
              <div className="dashboard-card">
                <h3>🕒 Health Timeline</h3>
                <p>See your pet's health events in a timeline</p>
                <div className="placeholder-text">
                  • Chronological health events
                  <br />• Milestones
                  <br />• Treatments and illnesses
                </div>
              </div>
            </Link>

            <Link to="/dashboard/document-upload">
              <div className="dashboard-card">
                <h3>📂 Document Upload</h3>
                <p>Upload and manage pet documents</p>
                <div className="placeholder-text">
                  • Vet certificates
                  <br />• Lab reports
                  <br />• X-rays and more
                </div>
              </div>
            </Link>

            <Link to="/dashboard/insurance-management">
              <div className="dashboard-card">
                <h3>🛡️ Insurance Management</h3>
                <p>Manage your pet's insurance details</p>
                <div className="placeholder-text">
                  • Policy info
                  <br />• Claims
                  <br />• Renewal reminders
                </div>
              </div>
            </Link>
            <Link to={"/dashboard/pet-appointment"}>
            <div className="dashboard-card">
              <h3>📅 Appointments</h3>
              <p>Appointment booking system will be implemented here</p>
              <div className="placeholder-text">
                • Book vet appointments
                <br />• View upcoming visits 
                <br />• Appointment history
              </div>
            </div> 
            </Link>

            <Link to="/dashboard/care-resources">
              <div className="dashboard-card">
                <h3>📚 Care Resources</h3>
                <p>Pet care information will be implemented here</p>
                <div className="placeholder-text">
                  • Feeding guidelines
                  <br />• Exercise tips
                  <br />• Health articles and videos
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetOwnerDashboard;

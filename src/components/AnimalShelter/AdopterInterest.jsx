import { useState } from "react"
// import "./ShelterDashboard.css";
import "../../pages/ShelterDashboard.css";


const AdopterInterest = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      applicantName: "Jennifer Smith",
      email: "jennifer.smith@email.com",
      phone: "(555) 123-4567",
      petInterested: "Buddy",
      petId: 1,
      applicationDate: "2024-03-10",
      status: "Under Review",
      experience: "Previous dog owner for 10 years",
      livingSpace: "House with large backyard",
      otherPets: "One cat, 5 years old",
      reason: "Looking for a companion for our family and existing cat",
      references: "Dr. Johnson - Vet, (555) 987-6543",
      notes: "Very enthusiastic, has done research on Golden Retrievers",
    },
    {
      id: 2,
      applicantName: "Michael Rodriguez",
      email: "mike.rodriguez@email.com",
      phone: "(555) 234-5678",
      petInterested: "Luna",
      petId: 4,
      applicationDate: "2024-03-12",
      status: "Approved",
      experience: "First-time pet owner, completed training course",
      livingSpace: "Apartment with nearby dog park",
      otherPets: "None",
      reason: "Active lifestyle, want a running companion",
      references: "Sarah Wilson - Trainer, (555) 876-5432",
      notes: "Completed puppy training course, very prepared",
    },
    {
      id: 3,
      applicantName: "Emily Chen",
      email: "emily.chen@email.com",
      phone: "(555) 345-6789",
      petInterested: "Whiskers",
      petId: 2,
      applicationDate: "2024-03-14",
      status: "Pending Interview",
      experience: "Cat owner for 15 years",
      livingSpace: "Quiet apartment, cat-proofed",
      otherPets: "Recently lost senior cat",
      reason: "Ready to provide love to another cat in need",
      references: "Dr. Martinez - Vet, (555) 765-4321",
      notes: "Excellent references, experienced with senior cats",
    },
  ])

  const [selectedApplication, setSelectedApplication] = useState(null)
  const [showResponseForm, setShowResponseForm] = useState(false)
  const [responseMessage, setResponseMessage] = useState("")

  const updateApplicationStatus = (applicationId, newStatus) => {
    setApplications(applications.map((app) => (app.id === applicationId ? { ...app, status: newStatus } : app)))
  }

  const handleSendResponse = (e) => {
    e.preventDefault()
    // In a real app, this would send an email
    alert(`Response sent to ${selectedApplication.applicantName}: ${responseMessage}`)
    setShowResponseForm(false)
    setResponseMessage("")
    setSelectedApplication(null)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "status-healthy"
      case "Under Review":
        return "status-pending"
      case "Pending Interview":
        return "status-needs-attention"
      case "Rejected":
        return "status-adopted"
      default:
        return "status-pending"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "Approved":
        return "✅"
      case "Under Review":
        return "📋"
      case "Pending Interview":
        return "🗣️"
      case "Rejected":
        return "❌"
      default:
        return "📋"
    }
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#2d3748" }}>Adopter Interest Forms</h1>
        <div style={{ display: "flex", gap: "1rem" }}>
          <span className="status-badge status-pending">{applications.length} Total Applications</span>
        </div>
      </div>

      {/* Application Statistics */}
      <div className="stats-grid" style={{ marginBottom: "2rem" }}>
        <div className="stat-card">
          <div className="stat-number">{applications.filter((app) => app.status === "Under Review").length}</div>
          <div className="stat-label">Under Review</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{applications.filter((app) => app.status === "Pending Interview").length}</div>
          <div className="stat-label">Pending Interview</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{applications.filter((app) => app.status === "Approved").length}</div>
          <div className="stat-label">Approved</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{applications.filter((app) => app.status === "Rejected").length}</div>
          <div className="stat-label">Rejected</div>
        </div>
      </div>

      {/* Applications List */}
      <div className="grid grid-2">
        {applications.map((application) => (
          <div key={application.id} className="card">
            <div className="card-header">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <div>
                  <h3 className="card-title">{application.applicantName}</h3>
                  <p className="card-subtitle">Interested in: {application.petInterested}</p>
                </div>
                <span className={`status-badge ${getStatusColor(application.status)}`}>
                  {getStatusIcon(application.status)} {application.status}
                </span>
              </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", fontSize: "0.9rem" }}>
                <div>
                  <strong>Email:</strong> {application.email}
                </div>
                <div>
                  <strong>Phone:</strong> {application.phone}
                </div>
                <div>
                  <strong>Applied:</strong> {new Date(application.applicationDate).toLocaleDateString()}
                </div>
                <div>
                  <strong>Experience:</strong> {application.experience}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <p style={{ fontSize: "0.9rem", color: "#4a5568", marginBottom: "0.5rem" }}>
                <strong>Living Space:</strong> {application.livingSpace}
              </p>
              <p style={{ fontSize: "0.9rem", color: "#4a5568", marginBottom: "0.5rem" }}>
                <strong>Other Pets:</strong> {application.otherPets}
              </p>
              <p style={{ fontSize: "0.9rem", color: "#4a5568", marginBottom: "0.5rem" }}>
                <strong>Reason:</strong> {application.reason}
              </p>
              {application.notes && (
                <p style={{ fontSize: "0.9rem", color: "#718096", fontStyle: "italic" }}>
                  <strong>Notes:</strong> {application.notes}
                </p>
              )}
            </div>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <select
                className="form-select"
                value={application.status}
                onChange={(e) => updateApplicationStatus(application.id, e.target.value)}
                style={{ fontSize: "0.8rem", padding: "0.5rem", flex: "1", minWidth: "120px" }}
              >
                <option value="Under Review">Under Review</option>
                <option value="Pending Interview">Pending Interview</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
              <button
                className="btn btn-secondary"
                style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}
                onClick={() => {
                  setSelectedApplication(application)
                  setShowResponseForm(true)
                }}
              >
                Send Response
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Response Form Modal */}
      {showResponseForm && selectedApplication && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div className="card" style={{ width: "90%", maxWidth: "600px", margin: "2rem" }}>
            <div className="card-header">
              <h2 className="card-title">Send Response to {selectedApplication.applicantName}</h2>
              <p className="card-subtitle">
                Application for: {selectedApplication.petInterested} | Status: {selectedApplication.status}
              </p>
            </div>

            <form onSubmit={handleSendResponse}>
              <div className="form-group">
                <label className="form-label">Email Template</label>
                <select
                  className="form-select"
                  onChange={(e) => setResponseMessage(e.target.value)}
                  style={{ marginBottom: "1rem" }}
                >
                  <option value="">Select a template...</option>
                  <option value="Thank you for your interest in adopting from our shelter. We have received your application and will review it within 2-3 business days. We may contact you for additional information or to schedule a meet-and-greet.">
                    Standard Acknowledgment
                  </option>
                  <option value="Congratulations! Your adoption application has been approved. Please contact us at your earliest convenience to schedule a time to complete the adoption process and take your new pet home.">
                    Approval Notification
                  </option>
                  <option value="We would like to schedule an interview to discuss your application further. Please let us know your availability for the next week, and we'll arrange a convenient time to meet.">
                    Interview Request
                  </option>
                  <option value="Thank you for your interest in adoption. After careful consideration, we have decided to move forward with another applicant whose situation is a better match for this particular pet. We encourage you to consider other pets in our care.">
                    Polite Rejection
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  value={responseMessage}
                  onChange={(e) => setResponseMessage(e.target.value)}
                  placeholder="Type your response message here..."
                  rows="6"
                  required
                />
              </div>

              <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    setShowResponseForm(false)
                    setResponseMessage("")
                    setSelectedApplication(null)
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Send Email
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Detailed Application View */}
      <div className="card" style={{ marginTop: "2rem" }}>
        <div className="card-header">
          <h2 className="card-title">Application Details</h2>
          <p className="card-subtitle">Click on any application above to view full details</p>
        </div>

        {selectedApplication ? (
          <div>
            <h3 style={{ marginBottom: "1rem", color: "#2d3748" }}>
              {selectedApplication.applicantName} - {selectedApplication.petInterested}
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
              <div>
                <h4 style={{ color: "#68d391", marginBottom: "0.5rem" }}>Contact Information</h4>
                <p>
                  <strong>Email:</strong> {selectedApplication.email}
                </p>
                <p>
                  <strong>Phone:</strong> {selectedApplication.phone}
                </p>
                <p>
                  <strong>Application Date:</strong>{" "}
                  {new Date(selectedApplication.applicationDate).toLocaleDateString()}
                </p>
              </div>

              <div>
                <h4 style={{ color: "#68d391", marginBottom: "0.5rem" }}>Experience & Living Situation</h4>
                <p>
                  <strong>Experience:</strong> {selectedApplication.experience}
                </p>
                <p>
                  <strong>Living Space:</strong> {selectedApplication.livingSpace}
                </p>
                <p>
                  <strong>Other Pets:</strong> {selectedApplication.otherPets}
                </p>
              </div>

              <div>
                <h4 style={{ color: "#68d391", marginBottom: "0.5rem" }}>Additional Information</h4>
                <p>
                  <strong>Reason for Adoption:</strong> {selectedApplication.reason}
                </p>
                <p>
                  <strong>References:</strong> {selectedApplication.references}
                </p>
                {selectedApplication.notes && (
                  <p>
                    <strong>Staff Notes:</strong> {selectedApplication.notes}
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p style={{ textAlign: "center", color: "#718096", padding: "2rem" }}>
            Select an application to view detailed information
          </p>
        )}
      </div>
    </div>
  )
}

export default AdopterInterest

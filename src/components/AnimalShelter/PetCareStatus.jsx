import { useState } from "react"
// import "./ShelterDashboard.css";
import "../../pages/ShelterDashboard.css";

const PetCareStatus = () => {
  const [pets] = useState([
    { id: 1, name: "Buddy", breed: "Golden Retriever" },
    { id: 2, name: "Whiskers", breed: "Domestic Shorthair" },
    { id: 3, name: "Max", breed: "German Shepherd" },
    { id: 4, name: "Luna", breed: "Labrador Mix" },
  ])

  const [careRecords, setCareRecords] = useState([
    {
      id: 1,
      petId: 1,
      petName: "Buddy",
      type: "Feeding",
      description: "Morning meal - dry food with supplements",
      date: "2024-03-15",
      time: "08:00",
      staff: "Sarah Johnson",
      status: "Completed",
    },
    {
      id: 2,
      petId: 1,
      petName: "Buddy",
      type: "Grooming",
      description: "Full bath and nail trimming",
      date: "2024-03-14",
      time: "14:30",
      staff: "Mike Chen",
      status: "Completed",
    },
    {
      id: 3,
      petId: 2,
      petName: "Whiskers",
      type: "Medical",
      description: "Routine vaccination - FVRCP",
      date: "2024-03-15",
      time: "10:15",
      staff: "Dr. Emily Rodriguez",
      status: "Completed",
    },
    {
      id: 4,
      petId: 3,
      petName: "Max",
      type: "Medical",
      description: "Post-surgery checkup and bandage change",
      date: "2024-03-15",
      time: "11:00",
      staff: "Dr. Emily Rodriguez",
      status: "Scheduled",
    },
  ])

  const [showAddForm, setShowAddForm] = useState(false)
  const [newRecord, setNewRecord] = useState({
    petId: "",
    type: "Feeding",
    description: "",
    date: "",
    time: "",
    staff: "",
    status: "Scheduled",
  })

  const [selectedPet, setSelectedPet] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  const handleAddRecord = (e) => {
    e.preventDefault()
    const selectedPetData = pets.find((pet) => pet.id === Number.parseInt(newRecord.petId))
    const record = {
      id: careRecords.length + 1,
      ...newRecord,
      petId: Number.parseInt(newRecord.petId),
      petName: selectedPetData.name,
    }
    setCareRecords([...careRecords, record])
    setNewRecord({
      petId: "",
      type: "Feeding",
      description: "",
      date: "",
      time: "",
      staff: "",
      status: "Scheduled",
    })
    setShowAddForm(false)
  }

  const updateRecordStatus = (recordId, status) => {
    setCareRecords(careRecords.map((record) => (record.id === recordId ? { ...record, status } : record)))
  }

  const filteredRecords = careRecords.filter((record) => {
    const petMatch = selectedPet === "all" || record.petId === Number.parseInt(selectedPet)
    const typeMatch = selectedType === "all" || record.type === selectedType
    return petMatch && typeMatch
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "status-healthy"
      case "Scheduled":
        return "status-pending"
      case "Overdue":
        return "status-needs-attention"
      default:
        return "status-pending"
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case "Feeding":
        return "🍽️"
      case "Grooming":
        return "✂️"
      case "Medical":
        return "🏥"
      case "Exercise":
        return "🏃"
      default:
        return "📝"
    }
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#2d3748" }}>Pet Care Status Updates</h1>
        <button className="btn btn-primary" onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? "Cancel" : "Add Care Record"}
        </button>
      </div>

      {/* Filters */}
      <div className="card" style={{ marginBottom: "2rem" }}>
        <div className="card-header">
          <h2 className="card-title">Filter Records</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
          <div className="form-group">
            <label className="form-label">Pet</label>
            <select className="form-select" value={selectedPet} onChange={(e) => setSelectedPet(e.target.value)}>
              <option value="all">All Pets</option>
              {pets.map((pet) => (
                <option key={pet.id} value={pet.id}>
                  {pet.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Care Type</label>
            <select className="form-select" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
              <option value="all">All Types</option>
              <option value="Feeding">Feeding</option>
              <option value="Grooming">Grooming</option>
              <option value="Medical">Medical</option>
              <option value="Exercise">Exercise</option>
            </select>
          </div>
        </div>
      </div>

      {/* Add Record Form */}
      {showAddForm && (
        <div className="card" style={{ marginBottom: "2rem" }}>
          <div className="card-header">
            <h2 className="card-title">Add Care Record</h2>
          </div>
          <form onSubmit={handleAddRecord}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
              <div className="form-group">
                <label className="form-label">Pet</label>
                <select
                  className="form-select"
                  value={newRecord.petId}
                  onChange={(e) => setNewRecord({ ...newRecord, petId: e.target.value })}
                  required
                >
                  <option value="">Select Pet</option>
                  {pets.map((pet) => (
                    <option key={pet.id} value={pet.id}>
                      {pet.name} - {pet.breed}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Care Type</label>
                <select
                  className="form-select"
                  value={newRecord.type}
                  onChange={(e) => setNewRecord({ ...newRecord, type: e.target.value })}
                >
                  <option value="Feeding">Feeding</option>
                  <option value="Grooming">Grooming</option>
                  <option value="Medical">Medical</option>
                  <option value="Exercise">Exercise</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-input"
                  value={newRecord.date}
                  onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Time</label>
                <input
                  type="time"
                  className="form-input"
                  value={newRecord.time}
                  onChange={(e) => setNewRecord({ ...newRecord, time: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Staff Member</label>
                <input
                  type="text"
                  className="form-input"
                  value={newRecord.staff}
                  onChange={(e) => setNewRecord({ ...newRecord, staff: e.target.value })}
                  placeholder="Staff member name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  value={newRecord.status}
                  onChange={(e) => setNewRecord({ ...newRecord, status: e.target.value })}
                >
                  <option value="Scheduled">Scheduled</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                className="form-textarea"
                value={newRecord.description}
                onChange={(e) => setNewRecord({ ...newRecord, description: e.target.value })}
                placeholder="Describe the care activity, medications, observations, etc."
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Record
            </button>
          </form>
        </div>
      )}

      {/* Care Records */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Care Records ({filteredRecords.length})</h2>
          <p className="card-subtitle">Track feeding, grooming, and medical care for all pets</p>
        </div>

        {filteredRecords.length === 0 ? (
          <p style={{ textAlign: "center", color: "#718096", padding: "2rem" }}>
            No care records found for the selected filters.
          </p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Pet</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Date & Time</th>
                  <th>Staff</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords
                  .sort((a, b) => new Date(b.date + " " + b.time) - new Date(a.date + " " + a.time))
                  .map((record) => (
                    <tr key={record.id}>
                      <td>
                        <strong>{record.petName}</strong>
                      </td>
                      <td>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          {getTypeIcon(record.type)}
                          {record.type}
                        </span>
                      </td>
                      <td style={{ maxWidth: "300px" }}>{record.description}</td>
                      <td>
                        <div>
                          <div>{new Date(record.date).toLocaleDateString()}</div>
                          <div style={{ fontSize: "0.8rem", color: "#718096" }}>{record.time}</div>
                        </div>
                      </td>
                      <td>{record.staff}</td>
                      <td>
                        <span className={`status-badge ${getStatusColor(record.status)}`}>{record.status}</span>
                      </td>
                      <td>
                        {record.status === "Scheduled" && (
                          <button
                            className="btn btn-secondary"
                            style={{ fontSize: "0.8rem", padding: "0.25rem 0.75rem" }}
                            onClick={() => updateRecordStatus(record.id, "Completed")}
                          >
                            Mark Complete
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="stats-grid" style={{ marginTop: "2rem" }}>
        <div className="stat-card">
          <div className="stat-number">
            {
              careRecords.filter((r) => r.status === "Completed" && r.date === new Date().toISOString().split("T")[0])
                .length
            }
          </div>
          <div className="stat-label">Today's Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{careRecords.filter((r) => r.status === "Scheduled").length}</div>
          <div className="stat-label">Scheduled Tasks</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{careRecords.filter((r) => r.type === "Medical").length}</div>
          <div className="stat-label">Medical Records</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">
            {
              careRecords.filter((r) => r.type === "Feeding" && r.date === new Date().toISOString().split("T")[0])
                .length
            }
          </div>
          <div className="stat-label">Today's Feedings</div>
        </div>
      </div>
    </div>
  )
}

export default PetCareStatus

import { useState } from "react"
// import "./ShelterDashboard.css";
import "../../pages/ShelterDashboard.css";


const PetProfiles = () => {
  const [pets, setPets] = useState([
    {
      id: 1,
      name: "Buddy",
      breed: "Golden Retriever",
      age: "3 years",
      healthStatus: "Healthy",
      adoptionStatus: "Available",
      image: "https://images.unsplash.com/photo-1558788353-f76d92427f16",
      description: "Friendly and energetic dog, great with kids and other pets.",
      arrivalDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Whiskers",
      breed: "Domestic Shorthair",
      age: "2 years",
      healthStatus: "Healthy",
      adoptionStatus: "Available",
      image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6",
      description: "Calm and affectionate cat, loves to cuddle and play with toys.",
      arrivalDate: "2024-02-10",
    },
    {
      id: 3,
      name: "Max",
      breed: "German Shepherd",
      age: "5 years",
      healthStatus: "Needs Attention",
      adoptionStatus: "Pending",
      image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6",
      description: "Well-trained and loyal, currently recovering from minor surgery.",
      arrivalDate: "2024-01-20",
    },
    {
      id: 4,
      name: "Luna",
      breed: "Labrador Mix",
      age: "1 year",
      healthStatus: "Healthy",
      adoptionStatus: "Available",
      image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6",
      description: "Playful puppy with lots of energy, needs an active family.",
      arrivalDate: "2024-03-05",
    },
  ])

  const [showAddForm, setShowAddForm] = useState(false)
  const [newPet, setNewPet] = useState({
    name: "",
    breed: "",
    age: "",
    healthStatus: "Healthy",
    adoptionStatus: "Available",
    description: "",
    arrivalDate: "",
  })

  const handleAddPet = (e) => {
    e.preventDefault()
    const pet = {
      id: pets.length + 1,
      ...newPet,
      image: "https://images.unsplash.com/photo-1558788353-f76d92427f16",
    }
    setPets([...pets, pet])
    setNewPet({
      name: "",
      breed: "",
      age: "",
      healthStatus: "Healthy",
      adoptionStatus: "Available",
      description: "",
      arrivalDate: "",
    })
    setShowAddForm(false)
  }

  const updatePetStatus = (petId, field, value) => {
    setPets(pets.map((pet) => (pet.id === petId ? { ...pet, [field]: value } : pet)))
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#2d3748" }}>Pet Profiles</h1>
        <button className="btn btn-primary" onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? "Cancel" : "Add New Pet"}
        </button>
      </div>

      {showAddForm && (
        <div className="card" style={{ marginBottom: "2rem" }}>
          <div className="card-header">
            <h2 className="card-title">Add New Pet</h2>
          </div>
          <form onSubmit={handleAddPet}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
              <div className="form-group">
                <label className="form-label">Pet Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={newPet.name}
                  onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Breed</label>
                <input
                  type="text"
                  className="form-input"
                  value={newPet.breed}
                  onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Age</label>
                <input
                  type="text"
                  className="form-input"
                  value={newPet.age}
                  onChange={(e) => setNewPet({ ...newPet, age: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Health Status</label>
                <select
                  className="form-select"
                  value={newPet.healthStatus}
                  onChange={(e) => setNewPet({ ...newPet, healthStatus: e.target.value })}
                >
                  <option value="Healthy">Healthy</option>
                  <option value="Needs Attention">Needs Attention</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Adoption Status</label>
                <select
                  className="form-select"
                  value={newPet.adoptionStatus}
                  onChange={(e) => setNewPet({ ...newPet, adoptionStatus: e.target.value })}
                >
                  <option value="Available">Available</option>
                  <option value="Pending">Pending</option>
                  <option value="Adopted">Adopted</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Arrival Date</label>
                <input
                  type="date"
                  className="form-input"
                  value={newPet.arrivalDate}
                  onChange={(e) => setNewPet({ ...newPet, arrivalDate: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                className="form-textarea"
                value={newPet.description}
                onChange={(e) => setNewPet({ ...newPet, description: e.target.value })}
                placeholder="Describe the pet's personality, behavior, and special needs..."
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Pet
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-3">
        {pets.map((pet) => (
          <div key={pet.id} className="card">
            <img src={pet.image || "/placeholder.svg"} alt={pet.name} className="pet-image" />
            <div className="card-header">
              <h3 className="card-title">{pet.name}</h3>
              <p className="card-subtitle">
                {pet.breed} • {pet.age}
              </p>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <p style={{ marginBottom: "0.5rem", color: "#4a5568" }}>{pet.description}</p>
              <p style={{ fontSize: "0.9rem", color: "#718096" }}>
                Arrived: {new Date(pet.arrivalDate).toLocaleDateString()}
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span
                className={`status-badge ${
                  pet.healthStatus === "Healthy" ? "status-healthy" : "status-needs-attention"
                }`}
              >
                {pet.healthStatus}
              </span>
              <span
                className={`status-badge ${
                  pet.adoptionStatus === "Available"
                    ? "status-available"
                    : pet.adoptionStatus === "Adopted"
                      ? "status-adopted"
                      : "status-pending"
                }`}
              >
                {pet.adoptionStatus}
              </span>
            </div>

            <div style={{ display: "flex", gap: "0.5rem", flexDirection: "column" }}>
              <div className="form-group">
                <label className="form-label" style={{ fontSize: "0.8rem" }}>
                  Health Status
                </label>
                <select
                  className="form-select"
                  value={pet.healthStatus}
                  onChange={(e) => updatePetStatus(pet.id, "healthStatus", e.target.value)}
                  style={{ fontSize: "0.9rem", padding: "0.5rem" }}
                >
                  <option value="Healthy">Healthy</option>
                  <option value="Needs Attention">Needs Attention</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" style={{ fontSize: "0.8rem" }}>
                  Adoption Status
                </label>
                <select
                  className="form-select"
                  value={pet.adoptionStatus}
                  onChange={(e) => updatePetStatus(pet.id, "adoptionStatus", e.target.value)}
                  style={{ fontSize: "0.9rem", padding: "0.5rem" }}
                >
                  <option value="Available">Available</option>
                  <option value="Pending">Pending</option>
                  <option value="Adopted">Adopted</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PetProfiles

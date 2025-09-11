"use client"

import { useState, useEffect } from "react"
import api, { API_ENDPOINTS } from "../../../api/config"
import "./mypet.css"

const MyPet = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingPet, setEditingPet] = useState(null)
  const [pets, setPets] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [newPet, setNewPet] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    weight: "",
    color: "",
    gender: "",
    microchipId: "",
    medicalHistory: "",
    photos: [],
  })

  useEffect(() => {
    fetchPets()
  }, [])

  const fetchPets = async () => {
    try {
      setLoading(true)
      const response = await api.get(API_ENDPOINTS.pets.getAll)
      setPets(response.data)
    } catch (error) {
      console.error("Error fetching pets:", error)
      setError("Failed to load pets")
      // Fallback to mock data if API fails
      setPets([
        {
          id: 1,
          name: "Buddy",
          species: "Dog",
          breed: "Golden Retriever",
          age: 3,
          weight: "65 lbs",
          color: "Golden",
          gender: "Male",
          microchipId: "MC123456789",
          medicalHistory: "Vaccinated, Regular checkups, No known allergies",
          photos: [
            "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=300&fit=crop",
          ],
        },
        {
          id: 2,
          name: "Whiskers",
          species: "Cat",
          breed: "Persian",
          age: 2,
          weight: "12 lbs",
          color: "White",
          gender: "Female",
          microchipId: "MC987654321",
          medicalHistory: "Spayed, Indoor cat, Regular grooming needed",
          photos: ["https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=300&h=300&fit=crop"],
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleAddPet = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const petData = {
        ...newPet,
        age: Number.parseInt(newPet.age),
      }

      const response = await api.post(API_ENDPOINTS.pets.create, petData)

      if (response.status === 201 || response.status === 200) {
        // Add the new pet to local state
        setPets([...pets, response.data])

        // Reset form
        setNewPet({
          name: "",
          species: "",
          breed: "",
          age: "",
          weight: "",
          color: "",
          gender: "",
          microchipId: "",
          medicalHistory: "",
          photos: [],
        })
        setShowAddForm(false)
        setActiveTab(pets.length) // Switch to the new pet's tab
      }
    } catch (error) {
      console.error("Error adding pet:", error)
      setError("Failed to add pet. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleEditPet = (pet) => {
    setEditingPet({ ...pet })
  }

  const handleUpdatePet = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await api.put(API_ENDPOINTS.pets.update(editingPet.id), editingPet)

      if (response.status === 200) {
        // Update local state
        setPets(pets.map((pet) => (pet.id === editingPet.id ? response.data : pet)))
        setEditingPet(null)
      }
    } catch (error) {
      console.error("Error updating pet:", error)
      setError("Failed to update pet. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleDeletePet = async (petId) => {
    if (window.confirm("Are you sure you want to delete this pet?")) {
      setLoading(true)
      setError(null)

      try {
        await api.delete(API_ENDPOINTS.pets.delete(petId))

        // Update local state
        setPets(pets.filter((pet) => pet.id !== petId))
        if (activeTab >= pets.length - 1) {
          setActiveTab(Math.max(0, pets.length - 2))
        }
      } catch (error) {
        console.error("Error deleting pet:", error)
        setError("Failed to delete pet. Please try again.")
      } finally {
        setLoading(false)
      }
    }
  }

  const handlePhotoUpload = async (e, isEditing = false) => {
    const files = Array.from(e.target.files)

    for (const file of files) {
      try {
        // Create FormData for file upload
        const formData = new FormData()
        formData.append("photo", file)

        if (isEditing && editingPet.id) {
          // Upload to API if pet exists
          const response = await api.post(API_ENDPOINTS.pets.uploadPhoto(editingPet.id), formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })

          setEditingPet({
            ...editingPet,
            photos: [...editingPet.photos, response.data.photoUrl],
          })
        } else {
          // For new pets, convert to base64 for preview
          const reader = new FileReader()
          reader.onload = (event) => {
            const photoUrl = event.target.result
            if (isEditing) {
              setEditingPet({
                ...editingPet,
                photos: [...editingPet.photos, photoUrl],
              })
            } else {
              setNewPet({
                ...newPet,
                photos: [...newPet.photos, photoUrl],
              })
            }
          }
          reader.readAsDataURL(file)
        }
      } catch (error) {
        console.error("Error uploading photo:", error)
        // Fallback to local preview
        const reader = new FileReader()
        reader.onload = (event) => {
          const photoUrl = event.target.result
          if (isEditing) {
            setEditingPet({
              ...editingPet,
              photos: [...editingPet.photos, photoUrl],
            })
          } else {
            setNewPet({
              ...newPet,
              photos: [...newPet.photos, photoUrl],
            })
          }
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const removePhoto = (index, isEditing = false) => {
    if (isEditing) {
      setEditingPet({
        ...editingPet,
        photos: editingPet.photos.filter((_, i) => i !== index),
      })
    } else {
      setNewPet({
        ...newPet,
        photos: newPet.photos.filter((_, i) => i !== index),
      })
    }
  }

  return (
    <div className="mypet-container">
      <div className="mypet-header">
        <h1>My Pets</h1>
        {error && <div className="error-message">{error}</div>}
        <button className="add-pet-btn" onClick={() => setShowAddForm(true)} disabled={loading}>
          + Add New Pet
        </button>
      </div>

      {loading && <div className="loading">Loading...</div>}

      {pets.length === 0 ? (
        <div className="no-pets">
          <h3>No pets added yet</h3>
          <p>Click "Add New Pet" to get started!</p>
        </div>
      ) : (
        <>
          <div className="pet-tabs">
            {pets.map((pet, index) => (
              <button
                key={pet.id}
                className={`tab ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {pet.name}
              </button>
            ))}
          </div>

          <div className="pet-content">
            {pets[activeTab] && (
              <div className="pet-profile">
                <div className="pet-actions">
                  <button className="edit-btn" onClick={() => handleEditPet(pets[activeTab])}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => handleDeletePet(pets[activeTab].id)}>
                    Delete
                  </button>
                </div>

                <div className="pet-info-grid">
                  <div className="pet-photos">
                    <h3>Photos</h3>
                    <div className="photo-gallery">
                      {pets[activeTab].photos.map((photo, index) => (
                        <img
                          key={index}
                          src={photo || "/placeholder.svg"}
                          alt={`${pets[activeTab].name} photo ${index + 1}`}
                          className="pet-photo"
                        />
                      ))}
                      {pets[activeTab].photos.length === 0 && <div className="no-photos">No photos added</div>}
                    </div>
                  </div>

                  <div className="pet-details">
                    <h3>Pet Information</h3>
                    <div className="info-grid">
                      <div className="info-item">
                        <label>Name:</label>
                        <span>{pets[activeTab].name}</span>
                      </div>
                      <div className="info-item">
                        <label>Species:</label>
                        <span>{pets[activeTab].species}</span>
                      </div>
                      <div className="info-item">
                        <label>Breed:</label>
                        <span>{pets[activeTab].breed}</span>
                      </div>
                      <div className="info-item">
                        <label>Age:</label>
                        <span>{pets[activeTab].age} years</span>
                      </div>
                      <div className="info-item">
                        <label>Weight:</label>
                        <span>{pets[activeTab].weight}</span>
                      </div>
                      <div className="info-item">
                        <label>Color:</label>
                        <span>{pets[activeTab].color}</span>
                      </div>
                      <div className="info-item">
                        <label>Gender:</label>
                        <span>{pets[activeTab].gender}</span>
                      </div>
                      <div className="info-item">
                        <label>Microchip ID:</label>
                        <span>{pets[activeTab].microchipId}</span>
                      </div>
                    </div>

                    <div className="medical-history">
                      <h4>Medical History</h4>
                      <p>{pets[activeTab].medicalHistory}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Add Pet Modal */}
      {showAddForm && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Add New Pet</h2>
              <button className="close-btn" onClick={() => setShowAddForm(false)}>
                ×
              </button>
            </div>
            <form onSubmit={handleAddPet} className="pet-form">
              <div className="form-grid">
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    value={newPet.name}
                    onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Species *</label>
                  <select
                    value={newPet.species}
                    onChange={(e) => setNewPet({ ...newPet, species: e.target.value })}
                    required
                  >
                    <option value="">Select species</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Bird">Bird</option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Breed</label>
                  <input
                    type="text"
                    value={newPet.breed}
                    onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Age *</label>
                  <input
                    type="number"
                    value={newPet.age}
                    onChange={(e) => setNewPet({ ...newPet, age: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Weight</label>
                  <input
                    type="text"
                    value={newPet.weight}
                    onChange={(e) => setNewPet({ ...newPet, weight: e.target.value })}
                    placeholder="e.g., 25 lbs"
                  />
                </div>
                <div className="form-group">
                  <label>Color</label>
                  <input
                    type="text"
                    value={newPet.color}
                    onChange={(e) => setNewPet({ ...newPet, color: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <select value={newPet.gender} onChange={(e) => setNewPet({ ...newPet, gender: e.target.value })}>
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Microchip ID</label>
                  <input
                    type="text"
                    value={newPet.microchipId}
                    onChange={(e) => setNewPet({ ...newPet, microchipId: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Medical History</label>
                <textarea
                  value={newPet.medicalHistory}
                  onChange={(e) => setNewPet({ ...newPet, medicalHistory: e.target.value })}
                  rows="3"
                  placeholder="Vaccinations, allergies, medical conditions, etc."
                />
              </div>

              <div className="form-group full-width">
                <label>Photos</label>
                <input type="file" multiple accept="image/*" onChange={(e) => handlePhotoUpload(e)} />
                <div className="photo-preview">
                  {newPet.photos.map((photo, index) => (
                    <div key={index} className="photo-item">
                      <img src={photo || "/placeholder.svg"} alt={`Preview ${index + 1}`} />
                      <button type="button" onClick={() => removePhoto(index)} className="remove-photo">
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-actions">
                <button type="button" onClick={() => setShowAddForm(false)} disabled={loading}>
                  Cancel
                </button>
                <button type="submit" disabled={loading}>
                  {loading ? "Adding..." : "Add Pet"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Pet Modal */}
      {editingPet && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Edit {editingPet.name}</h2>
              <button className="close-btn" onClick={() => setEditingPet(null)}>
                ×
              </button>
            </div>
            <form onSubmit={handleUpdatePet} className="pet-form">
              <div className="form-grid">
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    value={editingPet.name}
                    onChange={(e) => setEditingPet({ ...editingPet, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Species *</label>
                  <select
                    value={editingPet.species}
                    onChange={(e) => setEditingPet({ ...editingPet, species: e.target.value })}
                    required
                  >
                    <option value="">Select species</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Bird">Bird</option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Breed</label>
                  <input
                    type="text"
                    value={editingPet.breed}
                    onChange={(e) => setEditingPet({ ...editingPet, breed: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Age *</label>
                  <input
                    type="number"
                    value={editingPet.age}
                    onChange={(e) => setEditingPet({ ...editingPet, age: Number.parseInt(e.target.value) })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Weight</label>
                  <input
                    type="text"
                    value={editingPet.weight}
                    onChange={(e) => setEditingPet({ ...editingPet, weight: e.target.value })}
                    placeholder="e.g., 25 lbs"
                  />
                </div>
                <div className="form-group">
                  <label>Color</label>
                  <input
                    type="text"
                    value={editingPet.color}
                    onChange={(e) => setEditingPet({ ...editingPet, color: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <select
                    value={editingPet.gender}
                    onChange={(e) => setEditingPet({ ...editingPet, gender: e.target.value })}
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Microchip ID</label>
                  <input
                    type="text"
                    value={editingPet.microchipId}
                    onChange={(e) => setEditingPet({ ...editingPet, microchipId: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Medical History</label>
                <textarea
                  value={editingPet.medicalHistory}
                  onChange={(e) => setEditingPet({ ...editingPet, medicalHistory: e.target.value })}
                  rows="3"
                  placeholder="Vaccinations, allergies, medical conditions, etc."
                />
              </div>

              <div className="form-group full-width">
                <label>Photos</label>
                <input type="file" multiple accept="image/*" onChange={(e) => handlePhotoUpload(e, true)} />
                <div className="photo-preview">
                  {editingPet.photos.map((photo, index) => (
                    <div key={index} className="photo-item">
                      <img src={photo || "/placeholder.svg"} alt={`Preview ${index + 1}`} />
                      <button type="button" onClick={() => removePhoto(index, true)} className="remove-photo">
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-actions">
                <button type="button" onClick={() => setEditingPet(null)} disabled={loading}>
                  Cancel
                </button>
                <button type="submit" disabled={loading}>
                  {loading ? "Updating..." : "Update Pet"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default MyPet

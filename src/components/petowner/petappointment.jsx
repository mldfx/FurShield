"use client"

import { useState, useEffect } from "react"
import api, { API_ENDPOINTS } from "./api/config"
import "./petappointment.css"

const PetAppointment = () => {
  const [selectedPet, setSelectedPet] = useState("")
  const [appointmentType, setAppointmentType] = useState("")
  const [selectedVet, setSelectedVet] = useState("")
  const [appointmentDate, setAppointmentDate] = useState("")
  const [appointmentTime, setAppointmentTime] = useState("")
  const [location, setLocation] = useState("")
  const [condition, setCondition] = useState("")
  const [pets, setPets] = useState([])
  const [veterinarians, setVeterinarians] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPets()
    fetchVeterinarians()
  }, [])

  const fetchPets = async () => {
    try {
      setLoading(true)
      const response = await api.get(API_ENDPOINTS.pets.getAll)
      setPets(response.data)
    } catch (error) {
      console.error("Error fetching pets:", error)
      setError("Failed to load pets")
      setPets([
        { id: 1, name: "Buddy", species: "Dog", breed: "Golden Retriever" },
        { id: 2, name: "Whiskers", species: "Cat", breed: "Persian" },
        { id: 3, name: "Max", species: "Dog", breed: "German Shepherd" },
      ])
    } finally {
      setLoading(false)
    }
  }

  const fetchVeterinarians = async () => {
    try {
      const response = await api.get(API_ENDPOINTS.veterinarians.getAll)
      setVeterinarians(response.data)
    } catch (error) {
      console.error("Error fetching veterinarians:", error)
      setVeterinarians([
        { id: 1, name: "Dr. Sarah Johnson", specialty: "General Practice", location: "Downtown Clinic", rating: 4.8 },
        { id: 2, name: "Dr. Michael Chen", specialty: "Emergency Care", location: "Pet Emergency Center", rating: 4.9 },
        { id: 3, name: "Dr. Emily Rodriguez", specialty: "Surgery", location: "Animal Hospital", rating: 4.7 },
        { id: 4, name: "Dr. David Wilson", specialty: "Dermatology", location: "Skin & Coat Clinic", rating: 4.6 },
      ])
    }
  }

  const getSuggestedVets = async () => {
    try {
      if (condition || location) {
        const response = await api.post(API_ENDPOINTS.veterinarians.getSuggestions, {
          condition,
          location,
          appointmentType,
        })
        return response.data
      }
    } catch (error) {
      console.error("Error getting vet suggestions:", error)
    }

    if (condition.toLowerCase().includes("emergency") || condition.toLowerCase().includes("urgent")) {
      return veterinarians.filter((vet) => vet.specialty === "Emergency Care")
    }
    if (condition.toLowerCase().includes("skin") || condition.toLowerCase().includes("itch")) {
      return veterinarians.filter((vet) => vet.specialty === "Dermatology")
    }
    if (condition.toLowerCase().includes("surgery") || condition.toLowerCase().includes("operation")) {
      return veterinarians.filter((vet) => vet.specialty === "Surgery")
    }
    return veterinarians
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const appointmentData = {
        petId: pets.find((pet) => pet.name === selectedPet)?.id,
        petName: selectedPet,
        appointmentType,
        veterinarianName: selectedVet,
        date: appointmentDate,
        time: appointmentTime,
        location,
        condition,
        status: "pending",
      }

      const response = await api.post(API_ENDPOINTS.appointments.create, appointmentData)

      if (response.status === 201 || response.status === 200) {
        alert("Appointment request submitted successfully!")
        setSelectedPet("")
        setAppointmentType("")
        setSelectedVet("")
        setAppointmentDate("")
        setAppointmentTime("")
        setLocation("")
        setCondition("")
      }
    } catch (error) {
      console.error("Error booking appointment:", error)
      setError("Failed to book appointment. Please try again.")
      alert("Error booking appointment. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const [suggestedVets, setSuggestedVets] = useState(veterinarians)

  useEffect(() => {
    const updateSuggestions = async () => {
      const suggestions = await getSuggestedVets()
      setSuggestedVets(suggestions)
    }

    if (condition || location) {
      updateSuggestions()
    } else {
      setSuggestedVets(veterinarians)
    }
  }, [condition, location, appointmentType, veterinarians])

  return (
    <div className="appointment-container">
      <div className="appointment-header">
        <h1>Book Pet Appointment</h1>
        <p>Schedule a visit with our trusted veterinarians</p>
        {error && <div className="error-message">{error}</div>}
      </div>

      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Pet Information</h3>
          <div className="form-group">
            <label htmlFor="pet-select">Select Pet</label>
            <select
              id="pet-select"
              value={selectedPet}
              onChange={(e) => setSelectedPet(e.target.value)}
              required
              disabled={loading}
            >
              <option value="">Choose your pet</option>
              {pets.map((pet) => (
                <option key={pet.id} value={pet.name}>
                  {pet.name} - {pet.breed}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="condition">Pet's Condition/Reason for Visit</label>
            <textarea
              id="condition"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              placeholder="Describe your pet's condition or reason for the visit..."
              rows="3"
              required
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Appointment Details</h3>
          <div className="form-group">
            <label htmlFor="appointment-type">Appointment Type</label>
            <select
              id="appointment-type"
              value={appointmentType}
              onChange={(e) => setAppointmentType(e.target.value)}
              required
            >
              <option value="">Select type</option>
              <option value="checkup">Regular Checkup</option>
              <option value="vaccination">Vaccination</option>
              <option value="emergency">Emergency</option>
              <option value="surgery">Surgery Consultation</option>
              <option value="grooming">Grooming</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="appointment-date">Preferred Date</label>
              <input
                type="date"
                id="appointment-date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="appointment-time">Preferred Time</label>
              <input
                type="time"
                id="appointment-time"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="location">Your Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your city or zip code"
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Suggested Veterinarians</h3>
          <div className="vet-suggestions">
            {suggestedVets.map((vet) => (
              <div
                key={vet.id}
                className={`vet-card ${selectedVet === vet.name ? "selected" : ""}`}
                onClick={() => setSelectedVet(vet.name)}
              >
                <div className="vet-info">
                  <h4>{vet.name}</h4>
                  <p className="specialty">{vet.specialty}</p>
                  <p className="location">{vet.location}</p>
                  <div className="rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating-number">{vet.rating}</span>
                  </div>
                </div>
                <input
                  type="radio"
                  name="veterinarian"
                  value={vet.name}
                  checked={selectedVet === vet.name}
                  onChange={() => setSelectedVet(vet.name)}
                />
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </form>
    </div>
  )
}

export default PetAppointment

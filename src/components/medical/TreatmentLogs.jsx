import "./TreatmentLogs.css"
import { useState } from "react"
import { PawPrint, Fish, Bird, Squirrel, Calendar, Stethoscope, FileText, Pill } from "lucide-react"


const initialFormData = {
  petName: "",
  species: "",
  treatmentDate: "",
  symptoms: "",
  diagnosis: "",
  medications: "",
  followUp: "",
}

const TreatmentLogs = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [showToast, setShowToast] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }


  const validateForm = () => {
    const newErrors = {}
    if (!formData.petName.trim()) newErrors.petName = "Pet name is required."
    if (!formData.species.trim()) newErrors.species = "Species is required."
    if (!formData.treatmentDate.trim()) newErrors.treatmentDate = "Date is required."
    if (!formData.symptoms.trim()) newErrors.symptoms = "Symptoms are required."
    if (!formData.diagnosis.trim()) newErrors.diagnosis = "Diagnosis is required."
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleAddNote = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)

      setTimeout(() => {
        setFormData(initialFormData)
        setErrors({})
      }, 1000)
    }
  }

  const resetForm = () => {
    setFormData(initialFormData)
    setErrors({})
  }

  return (
    <div className="vet-form-container">
      <div className="background-icons">
        <Fish className="bg-icon icon-top-left" size={120} />
        <Bird className="bg-icon icon-top-right" size={120} />
        <PawPrint className="bg-icon icon-bottom-left" size={120} />
        <Squirrel className="bg-icon icon-bottom-right" size={120} />
      </div>

      <div className="treatment-logs-wrapper">
        <div className="treatment-log-header">
          <div className="header-content">
            <Stethoscope className="header-icon" size={32} />
            <h1>Treatment Logs</h1>
          </div>
          <div className="header-divider"></div>
        </div>

        <form className="treatment-log-form" onSubmit={handleAddNote}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="petName">
                <PawPrint size={16} />
                Pet Name *
              </label>
              <input
                type="text"
                id="petName"
                name="petName"
                value={formData.petName}
                onChange={handleInputChange}
                placeholder="Enter pet's name"
                className={errors.petName ? "error" : ""}
              />
              {errors.petName && <span className="error-message">{errors.petName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="species">
                <Fish size={16} />
                Species *
              </label>
              <select
                id="species"
                name="species"
                value={formData.species}
                onChange={handleInputChange}
                className={errors.species ? "error" : ""}
              >
                <option value="">Select species</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Fish</option>
                <option value="other">Other</option>
              </select>
              {errors.species && <span className="error-message">{errors.species}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="treatmentDate">
                <Calendar size={16} />
                Date of Treatment *
              </label>
              <input
                type="date"
                id="treatmentDate"
                name="treatmentDate"
                value={formData.treatmentDate}
                onChange={handleInputChange}
                className={errors.treatmentDate ? "error" : ""}
              />
              {errors.treatmentDate && <span className="error-message">{errors.treatmentDate}</span>}
            </div>

            <div className="form-group full-width">
              <label htmlFor="symptoms">
                <FileText size={16} />
                Symptoms *
              </label>
              <textarea
                id="symptoms"
                name="symptoms"
                value={formData.symptoms}
                onChange={handleInputChange}
                placeholder="Describe the symptoms observed..."
                rows="3"
                className={errors.symptoms ? "error" : ""}
              ></textarea>
              {errors.symptoms && <span className="error-message">{errors.symptoms}</span>}
            </div>

            <div className="form-group full-width">
              <label htmlFor="diagnosis">
                <Stethoscope size={16} />
                Diagnosis Notes *
              </label>
              <textarea
                id="diagnosis"
                name="diagnosis"
                value={formData.diagnosis}
                onChange={handleInputChange}
                placeholder="Enter diagnosis and examination findings..."
                rows="4"
                className={errors.diagnosis ? "error" : ""}
              ></textarea>
              {errors.diagnosis && <span className="error-message">{errors.diagnosis}</span>}
            </div>

            <div className="form-group full-width">
              <label htmlFor="medications">
                <Pill size={16} />
                Prescribed Medications
              </label>
              <textarea
                id="medications"
                name="medications"
                value={formData.medications}
                onChange={handleInputChange}
                placeholder="List medications, dosages, and instructions..."
                rows="3"
              ></textarea>
            </div>

            <div className="form-group full-width">
              <label htmlFor="followUp">
                <Calendar size={16} />
                Follow-up Actions
              </label>
              <textarea
                id="followUp"
                name="followUp"
                value={formData.followUp}
                onChange={handleInputChange}
                placeholder="Enter follow-up care instructions and next appointment details..."
                rows="3"
              ></textarea>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="reset-btn" onClick={resetForm}>
              Clear Form
            </button>
            <button type="submit" className="submit-btn">
              Add Treatment Log
            </button>
          </div>
        </form>

        {showToast && (
          <div className="toast-notification">
            <div className="toast-content">
              <span className="toast-icon">✅</span>
              <span className="toast-message">Treatment log has been successfully recorded!</span>
            </div>
          </div>
        )}

        <div className="navigation-footer">
          <a href="/dashboard/veterinarian" className="back-link">
            ← Back to Dashboard
          </a>
        </div>
      </div>
    </div>
  )
}

export default TreatmentLogs
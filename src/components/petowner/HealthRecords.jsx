import {Link} from "react-router-dom"
import React, { useState, useEffect } from "react"
import { PawPrint, Heart, Calendar, Stethoscope, Shield } from 'lucide-react';
import "./HealthRecords.css"

const API_BASE = import.meta.env.VITE_API_BASE || "";

const HealthRecords = () => {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({
    type: "Vaccination",
    date: "",
    vetName: "",
    description: ""
  });
  const [error, setError] = useState("");

  // Fetch records from backend (placeholder endpoint)
  useEffect(() => {
    fetch(`${API_BASE}/api/health-records`)
      .then(res => res.json())
      .then(data => setRecords(data))
      .catch(() => setRecords([])); // fallback if not available
  }, []);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
    if (error) setError("") // Clear error when user starts typing
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.date || !form.description) {
      setError("Please fill in date and description fields");
      return;
    }
    // Send new record to backend (placeholder endpoint)
    fetch(`${API_BASE}/api/health-records`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(newRecord => setRecords([...records, newRecord]))
      .catch(() => setRecords([...records, { ...form, id: Date.now() }])); // fallback if not available
    setForm({ type: "Vaccination", date: "", vetName: "", description: "" });
    setError("");
  };

  const getRecordIcon = (type) => {
    switch(type.toLowerCase()) {
      case 'vaccination': return <Shield size={16} />;
      case 'illness': return <Stethoscope size={16} />;
      case 'treatment': return <Heart size={16} />;
      case 'allergy': return <PawPrint size={16} />;
      case 'milestone': return <Calendar size={16} />;
      default: return <PawPrint size={16} />;
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  }

  return (
    <div className="healthRecords-container">
      {/* Welcome Message */}
      <div className="healthRecords-intro">
        <PawPrint size={24} />
        <h3>Keep Your Pet Healthy & Happy!</h3>
        <p>Track vaccinations, treatments, and important health milestones all in one place. Your furry friend's wellness journey starts here.</p>
      </div>

      <div className="healthRecords-card">
        <h2><PawPrint />Pet Health Records</h2>
        
        {/* Health Record Form */}
        <form onSubmit={handleSubmit} className="healthRecords-form">
          <div className="healthRecords-form-row">
            <div className="healthRecords-form-group">
              <label htmlFor="type">Record Type *</label>
              <select id="type" name="type" value={form.type} onChange={handleChange} required>
                <option>Vaccination</option>
                <option>Allergy</option>
                <option>Illness</option>
                <option>Treatment</option>
                <option>Milestone</option>
              </select>
            </div>
            <div className="healthRecords-form-group">
              <label htmlFor="date">Date *</label>
              <input 
                id="date"
                type="date" 
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                max={new Date().toISOString().split('T')[0]} // Prevent future dates
              />
            </div>
          </div>

          <div className="healthRecords-form-group">
            <label htmlFor="vetName">Veterinarian (Optional)</label>
            <input 
              id="vetName"
              type="text" 
              name="vetName"
              value={form.vetName}
              onChange={handleChange}
              placeholder="Dr. Smith, Pet Care Clinic"
            />
          </div>

          <div className="healthRecords-form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter details about the record (e.g., 'Annual rabies vaccination - no side effects observed')"
              rows="3"
              required
            ></textarea>
          </div>

          {error && <div className="healthRecords-error">{error}</div>}
          
          <button type="submit" className="healthRecords-add-btn">
            <PawPrint size={18} />
            Add Health Record
          </button>
        </form>

        {/* Records List */}
        <div className="healthRecords-section-header">
          <h3>Health History ({records.length})</h3>
        </div>

        <div className="healthRecords-records-grid">
          {records.length === 0 ? (
            <div className="healthRecords-empty-state">
              <PawPrint size={48} />
              <h4>No health records yet</h4>
              <p>Start by adding your pet's first health record above. Every vaccination, checkup, and treatment helps keep track of their wellness journey!</p>
            </div>
          ): (
            records
              .sort((a, b) => new Date(b.date) - new Date(a.date)) // Most recent first
              .map((rec) => (
                <div key={rec.id} className="healthRecords-record-card">
                  <span className={`tag ${rec.type.toLowerCase()}`}> 
                    {getRecordIcon(rec.type)}
                    {rec.type}
                  </span>
                  <div className="healthRecords-record-content">
                    <p className="healthRecords-record-date">
                      <Calendar size={14} />
                      {formatDate(rec.date)}
                    </p>
                    {rec.vetName && (
                      <p className="healthRecords-record-vet">
                        <Stethoscope size={14} />
                        {rec.vetName}
                      </p>
                    )}
                    <p className="healthRecords-record-description">{rec.description}</p>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>

      {/* Bottom Tip */}
      {records.length > 0 && (
        <div className="healthRecords-tip">
          <Heart size={16} />
          <span>Great job keeping track of your pet's health! Regular record-keeping helps vets provide better care.</span>
        </div>
      )}
    </div>
  )
}

export default HealthRecords
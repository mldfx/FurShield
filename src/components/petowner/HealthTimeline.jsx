import React, { useState, useEffect } from "react"
import { PawPrint, Syringe, PartyPopper, Stethoscope, AlertCircle, Thermometer} from 'lucide-react';
import "./HealthTimeline.css"

const HealthTimeline = () => {
  const API_BASE = import.meta.env.VITE_API_BASE || "";
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({
    type: "Vaccination",
    date: "",
    description: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  // Fetch timeline events from backend (placeholder endpoint)
  useEffect(() => {
    fetch(`${API_BASE}/api/health-timeline`)
      .then(res => res.json())
      .then(data => setRecords(data))
      .catch(() => setRecords([])); // fallback if not available
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.date || !form.description) {
      setError("Please fill in both date and description.");
      return;
    }
    // Send new event to backend (placeholder endpoint)
    fetch(`${API_BASE}/api/health-timeline`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(newEvent => setRecords([...records, newEvent]))
      .catch(() => setRecords([...records, { ...form, id: Date.now() }])); // fallback if not available
    setForm({ type: "Vaccination", date: "", description: "" });
    setError("");
  };



  const getIcon = (type) => {
    switch (type) {
      case "Vaccination": return <Syringe size={16} />;
      case "Allergy": return <AlertCircle size={16} />;
      case "Illness" : return <Thermometer size={16} />;
      case "Treatment": return <Stethoscope size={16} />;
      case "Milestone": return <PartyPopper size={16} />;
      default: return <PawPrint size={16} />;
    }
  };

  return (
    <div className="healthTimeline-card">
      <h2><PawPrint/> Pet Health Timeline</h2>
      <p className="healthTimeline-intro">
        Visualize your pet's health journey. See Vaccinations, Treatments, Illnesses, Allergies, and Milestones in a clear timeline format.
      </p>

      {/* Add Timeline Event Form */}
      <form onSubmit={handleSubmit} className="timeline-form">
        <div className="timeline-form-group">
          <label>Type</label>
          <select name="type" value={form.type} onChange={handleChange}>
            <option>Vaccination</option>
            <option>Allergy</option>
            <option>Illness</option>
            <option>Treatment</option>
            <option>Milestone</option>
          </select>
        </div>
        <div className="timeline-form-group">
          <label>Date</label>
          <input type="date" name="date" value={form.date} onChange={handleChange} />
        </div>
        <div className="timeline-form-group">
          <label>Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Enter details..." />
        </div>
        {error && <p className="timeline-error">{error}</p>}
        <button type="submit" className="timeline-add-btn">+ Add Event</button>
      </form>

      <div className="timeline">
        {records.length === 0 ? (
          <p className="timeline-empty-msg">No events yet. Your pet's health updates will appear here.</p>
        ) : (
          records.map((rec, index) => (
            <div key={rec.id} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
              <div className="timeline-icon">{getIcon(rec.type)}</div>
              <div className="timeline-content">
                <span className={`tag ${rec.type.toLowerCase()}`}>{rec.type}</span>
                <p className="timeline-date">{rec.date}</p>
                <p className="timeline-description">{rec.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default HealthTimeline
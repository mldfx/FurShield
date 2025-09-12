import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, Clock, PawPrint, XCircle, Edit } from "lucide-react";
import "./petappointment.css";

const API_BASE = import.meta.env.VITE_API_BASE || "";

const PetAppointments = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({
    petName: "",
    date: "",
    time: "",
    vet: "",
    reason: ""
  });
  const [error, setError] = useState("");

  // ✅ Fetch appointments from backend on load
  useEffect(() => {
  fetch(`${API_BASE}/api/appointments`)
      .then(res => res.json())
      .then(data => setAppointments(data))
      .catch(() => setAppointments([])); // fallback if backend not ready
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.petName || !form.date || !form.time || !form.vet || !form.reason) {
      setError("⚠ Please fill in all fields.");
      return;
    }
    setError("");

    const newAppointment = {
      id: Date.now(),
      ...form,
      status: "Upcoming"
    };

    //  Try sending to backend
  fetch(`${API_BASE}/api/appointments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAppointment),
    })
      .then(res => res.json())
      .then(savedAppointment => {
        setAppointments([...appointments, savedAppointment]);
      })
      .catch(() => {
        // fallback if backend not working yet
        setAppointments([...appointments, newAppointment]);
      });

    setForm({ petName: "", date: "", time: "", vet: "", reason: "" });
  };

  return (
    <div className="page-container">
      {/* Back to Dashboard (top only) */}
      <button
        className="back-dashboard-btn"
        onClick={() => navigate("/dashboard/pet-owner")}
      >
        ⟵ Back to Dashboard
      </button>

      <div className="appointments-card">
        <h2><PawPrint /> Pet Appointments</h2>
        <p className="appointments-intro">
          Manage your pet’s veterinary visits with ease 🐾.  
          Book new appointments, track upcoming visits, and view your pet’s history.
        </p>

        {/* Booking Form */}
        <form className="appointments-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="petName"
            value={form.petName}
            onChange={handleChange}
            placeholder="Pet's Name"
          />
          <input type="date" name="date" value={form.date} onChange={handleChange} />
          <input type="time" name="time" value={form.time} onChange={handleChange} />
          <input type="text" name="vet" value={form.vet} onChange={handleChange} placeholder="Vet’s name" />
          <input type="text" name="reason" value={form.reason} onChange={handleChange} placeholder="Reason for appointment" />

          {error && <p className="appointments-error">{error}</p>}
          <button type="submit">+ Book Appointment</button>
        </form>

        {/* Upcoming Appointments */}
        <h3><CalendarDays /> Upcoming Appointments</h3>
        <div className="appointments-list">
          {appointments.filter(a => a.status === "Upcoming").length === 0 ? (
            <p className="empty-msg">
              🐾 No upcoming appointments yet.  
              Book one now to keep your pet’s health on track!
            </p>
          ) : (
            appointments.filter(a => a.status === "Upcoming").map(app => (
              <div key={app.id} className="appointment-item">
                <div className="appointment-info">
                  <p><strong>Pet:</strong> {app.petName}</p>
                  <p><strong>Date:</strong> {app.date}</p>
                  <p><strong>Time:</strong> {app.time}</p>
                  <p><strong>Vet:</strong> {app.vet}</p>
                  <p><strong>Reason:</strong> {app.reason}</p>
                </div>
                <div className="appointment-actions">
                  <button className="reschedule-btn"><Edit size={16}/> Reschedule</button>
                  <button className="cancel-btn"><XCircle size={16}/> Cancel</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Past Appointments */}
        <h3><Clock /> Past Appointments</h3>
        <div className="appointments-list">
          {appointments.filter(a => a.status === "Completed").length === 0 ? (
            <p className="empty-msg">
              📋 No past appointments yet.  
              Completed visits will appear here.
            </p>
          ) : (
            appointments.filter(a => a.status === "Completed").map(app => (
              <div key={app.id} className="appointment-item past">
                <div className="appointment-info">
                  <p><strong>Pet:</strong> {app.petName}</p>
                  <p><strong>Date:</strong> {app.date}</p>
                  <p><strong>Time:</strong> {app.time}</p>
                  <p><strong>Vet:</strong> {app.vet}</p>
                  <p><strong>Reason:</strong> {app.reason}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Quick Tips Section */}
        <div className="quick-tips">
          <h4>💡 Tips for Pet Owners</h4>
          <ul>
            <li>Schedule routine checkups every 6 months for healthy pets.</li>
            <li>Keep vaccinations up-to-date for safe travel.</li>
            <li>Bring insurance documents to each vet visit.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PetAppointments;
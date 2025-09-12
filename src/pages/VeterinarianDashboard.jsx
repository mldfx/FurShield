import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import "./VeterinarianDashboard.css";
import {
  PawPrint,
  Stethoscope,
  ChevronDown,
  User,
  PhoneCall,
  Mail,
  Home,
  Award,
  Plus,
  Calendar,
  Clock,
  Trash,
  LucideCross,
  Book,
} from "lucide-react";
import axios from "axios";

const VeterinarianDashboard = () => {
  const [isEditing, setIsEditing] = useState(null);
  const [drDetails, setDrDetails] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedYear, setSelectedYear] = useState("");
  const [availabilitySlots, setAvailabilitySlots] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [newSlot, setNewSlot] = useState({ label: "", start: "", end: "" });
  const [expanded, setExpanded] = useState(false);

  // Change to accept data
  const [appointments, setAppointments] = useState([
    {
      appointmentId: "appt_003",
      petId: "pet_103",
      petName: "Luna",
      breed: "Persian Cat",
      species: "Cat",
      ownerName: "Ada Nwosu",
      ownerContact: "+234 803 456 7890",
      date: "2025-09-15",
      time: "11:00",
      status: "Rescheduled",
      notes: "Vaccination and grooming",
      vetId: "vet_001",
    },
  ]);
  const [filter, setFilter] = useState("All");
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [rescheduleData, setRescheduleData] = useState({
    id: null,
    date: "",
    time: "",
    note: "",
  });

  // Fetch vet data
  useEffect(() => {
    axios
      .get("API_URL_HERE") // Backend dev plugs in actual URL
      .then((res) => {
        setDrDetails(res.data || {});
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("There was an error when getting the data");
        setLoading(false);
      });
  }, []);

  // Keep selected year synced
  useEffect(() => {
    if (drDetails.experience !== undefined) {
      setSelectedYear(drDetails.experience);
    }
  }, [drDetails.experience]);

  const specializationArr = [
    "General Practice",
    "Surgery",
    "Dermatology",
    "Emergency Care",
    "Internal Medicine",
    "Dentistry",
  ];

  // Appointment filtering
  const filteredAppointments = appointments.filter((appt) =>
    filter === "All" ? true : appt.status === filter
  );

  // Appointment handlers
  const handleApprove = (id) => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === id ? { ...appt, status: "Approved" } : appt
      )
    );
  };

  const handleCancel = (id) => {
    setAppointments((prev) => prev.filter((appt) => appt.id !== id));
  };

  // Field editing
  const toggleEdit = (field) => {
    setIsEditing((prev) => {
      const newField = prev === field ? null : field;
      if (newField) setInputValue(drDetails[field] || "");
      return newField;
    });
  };

  const handleSave = (field, value = inputValue) => {
    if (!value.trim()) return;
    setDrDetails((prev) => ({ ...prev, [field]: value }));
    setIsEditing(null);
  };

  return (
    <div className="veterinarian-dashboard">
      <DashboardNavbar userRole="Veterinarian" />

      <main className="vet-dashboard">
        {/* Links to other pages */}
        <nav className="extra-patient-link-vet">
          {/* Treatment Logs */}
          <Link to="/treatment-log">
            <LucideCross />
            Treatment Logs
          </Link>
          <Link to="/structured-view">
            <Book />
            Structured Views
          </Link>
        </nav>
        {/* Welcome Section */}
        <div className="vet-dashboard-container">
          <div className="welcome-card-vet">
            <div className="vet-welcome-image">
              <img
                src="https://countymicro.com/wp-content/uploads/2020/11/Veterinary-Services-01-1024x559.png"
                alt="Vet Welcome"
              />
            </div>
            <div className="welcome-content-vet">
              <h2>
                Hi, Dr{" "}
                <span className="user-name">{drDetails.fullName}</span>
              </h2>
              <p>Your dashboard provides an overview of all your tasks.</p>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <section className="vet-profile-info-sect">
          <h1 className="vet-dashsect-h1">Profile Info:</h1>
          <div className="vet-info-card">
            {/* Name */}
            <div className="vet-info">
              <div
                className="vet-info-content"
                onClick={() => toggleEdit("fullName")}
              >
                <div className="vet-info-icon">
                  <User />
                </div>
                <p>{drDetails.fullName}</p>
                <span
                  className={`chevron-icon ${
                    isEditing === "fullName" ? "rotate" : ""
                  }`}
                >
                  <ChevronDown color="var(--popover-foreground)" />
                </span>
              </div>
              {isEditing === "fullName" && (
                <div className="field-edit">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    autoFocus
                  />
                  <button onClick={() => handleSave("fullName")}>Save</button>
                  <button onClick={() => setIsEditing(null)}>Cancel</button>
                </div>
              )}
            </div>

            {/* Number */}
            <div className="vet-info">
              <div
                className="vet-info-content"
                onClick={() => toggleEdit("phoneNum")}
              >
                <div className="vet-info-icon">
                  <PhoneCall />
                </div>
                <p>{drDetails.phoneNum}</p>
                <span
                  className={`chevron-icon ${
                    isEditing === "phoneNum" ? "rotate" : ""
                  }`}
                >
                  <ChevronDown color="var(--popover-foreground)" />
                </span>
              </div>
              {isEditing === "phoneNum" && (
                <div className="field-edit">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    autoFocus
                  />
                  <button onClick={() => handleSave("phoneNum")}>Save</button>
                  <button onClick={() => setIsEditing(null)}>Cancel</button>
                </div>
              )}
            </div>

            {/* Specialization */}
            <div className="vet-info">
              <div
                className="vet-info-content"
                onClick={() => toggleEdit("specialization")}
              >
                <div className="vet-info-icon">
                  <Stethoscope color="var(--primary)" />
                </div>
                <p>{drDetails.specialization || "Add Specialization"}</p>
                <span
                  className={`chevron-icon ${
                    isEditing === "specialization" ? "rotate" : ""
                  }`}
                >
                  <ChevronDown color="var(--popover-foreground)" />
                </span>
              </div>
              {isEditing === "specialization" && (
                <div className="specialization-dropdown">
                  {specializationArr.map((option) => (
                    <div
                      key={option}
                      className={`dropdown-option ${
                        drDetails.specialization === option ? "selected" : ""
                      }`}
                      onClick={() => handleSave("specialization", option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Email */}
            <div className="vet-info">
              <div
                className="vet-info-content"
                onClick={() => toggleEdit("email")}
              >
                <div className="vet-info-icon">
                  <Mail />
                </div>
                <p>{drDetails.email}</p>
                <span
                  className={`chevron-icon ${
                    isEditing === "email" ? "rotate" : ""
                  }`}
                >
                  <ChevronDown color="var(--popover-foreground)" />
                </span>
              </div>
              {isEditing === "email" && (
                <div className="field-edit">
                  <input
                    type="email"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    autoFocus
                  />
                  <button onClick={() => handleSave("email")}>Save</button>
                  <button onClick={() => setIsEditing(null)}>Cancel</button>
                </div>
              )}
            </div>

            {/* Address */}
            <div className="vet-info">
              <div
                className="vet-info-content"
                onClick={() => toggleEdit("address")}
              >
                <div className="vet-info-icon">
                  <Home />
                </div>
                <p>{drDetails.address}</p>
                <span
                  className={`chevron-icon ${
                    isEditing === "address" ? "rotate" : ""
                  }`}
                >
                  <ChevronDown color="var(--popover-foreground)" />
                </span>
              </div>
              {isEditing === "address" && (
                <div className="field-edit">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    autoFocus
                  />
                  <button onClick={() => handleSave("address")}>Save</button>
                  <button onClick={() => setIsEditing(null)}>Cancel</button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Occupation / Availability */}
        <section className="vet-dash-sect">
          <div className="vet-occupation">
            {/* Experience */}
            <div className="experience-card" onClick={() => setShowModal(true)}>
              <div className="vet-exp-icon">
                <Award />
              </div>
              <div className="vet-experience-card">
                <img
                  src="https://img.freepik.com/free-vector/veterinarians-examining-dog-vet-clinic_1262-21437.jpg"
                  alt="Experience"
                />
              </div>
              <div className="vet-experience-content">
                <h3>Years in Field</h3>
                <p>
                  {drDetails.experience}{" "}
                  {Number(drDetails.experience) === 1 ? "year" : "years"}
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="vet-no-availaility">
              {availabilitySlots.length === 0 && (
                <div className="vet-no-avial-tag">
                  <img
                    src="https://t3.ftcdn.net/jpg/02/76/09/02/360_F_276090236_a2ng3Zxuf7079pAy9F8i6ld2bqCpGwKg.jpg"
                    alt="No availability"
                  />
                </div>
              )}
              <div className="no-vet-avail">
                {availabilitySlots.length === 0 && (
                  <p>No availability added yet</p>
                )}
                <div
                  className={`avail-slot-list ${expanded ? "expanded" : ""}`}
                >
                  {availabilitySlots.map((slot, index) => (
                    <div key={index} className="avail-slot-card">
                      <div>
                        <strong>
                          {slot.start} – {slot.end}
                        </strong>
                        {slot.label && <p>{slot.label}</p>}
                      </div>
                      <button
                        onClick={() =>
                          setAvailabilitySlots((prev) =>
                            prev.filter((_, i) => i !== index)
                          )
                        }
                      >
                        <Trash />
                      </button>
                    </div>
                  ))}
                </div>
                {availabilitySlots.length > 3 && !expanded && (
                  <button
                    className="view-more-btn"
                    onClick={() => setExpanded(true)}
                  >
                    View More
                  </button>
                )}
              </div>
              <button
                className="add-to-available-list"
                onClick={() => setShowModal(true)}
              >
                <Plus />
              </button>
            </div>

            {/* Availability Modal */}
            {showModal && (
              <div
                className="modal-overlay-vet"
                onClick={() => setShowModal(false)}
              >
                <div
                  className="modal-card-vet"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h4>Add Availability</h4>
                  <input
                    type="text"
                    placeholder="Optional label"
                    value={newSlot.label}
                    onChange={(e) =>
                      setNewSlot({ ...newSlot, label: e.target.value })
                    }
                  />
                  <div className="time-slider">
                    <input
                      type="time"
                      value={newSlot.start}
                      onChange={(e) =>
                        setNewSlot({ ...newSlot, start: e.target.value })
                      }
                    />
                    <span>to</span>
                    <input
                      type="time"
                      value={newSlot.end}
                      onChange={(e) =>
                        setNewSlot({ ...newSlot, end: e.target.value })
                      }
                    />
                  </div>
                  <button
                    onClick={() => {
                      if (newSlot.start && newSlot.end) {
                        setAvailabilitySlots((prev) => [...prev, newSlot]);
                        setNewSlot({ label: "", start: "", end: "" });
                        setShowModal(false);
                      }
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Appointments */}
        <section className="vet-appointments-sect">
          <div className="appointment-section-vet">
            <h3>Upcoming Appointments</h3>
            <div
              className="appointment-filters"
              role="tablist"
              aria-label="Appointment Filters"
            >
              {["All", "Pending", "Approved", "Rescheduled"].map((status) => (
                <button
                  key={status}
                  role="tab"
                  aria-selected={filter === status}
                  className={`filter-btn ${filter === status ? "active" : ""}`}
                  onClick={() => setFilter(status)}
                >
                  {status}
                </button>
              ))}
            </div>

            <div className="appointment-scroll">
              {filteredAppointments.map((appt) => (
                <a
                  href="/vethistory"
                  key={appt.id}
                  className="appointment-card-vetd-link"
                >
                  <div
                    className={`appointment-card-vetd ${appt.status.toLowerCase()}`}
                  >
                    <div className="appointment-info">
                      <h4>
                        {appt.petName} • {appt.breed}
                      </h4>
                      <p>
                        <strong>Owner:</strong> {appt.owner}
                      </p>
                      <p>
                        <Calendar size={16} /> {appt.date} •{" "}
                        <Clock size={16} /> {appt.time}
                      </p>
                    </div>

                    <div className="appointment-actions-vetd">
                      <span className="status-tag">{appt.status}</span>
                      <button onClick={() => handleApprove(appt.id)}>
                        Approve
                      </button>
                      <button
                        onClick={() => {
                          setRescheduleData({
                            id: appt.id,
                            date: appt.date,
                            time: appt.time,
                            note: "",
                          });
                          setShowRescheduleModal(true);
                        }}
                      >
                        Reschedule
                      </button>
                      <button onClick={() => setShowCancelConfirm(true)}>
                        Cancel
                      </button>
                    </div>

                    {showCancelConfirm && (
                      <div className="modal-overlay-vet">
                        <div className="modal-card-vet">
                          <h4>Cancel Appointment?</h4>
                          <p>
                            Are you sure you want to cancel{" "}
                            {appt.petName}’s appointment on {appt.date}?
                          </p>
                          <div className="modal-actions">
                            <button onClick={() => handleCancel(appt.id)}>
                              Yes, Cancel
                            </button>
                            <button onClick={() => setShowCancelConfirm(false)}>
                              No
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VeterinarianDashboard;

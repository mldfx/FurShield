import { PawPrint, Stethoscope, Timer, ChevronDown, ChevronRight, ChevronUp, PhoneCall, Mail, Home, Pen, Bell } from "lucide-react";
import "./VetProfile.css";
import { useState } from "react";

const doctor = {
  drName: "Sabina",
  phoneNum: 900234556,
  email: "sabby@gmail.com",
  address: "No4 Maxwell Street, Scranton, Pennsylvania",
  specialization: "Dentistry",
  experience: 3,
};

const VetProfile = () => {
  const [isEditing, setIsEditing] = useState(null); // null or field name
  const [drDetails, setDrDetails] = useState(doctor);
  const [inputValue, setInputValue] = useState("");

  const toggleEdit = (field) => {
    setIsEditing((prev) => {
      const newField = prev === field ? null : field;
      if (newField) setInputValue(drDetails[field] || "");
      return newField;
    });
  };

  const handleSave = (field) => {
    if (!inputValue.trim()) return;
    setDrDetails((prev) => ({ ...prev, [field]: inputValue }));
    setIsEditing(null);
  };



  const specializationArr = [
    "General Practice",
    "Surgery",
    "Dermatology",
    "Emergency Care",
    "Internal Medicine",
    "Dentistry",
  ];

  return (
    <main className="vet-profile-main">
      <div className="vet-profile">
        <div className="profile-title">
          <h3>My Profile</h3>
          <div className="bell-icon">
            <Bell />
          </div>
        </div>

        <div className="vet-profile-picture">
          <div className="vet-picture">
            <img
              src="https://t4.ftcdn.net/jpg/02/82/72/13/360_F_282721311_yyx96CWXbXsy2XVOFAjZ6jFm8vZrZKjO.jpg"
              alt=""
            />
          </div>

          <div className="editprofile">
            <h3>Dr Sabina</h3>
            <Pen size={16} />
          </div>
        </div>

        <div className="vet-info-card">
          {/* Phone Number */}
          <div className="vet-info">
            <div className="vet-info-content" onClick={() => toggleEdit("phoneNum")}>
              <div className="vet-info-icon">📞</div>
              <p>{drDetails.phoneNum}</p>
              <ChevronRight />
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

          {/* Email */}
          <div className="vet-info">
            <div className="vet-info-content" onClick={() => toggleEdit("email")}>
              <div className="vet-info-icon">📧</div>
              <p>{drDetails.email}</p>
              <ChevronRight />
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
            <div className="vet-info-content" onClick={() => toggleEdit("address")}>
              <div className="vet-info-icon">📍</div>
              <p>{drDetails.address}</p>
              <ChevronRight />
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

        {/* Specialization */}
        <div className="vet-info">
          <div className="vet-info-content" onClick={() => toggleEdit("specialization")}>
            <div className="vet-info-icon">
              <Stethoscope size={18} color="var(--primary)" />
            </div>
            <p>{drDetails.specialization || "Add Specialization"}</p>
            <span
              className={`chevron-icon ${isEditing === "specialization" ? "rotate" : ""}`}
            >
              <ChevronDown size={18} color="var(--popover-foreground)" />
            </span>
          </div>
          {isEditing === "specialization" && (
            <div className="specialization-dropdown">
              {specializationArr.map((option) => (
                <div
                  key={option}
                  className={`dropdown-option ${drDetails.specialization === option ? "selected" : ""}`}
                  onClick={() => handleSave("specialization", option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="years-of-experience">
          <div className="time-icon">
            <Timer size={18} color="var(--primary)" />
          </div>
          <p>
            {drDetails.experience ? `${drDetails.experience} years` : "Add Experience"}
          </p>
        </div>
      </div>
    </main>
  );
};

export default VetProfile;
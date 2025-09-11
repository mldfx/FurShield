import {
  Syringe,
  Star,
  DropletIcon,
  HeartHandshake,
  AlertCircle,
  ArrowLeft,
  Plus,
} from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./PetMedicalHistory.css";

const PetMedicalHistory = () => {
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [ownerDetails, setOwnerDetails] = useState({});
  const [knownAllergies, setKnownAllergies] = useState([]);
  const [petDetails, setPetDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Replace this with your real endpoint
    axios
      .get("/api/pet-history")
      .then((res) => {
        const data = res.data || {};
        setMedicalHistory(data.medicalHistory || []);
        setOwnerDetails(data.ownerDetails || {});
        setKnownAllergies(data.knownAllergies || []);
        setPetDetails(data.petDetails || {});
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load pet medical history.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading">Loading medical history...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="pet-medical-history">
      <main className="pet-history-box">
        <header className="pet-history-box-header">
          <div className="pet-history-nav">
            <button className="add-rec-to-history">
              <Plus size={17} /> Add health record
            </button>
            <a href="/dashboard/veterinarian">
              <button>
                <ArrowLeft size={17} /> Back to Your Profile
              </button>
            </a>
          </div>

          <div className="pet-history-pet">
            <div className="pet-history-img">
              <img
                src={petDetails.photoUrl || "/placeholder-dog.jpg"}
                alt={petDetails.name || "Pet"}
              />
            </div>
            <div className="pet-history-desc">
              <h1>{petDetails.name || "Unknown Pet"}</h1>
              <p>
                {petDetails.species || "Unknown Species"},{" "}
                {petDetails.breed || "Unknown Breed"}
              </p>
            </div>
          </div>
        </header>

        <section className="pet-history-contents">
          {/* Medical Timeline */}
          <div className="pet-history-timeline">
            <h3>Medical History</h3>
            {medicalHistory.length === 0 ? (
              <p>No medical records found.</p>
            ) : (
              <div className="timeline-scroll">
                {medicalHistory.map((entry, index) => (
                  <div
                    key={index}
                    className={`timeline-entry ${entry.type?.toLowerCase()}`}
                  >
                    <div className="entry-icon">
                      {entry.type === "Vaccination" && <Syringe size={16} />}
                      {entry.type === "Milestone" && <Star size={16} />}
                      {entry.type === "Treatment" && <DropletIcon size={16} />}
                      {entry.type === "Adoption" && <HeartHandshake size={16} />}
                      {entry.type === "Illness" && <AlertCircle size={16} />}
                    </div>
                    <div className="entry-details">
                      <span className="entry-date">{entry.date}</span>
                      <p>
                        <strong>{entry.type}</strong>: {entry.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Owner Details */}
          <div className="pet-history-owner-details">
            <h3>Owner Info</h3>
            {Object.keys(ownerDetails).length === 0 ? (
              <p>No owner details available.</p>
            ) : (
              <>
                <p>
                  <strong>Name:</strong> {ownerDetails.name}
                </p>
                <p>
                  <strong>Phone:</strong> {ownerDetails.phone}
                </p>
                <p>
                  <strong>Email:</strong> {ownerDetails.email}
                </p>
                <p>
                  <strong>Address:</strong> {ownerDetails.address}
                </p>
                <p>
                  <strong>Relationship:</strong> {ownerDetails.relationship}
                </p>
                <p>
                  <strong>Next Appointment:</strong>{" "}
                  {ownerDetails.nextAppointment}
                </p>
                <p>
                  <strong>Vet Assigned:</strong> {ownerDetails.vetAssigned}
                </p>
              </>
            )}
          </div>

          {/* Allergies */}
          <div className="pet-history-allergies">
            <h3>Known Allergies</h3>
            {knownAllergies.length === 0 ? (
              <p>No allergies recorded.</p>
            ) : (
              <ul>
                {knownAllergies.map((item, i) => (
                  <li key={i}>
                    <strong>{item.allergen}</strong> — {item.reaction} (
                    {item.severity})
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default PetMedicalHistory;

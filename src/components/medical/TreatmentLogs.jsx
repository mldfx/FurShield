import "./TreatmentLogs.css"
import { useState } from "react";
import { PawPrint, Fish, Bird, Squirrel } from 'lucide-react';

const TreatmentLogs = () => {

  const [showToast, setShowToast] = useState(false);

  const handleAddNote = (e) => {
    e.preventDefault(); // prevent form submission
    setShowToast(true); // show toast
    setTimeout(() => setShowToast(false), 2500); // hide after 2.5 seconds
  }



  return (
    <div className="vet-form-bg-icons">
      <Fish className="vet-form-icon top-left" size={100}/>
      <Bird className="vet-form-icon top-right" size={100}/>
      <PawPrint className="vet-form-icon bottom-left" size={100}/>
      <Squirrel className="vet-form-icon bottom-right" size={100}/>

      <div className="treatment-logs">
          <div className="treatment-log-title"> <h1>Treatment Logs</h1> <hr/> </div>
          <form className="treatment-log-form">
            <div className="treatment-log-form-container">
              <label>Pet Name</label>
              <input type="text" placeholder="Enter Pet Name"/>
              <label>Species</label>
              <select>
                <option value="" disabled selected>Select species</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="other">Other</option>
              </select>
              <label>Date of Treatment</label>
              <input type="date"/>
              <label> Symptoms </label>
              <textarea placeholder="Enter symptoms here..."></textarea>
              <label>Diagnosis Notes</label>
              <textarea placeholder="Enter diagnosis notes here..."></textarea>
              <label>Prescribed Medications</label>
              <textarea placeholder="Enter prescribed medications here..."></textarea>
              <label>Follow-up Actions</label>
              <textarea placeholder="Enter follow-up actions here..."></textarea>
              <button className="submit-btn" onClick={handleAddNote}>
                Add Note
              </button>
            </div>
          </form>
          {showToast && (
            <div className="toast-popup">
              ✅ Note has been recorded!
            </div>
          )}
      <div className="return-btn">
        <a href="/dashboard/veterinarian">Back to Dashboard</a>
      </div>
      </div>
    </div>
    )
  }
  
  export default TreatmentLogs
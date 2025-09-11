import React, { useState } from "react";
import { FiUpload, FiFileText } from "react-icons/fi";
import { MdPets, MdOutlineFolderOpen } from "react-icons/md";
import "./DocumentUpload.css";

const API_BASE = import.meta.env.VITE_API_BASE || "";

const DocumentUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("Vet Certificate");
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);

    if (selected && selected.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(selected);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category);

    // Send document to backend (placeholder endpoint)
    fetch(`${API_BASE}/api/documents`, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        if (onUpload) onUpload(formData);
      });

    setFile(null);
    setPreview(null);
  };

  return (
    <>
      {/* Friendly Intro Section */}
      <div className="intro-text">
        {!file ? (
          <>
            <h1>
              <MdPets size={26} className="icon" /> Keep Your Pet’s Records Safe
            </h1>
            <p>
              Upload your pet’s important documents — certificates, lab results,
              or x-rays. Having them in one place keeps vet visits stress-free!
            </p>
          </>
        ) : (
          <>
            <h1>
              <FiFileText size={24} className="icon" /> Ready to Upload?
            </h1>
            <p>
              You’ve selected <strong>{file.name}</strong>. Double-check the
              preview below, then hit <em>Upload</em>.
            </p>
          </>
        )}
      </div>

      <div className="document-upload-card">
        <h2>
          <MdOutlineFolderOpen size={22} className="icon" /> Upload Pet Document
        </h2>
        <form onSubmit={handleSubmit} className="upload-form">
          {/* Category Select */}
          <label>Document Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="styled-select"
          >
            <option>Vet Certificate</option>
            <option>X-Ray</option>
            <option>Lab Report</option>
            <option>Other</option>
          </select>

          {/* Drag & Drop Zone */}
          <label className="drop-zone">
            <input
              type="file"
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png,.pdf"
              hidden
            />
            {file ? (
              <span>
                <FiFileText className="inline-icon" /> {file.name}
              </span>
            ) : (
              <span>
                <FiUpload className="inline-icon" /> Drag & Drop or Click to
                Upload
              </span>
            )}
          </label>

          {/* Preview */}
          {preview && (
            <div className="preview">
              <img src={preview} alt="Preview" />
            </div>
          )}
          {file && !file.type.startsWith("image/") && (
            <p className="file-preview">
              <FiFileText className="inline-icon" /> {file.name}
            </p>
          )}

          {/* Submit */}
          <button type="submit" className="upload-btn">
            <FiUpload className="inline-icon" /> Upload
          </button>
        </form>
      </div>
    </>
  );
};

export default DocumentUpload;

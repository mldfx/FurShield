// src/Mypet.jsx
import React, { useState, useRef, useEffect } from 'react';
import './Mypet.css';

const Mypet = () => {
  const [pets, setPets] = useState(() => {
    const saved = localStorage.getItem('mypet_pets');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [selectedPetId, setSelectedPetId] = useState(null);
  const [isAddingPet, setIsAddingPet] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const imageUploadRef = useRef(null);

  // Species & Breed Options
  const speciesOptions = ['Dog', 'Cat', 'Bird', 'Rabbit', 'Other'];
  const breedOptions = {
    Dog: ['Labrador', 'Poodle', 'Beagle', 'Bulldog', 'Golden Retriever', 'Other'],
    Cat: ['Siamese', 'Persian', 'Maine Coon', 'Ragdoll', 'Bengal', 'Other'],
    Bird: ['Parrot', 'Canary', 'Finch', 'Cockatiel', 'Other'],
    Rabbit: ['Lop', 'Dutch', 'Angora', 'Flemish Giant', 'Other'],
    Other: ['Other']
  };

  // Save to localStorage whenever pets change
  useEffect(() => {
    localStorage.setItem('mypet_pets', JSON.stringify(pets));
  }, [pets]);

  // Handle Add or Edit Pet
  const handleSavePet = (petData, imageUrl = null) => {
    const newPet = {
      id: petData.id || Date.now(),
      name: petData.name.trim(),
      species: petData.species,
      breed: petData.breed,
      age: petData.age,
      notes: petData.notes || '',
      imageUrl: imageUrl || petData.imageUrl || '',
      createdAt: petData.id ? pets.find(p => p.id === petData.id)?.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    if (petData.id) {
      // Edit existing
      setPets(pets.map(p => p.id === petData.id ? newPet : p));
    } else {
      // Add new
      setPets([...pets, newPet]);
    }

    setIsAddingPet(false);
    setIsEditing(false);
    setSelectedPetId(newPet.id);
  };

  // Delete Pet
  const handleDeletePet = (petId) => {
    if (window.confirm('Are you sure you want to delete this pet? This cannot be undone.')) {
      setPets(pets.filter(p => p.id !== petId));
      if (selectedPetId === petId) {
        setSelectedPetId(pets.length > 1 ? pets[0].id : null);
      }
    }
  };

  // Image Upload Handler
  const handleImageUpload = (e, setImagePreview) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      return imageUrl;
    }
    return null;
  };

  // Pet Form Component
  const PetForm = ({ initialData = {} }) => {
    const [formData, setFormData] = useState({
      id: initialData.id || null,
      name: initialData.name || '',
      species: initialData.species || 'Dog',
      breed: initialData.breed || '',
      age: initialData.age || '',
      notes: initialData.notes || '',
      imageUrl: initialData.imageUrl || ''
    });
    const [imagePreview, setImagePreview] = useState(initialData.imageUrl || '');

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
      const uploadedUrl = handleImageUpload(e, setImagePreview);
      if (uploadedUrl) {
        setFormData(prev => ({ ...prev, imageUrl: '' }));
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!formData.name || !formData.species || !formData.age) {
        alert('Please fill in all required fields.');
        return;
      }
      handleSavePet(formData, imagePreview);
    };

    return (
      <div className="mypet-modal-overlay">
        <div className="mypet-modal-content">
          <h3>{initialData.id ? 'Edit Pet Profile' : 'Add New Pet'}</h3>
          <form onSubmit={handleSubmit} className="mypet-pet-form">
            <div className="mypet-form-group">
              <label>Pet Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="e.g., Max, Bella"
              />
            </div>

            <div className="mypet-form-group">
              <label>Species *</label>
              <select
                name="species"
                value={formData.species}
                onChange={handleInputChange}
                required
              >
                {speciesOptions.map(species => (
                  <option key={species} value={species}>{species}</option>
                ))}
              </select>
            </div>

            <div className="mypet-form-group">
              <label>Breed *</label>
              <select
                name="breed"
                value={formData.breed}
                onChange={handleInputChange}
                required
              >
                {(breedOptions[formData.species] || []).map(breed => (
                  <option key={breed} value={breed}>{breed}</option>
                ))}
              </select>
            </div>

            <div className="mypet-form-group">
              <label>Age (years) *</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                min="0"
                required
                placeholder="e.g., 3"
              />
            </div>

            <div className="mypet-form-group">
              <label>Notes (optional)</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows="3"
                placeholder="Any special info, personality, or medical notes..."
              />
            </div>

            <div className="mypet-form-group">
              <label>Profile Picture</label>
              <div className="mypet-image-upload-area">
                {imagePreview && (
                  <img src={imagePreview} alt="Preview" className="mypet-image-preview" />
                )}
                <input
                  type="file"
                  ref={imageUploadRef}
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
                <button
                  type="button"
                  className="mypet-btn-secondary"
                  onClick={() => imageUploadRef.current?.click()}
                >
                  {imagePreview ? 'Change Photo' : 'Upload Photo'}
                </button>
                {imagePreview && (
                  <button
                    type="button"
                    className="mypet-btn-delete"
                    onClick={() => {
                      setImagePreview('');
                      setFormData(prev => ({ ...prev, imageUrl: '' }));
                    }}
                    style={{ marginTop: '0.5rem' }}
                  >
                    Remove Photo
                  </button>
                )}
              </div>
            </div>

            <div className="mypet-form-actions">
              <button type="submit" className="mypet-btn-primary">
                {initialData.id ? 'Update Pet' : 'Add Pet'}
              </button>
              <button 
                type="button" 
                onClick={() => {
                  setIsAddingPet(false);
                  setIsEditing(false);
                }} 
                className="mypet-btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Pet Card Component
  const PetCard = ({ pet }) => {
    return (
      <div className="mypet-pet-card">
        <div className="mypet-pet-card-image">
          {pet.imageUrl ? (
            <img src={pet.imageUrl} alt={pet.name} className="mypet-pet-img" />
          ) : (
            <div className="mypet-placeholder-image">
              <span>{pet.name.charAt(0)}</span>
            </div>
          )}
        </div>
        <div className="mypet-pet-card-info">
          <h3>{pet.name}</h3>
          <p><strong>Species:</strong> {pet.species}</p>
          <p><strong>Breed:</strong> {pet.breed}</p>
          <p><strong>Age:</strong> {pet.age} years</p>
          {pet.notes && (
            <div className="mypet-pet-notes">
              <p><strong>Notes:</strong> {pet.notes}</p>
            </div>
          )}
          <div className="mypet-pet-actions">
            <button 
              onClick={() => {
                setIsEditing(true);
                setIsAddingPet(true);
                setSelectedPetId(pet.id);
              }}
              className="mypet-btn-secondary"
            >
              Edit
            </button>
            <button 
              onClick={() => handleDeletePet(pet.id)}
              className="mypet-btn-delete"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Selected Pet Profile (Detailed View)
  const PetProfile = ({ pet }) => {
    if (!pet) return null;

    return (
      <div className="mypet-pet-profile">
        <div className="mypet-profile-header">
          <div className="mypet-profile-image-large">
            {pet.imageUrl ? (
              <img src={pet.imageUrl} alt={pet.name} className="mypet-profile-img-large" />
            ) : (
              <div className="mypet-placeholder-image-large">
                <span>{pet.name.charAt(0)}</span>
              </div>
            )}
          </div>
          <div className="mypet-profile-details">
            <h2>{pet.name}</h2>
            <div className="mypet-profile-meta">
              <p><strong>Species:</strong> {pet.species}</p>
              <p><strong>Breed:</strong> {pet.breed}</p>
              <p><strong>Age:</strong> {pet.age} years</p>
              <p><strong>Added:</strong> {new Date(pet.createdAt).toLocaleDateString()}</p>
              {pet.updatedAt && pet.updatedAt !== pet.createdAt && (
                <p><strong>Last Updated:</strong> {new Date(pet.updatedAt).toLocaleDateString()}</p>
              )}
            </div>
            {pet.notes && (
              <div className="mypet-profile-notes">
                <h4>Notes</h4>
                <p>{pet.notes}</p>
              </div>
            )}
            <div className="mypet-profile-actions">
              <button 
                onClick={() => {
                  setIsEditing(true);
                  setIsAddingPet(true);
                  setSelectedPetId(pet.id);
                }}
                className="mypet-btn-secondary"
              >
                Edit Profile
              </button>
              <button 
                onClick={() => handleDeletePet(pet.id)}
                className="mypet-btn-delete"
              >
                Delete Pet
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const selectedPet = pets.find(p => p.id === selectedPetId);

  return (
    <div className="mypet-app">
      <header className="mypet-app-header">
        <h1>🐾 MyPet Profiles</h1>
        <p>Manage all your furry (or feathery!) friends in one place</p>
      </header>

      <main className="mypet-app-main">
        <div className="mypet-actions-bar">
          <button 
            onClick={() => {
              setIsAddingPet(true);
              setIsEditing(false);
              setSelectedPetId(null);
            }} 
            className="mypet-btn-primary"
          >
            + Add New Pet
          </button>
        </div>

        {pets.length === 0 ? (
          <div className="mypet-empty-state">
            <div className="mypet-empty-icon">🐾</div>
            <h3>You haven't added any pets yet</h3>
            <p>Click "Add New Pet" to create your first pet profile</p>
          </div>
        ) : (
          <>
            <div className="mypet-pets-grid">
              {pets.map(pet => (
                <div 
                  key={pet.id} 
                  className={`mypet-pet-tile ${selectedPetId === pet.id ? 'selected' : ''}`}
                  onClick={() => setSelectedPetId(pet.id)}
                >
                  <div className="mypet-pet-tile-image">
                    {pet.imageUrl ? (
                      <img src={pet.imageUrl} alt={pet.name} />
                    ) : (
                      <div className="mypet-tile-placeholder">
                        <span>{pet.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className="mypet-pet-tile-info">
                    <h4>{pet.name}</h4>
                    <p>{pet.breed}, {pet.age} yrs</p>
                  </div>
                </div>
              ))}
            </div>

            {selectedPet && <PetProfile pet={selectedPet} />}
          </>
        )}

        {isAddingPet && (
          <PetForm 
            initialData={isEditing && selectedPet ? selectedPet : {}} 
          />
        )}
      </main>

      <footer className="mypet-app-footer">
        <p>© {new Date().getFullYear()} MyPet Profiles • Keep track of your beloved companions</p>
      </footer>
    </div>
  );
};

export default Mypet;
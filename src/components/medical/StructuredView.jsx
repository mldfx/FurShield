import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, User, Calendar, FileText, Pill, TestTube, Activity } from "lucide-react"

import petImg1 from "../../assets/images/pet-img1.jpg"
import petImg2 from "../../assets/images/pet-img2.jpeg"
import petImg3 from "../../assets/images/pet-img3.jpeg"
import petImg4 from "../../assets/images/pet-img4.jpg"

import catImg1 from "../../assets/images/cat1.jpeg"
import catImg2 from "../../assets/images/cat2.jpeg"
import catImg3 from "../../assets/images/cat3.jpeg"
import catImg4 from "../../assets/images/cat4.jpeg"
import catImg5 from "../../assets/images/cat5.jpeg"

import fishImg1 from "../../assets/images/fish1.jpeg"
import fishImg2 from "../../assets/images/fish2.jpeg"
import fishImg3 from "../../assets/images/fish3.jpeg"
import fishImg4 from "../../assets/images/fish4.jpeg"
import fishImg5 from "../../assets/images/fish5.jpeg"

import otherImg1 from "../../assets/images/other1.jpeg"
import otherImg3 from "../../assets/images/other3.jpeg"
import otherImg4 from "../../assets/images/other4.jpeg"
import otherImg5 from "../../assets/images/other5.jpeg"

import "./StructuredView.css"

const StructuredView = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [activeCategory, setActiveCategory] = useState("dogs")

  const animalData = {
    dogs: [
      {
        id: 1,
        name: "Bella the Golden Retriever",
        image: petImg1,
        condition: "Parvovirus (Canine Parvo)",
        symptoms: "Vomiting, diarrhea, lethargy, loss of appetite and dehydration",
        tests: "Fecal ELISA test for parvovirus",
        labResults: [
          "Positive for Parvovirus antigen in feces",
          "Elevated white blood cell count indicating infection",
          "Signs of dehydration in blood work",
        ],
        pastTreatments: [
          "IV fluids and Electrolytes to treat dehydration",
          "Antiemetic medication to control vomiting",
          "Broad-spectrum antibiotics to prevent secondary bacterial infections",
        ],
        prescriptions: ["Fluid Therapy", "Gastroprotectants", "Ampicillin"],
      },
      {
        id: 2,
        name: "Pluto the Pug",
        image: petImg2,
        condition: "Kennel Cough (Infectious Tracheobronchitis)",
        symptoms: "Dry, hacking cough, gagging and mild fever",
        tests: "Physical exam",
        labResults: ["Mild leukocytosis", "Positive for Bordetella bronchiseptica", "No pneumonia detected"],
        pastTreatments: ["Nebulization with saline to ease breathing", "Antibiotics (doxycycline)"],
        prescriptions: ["Doxycycline", "Cough suppressant syrup", "Vitamin Supplements"],
      },
      {
        id: 3,
        name: "Bailey the Beagle",
        image: petImg3,
        condition: "Canine Distemper",
        symptoms: "Fever, Nasal/Eye Discharge, coughing, seizures",
        tests: "PCR swab test",
        labResults: [
          "Negative for skin scraping test.",
          "Positive for dust mites and grass pollen.",
          "Mild eosinophilia.",
        ],
        pastTreatments: [
          "IV fluids and Electrolytes to treat dehydration",
          "Broad-spectrum antibiotics to prevent secondary bacterial infections",
          "Anticonvulsant therapy",
        ],
        prescriptions: ["Phenobarbital", "Amoxicillin-clavulanate", "NSAIDs (meloxicam)"],
      },
      {
        id: 4,
        name: "Lucky the Golden Labrador",
        image: petImg4,
        condition: "Skin Allergies (Atopic Dermatitis)",
        symptoms: "Itching, Red skin, hair loss, licking paws.",
        tests: "PCR swab test",
        labResults: ["Positive for Canine Distemper Virus through PCR test", "Lymphopenia", "Increased protein levels"],
        pastTreatments: ["Medicated Shampoo.", "Corticosteroids.", "Hypoallergenic diet trial."],
        prescriptions: ["Prednisolone", "Cetrizine", "Omega-3 fatty acid supplements daily."],
      },
    ],
    cats: [
      {
        id: 1,
        name: "Luna the Siamese",
        image: catImg1,
        condition: "Feline Lower Urinary Tract Disease (FLUTD)",
        symptoms: "Straining to urinate, frequent urination, blood in urine, urinating outside litter box",
        tests: "Urinalysis",
        labResults: [
          "Hematuria, crystals present, elevated pH",
          "Positive for E. coli",
          "Mildly elevated BUN/creatinine",
        ],
        pastTreatments: [
          "IV fluids and Electrolytes to treat dehydration",
          "Antiemetic medication to control vomiting",
          "Broad-spectrum antibiotics to prevent secondary bacterial infections",
        ],
        prescriptions: ["Fluid Therapy", "Gastroprotectants", "Ampicillin"],
      },
      {
        id: 2,
        name: "Oliver the Maine Coon",
        image: catImg2,
        condition: "Hypertrophic Cardiomyopathy (HCM)",
        symptoms: "Rapid breathing, lethargy, fainting, reduced appetite",
        tests: "Echocardiogram",
        labResults: ["Thickened heart muscle walls", "Reduced cardiac output", "Normal blood chemistry"],
        pastTreatments: ["Cardiac medications", "Oxygen therapy", "Restricted activity"],
        prescriptions: ["Atenolol", "Furosemide", "Low-sodium diet"],
      },
      {
        id: 3,
        name: "Pepper the Persian",
        image: catImg3,
        condition: "Polycystic Kidney Disease (PKD)",
        symptoms: "Increased thirst, frequent urination, weight loss, poor coat condition",
        tests: "Ultrasound of kidneys",
        labResults: ["Positive for Canine Distemper Virus through PCR test", "Lymphopenia", "Increased protein levels"],
        pastTreatments: [
          "IV fluids and Electrolytes to treat dehydration",
          "Broad-spectrum antibiotics to prevent secondary bacterial infections",
          "Anticonvulsant therapy",
        ],
        prescriptions: ["Phenobarbital", "Amoxicillin-clavulanate", "NSAIDs (meloxicam)"],
      },
      {
        id: 4,
        name: "Max the British Shorthair",
        image: catImg4,
        condition: "Feline Diabetes Mellitus",
        symptoms: "Excessive thirst, frequent urination, weight loss despite normal appetite, lethargy",
        tests: "Fructosamine test",
        labResults: [
          "Negative for skin scraping test",
          "Positive reaction to dust mites and grass pollen",
          "Mild eosinophilia",
        ],
        pastTreatments: ["Medicated shampoo", "Corticosteroids", "Hypoallergenic diet trial"],
        prescriptions: ["Prednisolone", "Cetirizine", "Omega-3 fatty acid supplements daily"],
      },
      {
        id: 5,
        name: "Daisy the Ragdoll",
        image: catImg5,
        condition: "Feline Hyperthyroidism",
        symptoms: "Weight loss, increased appetite, hyperactivity, vomiting, diarrhea",
        tests: "Blood test for thyroid hormone (T4)",
        labResults: [
          "Presence of Malassezia pachydermatis",
          "Confirmation of mixed yeast and bacterial infection",
          "Negative systemic infection",
        ],
        pastTreatments: ["Ears cleaned with veterinary ear cleanser", "Topical antibiotics", "Ear drops"],
        prescriptions: ["Ear cleanser", "Anti-inflammatory drops to the ear", "Otic drops twice daily"],
      },
    ],
    fish: [
      {
        id: 1,
        name: "Bubbles the Betta",
        image: fishImg1,
        condition: "Fin Rot",
        symptoms: "Ragged fins, discoloration, lethargy",
        tests: "Water quality test (ammonia/nitrites), microscopic exam of fin tissue",
        labResults: [
          "Elevated ammonia/nitrites",
          "Presence of bacterial colonies",
          "Sensitivity to broad-spectrum antibiotics",
        ],
        pastTreatments: ["Water changes, salt baths", "Removal of sharp tank objects", "Isolated tank for recovery"],
        prescriptions: ["Antibiotic bath", "Aquarium salt", "Stress coat conditioner"],
      },
      {
        id: 2,
        name: "Goldie the Goldfish",
        image: fishImg2,
        condition: "Ichthyophthirius multifiliis",
        symptoms: "White cysts on skin, scratching against surfaces, rapid gill movement",
        tests: "Skin scrape under microscope",
        labResults: ["Ich protozoa visible", "Cyst formation", "Low temperature"],
        pastTreatments: ["Gradual increase of tank temperature", "Tank-wide parasite treatment"],
        prescriptions: [
          "Formalin–Malachite Green combo",
          "Copper sulfate treatment",
          "Controlled doses of aquarium salt",
        ],
      },
      {
        id: 3,
        name: "Stripe the Clownfish",
        image: fishImg3,
        condition: "Marine Velvet",
        symptoms: "Fine golden dust on skin, rapid breathing, clamped fins",
        tests: "Gill scraping with microscope",
        labResults: [
          "Presence of Amyloodinium ocellatum",
          "Signs of oxygen deprivation",
          "Stable pH but parasite load visible",
        ],
        pastTreatments: ["Freshwater dips", "Quarantine tank setup", "UV sterilizer in main aquarium"],
        prescriptions: ["Copper-based medications", "Chloroquine phosphate treatment", "Vitamin-enriched food"],
      },
      {
        id: 4,
        name: "Shadow the Koi",
        image: fishImg4,
        condition: "Koi Herpesvirus",
        symptoms: "Sunken eyes, gill necrosis, lethargy",
        tests: "PCR test for KHV",
        labResults: ["Positive for KHV", "Necrotic tissue", "Normal parameters"],
        pastTreatments: [
          "Quarantine with controlled heating",
          "Supportive oxygen therapy",
          "Removal of sick fish from pond",
        ],
        prescriptions: ["Immune-boosting supplements", "Secondary infection antibiotics"],
      },
      {
        id: 5,
        name: "Coral the Guppy",
        image: fishImg5,
        condition: "Columnaris (Flexibacter infection)",
        symptoms: "White cotton-like patches, frayed fins, ulcers",
        tests: "Gill swab",
        labResults: [
          "Flavobacterium columnare identified",
          "Low oxygen, high organic matter",
          "Rod-shaped bacteria observed",
        ],
        pastTreatments: ["Increased aeration", "Quarantine tank treatment", "Salt bath therapy"],
        prescriptions: ["Kanamycin bath", "Medicated fish food", "Aquarium salt"],
      },
    ],

    other: [
      {
        id: 1,
        name: "Kiwi the Parakeet",
        image: otherImg1,
        condition: "Psittacosis (Chlamydiosis)",
        symptoms: "Nasal discharge, green droppings, ruffled feathers, lethargy",
        tests: "PCR test for Chlamydia psittaci",
        labResults: ["Positive for Chlamydia psittaci", "Elevated white blood cell count", "Bacterial inclusions"],
        pastTreatments: [
          "Quarantine and strict hygiene measures",
          "Supportive fluids and warmth",
          "Nutritional supplements",
        ],
        prescriptions: ["Probiotics for gut balance", "Doxycycline", "Probiotics for gut balance"],
      },
      {
        id: 2,
        name: "Thumper the Rabbit",
        image: otherImg3,
        condition: "Rabbit Hemorrhagic Disease Virus",
        symptoms: "Fever, lethargy, difficulty breathing, sudden death in severe cases",
        tests: "PCR blood test, liver biopsy (post-mortem)",
        labResults: ["Positive for RHDV", "Low platelets, abnormal clotting", "Enlarged, hemorrhagic liver"],
        pastTreatments: ["Isolation from other rabbits", "Fluid therapy", "Oxygen support"],
        prescriptions: ["Pain relievers", "Vaccination for prevention"],
      },
      {
        id: 3,
        name: "Coco the Syrian Hamster",
        image: otherImg4,
        condition: "Wet Tail (Proliferative Ileitis)",
        symptoms: "Severe diarrhea, wet/soiled tail area, lethargy, weight loss, hunched posture",
        tests: "Fecal culture",
        labResults: ["Positive for Lawsonia intracellularis", "Dehydration signs", "Intestinal bacteria overgrowth"],
        pastTreatments: [
          "Fluid therapy",
          "Strict cage sanitation and bedding changes",
          "Hand-feeding with recovery formula",
        ],
        prescriptions: ["Antibiotics", "Probiotics for gut flora restoration", "Anti-diarrheal supportive care"],
      },
      {
        id: 4,
        name: "Nibbles the Guinea Pig",
        image: otherImg5,
        condition: "Scurvy (Vitamin C Deficiency)",
        symptoms: "Swollen joints, poor coat, lethargy, loss of appetite",
        tests: "Blood vitamin C levels test and physical exam",
        labResults: ["Low plasma vitamin C", "Weak bones, mild fractures", "Mild anemia"],
        pastTreatments: [
          "Fresh fruits/vegetables supplementation",
          "Vitamin C–fortified pellets",
          "Assisted syringe-feeding",
        ],
        prescriptions: ["Oral Vitamin C", "Pain relievers", "Nutritional support formula"],
      },
    ],
  }

  const currentData = animalData[activeCategory]

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === 0 ? currentData.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 300)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === currentData.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 300)
  }

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setActiveIndex(0)
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [isAnimating])

  const currentPatient = currentData[activeIndex]

  return (
    <div className="vet-container">
      <div className="main-card">
        <div
          className="header"
          style={{
            background: "linear-gradient(135deg, #2c5aa0 0%, #1e3a8a 100%)",
            padding: "30px",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1
            className="title"
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              margin: "0 0 10px 0",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
              color: "white",
            }}
          >
            Veterinary Patient Records
          </h1>
          <p
            className="subtitle"
            style={{
              fontSize: "1.1rem",
              margin: "0",
              color: "white",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
            }}
          >
            Comprehensive medical history and treatment tracking
          </p>
        </div>

        <div className="navigation">
          <ul className="nav-list">
            {Object.keys(animalData).map((category) => (
              <li
                key={category}
                className={`nav-item ${activeCategory === category ? "active" : "inactive"}`}
                onClick={() => handleCategoryChange(category)}
                style={
                  activeCategory === category
                    ? {
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        color: "white",
                        transform: "translateY(-2px)",
                        boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
                        padding: "12px 24px",
                        borderRadius: "25px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        fontWeight: "600",
                        textTransform: "capitalize",
                      }
                    : {
                        background: "white",
                        color: "#1a202c",
                        border: "2px solid #e9ecef",
                        padding: "12px 24px",
                        borderRadius: "25px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        fontWeight: "600",
                        textTransform: "capitalize",
                      }
                }
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-container">
          <div className={`patient-card ${isAnimating ? "animating" : ""}`}>
            <div className="image-section">
              <img
                src={currentPatient.image || "/placeholder.svg"}
                alt={currentPatient.name}
                className="patient-image"
              />
            </div>

            <div className="details-section">
              <h3 className="patient-name">
                <User size={24} />
                {currentPatient.name}
              </h3>

              <div
                className="condition"
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  margin: "0 0 20px 0",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  borderLeft: "4px solid #b91c1c",
                  background: "#fef2f2",
                  color: "#b91c1c",
                }}
              >
                {currentPatient.condition}
              </div>

              <div className="section">
                <h4 className="section-title">
                  <Activity size={18} />
                  Symptoms:
                </h4>
                <p className="section-content">{currentPatient.symptoms}</p>
              </div>

              <div className="section">
                <h4 className="section-title">
                  <TestTube size={18} />
                  Tests:
                </h4>
                <p className="section-content">{currentPatient.tests}</p>
              </div>

              <div className="section">
                <h4 className="section-title">
                  <FileText size={18} />
                  Lab Results:
                </h4>
                <ul className="section-list">
                  {currentPatient.labResults.map((result, index) => (
                    <li key={index} className="list-item">
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="section">
                <h4 className="section-title">
                  <Calendar size={18} />
                  Past Treatments:
                </h4>
                <ul className="section-list">
                  {currentPatient.pastTreatments.map((treatment, index) => (
                    <li key={index} className="list-item">
                      {treatment}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="section">
                <h4 className="section-title">
                  <Pill size={18} />
                  Prescriptions:
                </h4>
                <ul className="section-list">
                  {currentPatient.prescriptions.map((prescription, index) => (
                    <li key={index} className="list-item">
                      {prescription}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation-controls">
          <button className="nav-button" onClick={handlePrev} disabled={isAnimating}>
            <ChevronLeft size={24} />
          </button>

          <div className="indicator">
            {currentData.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => !isAnimating && setActiveIndex(index)}
              />
            ))}
          </div>

          <button className="nav-button" onClick={handleNext} disabled={isAnimating}>
            <ChevronRight size={24} />
          </button>
        </div>

        <a href="/dashboard/veterinarian" className="back-button">
          ← Back to Dashboard
        </a>
      </div>
    </div>
  )
}

export default StructuredView
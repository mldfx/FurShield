import "./StructuredView.css"
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from "react";
import catImg1 from "../../assets/images/cat1.jpeg"
import catImg2 from "../../assets/images/cat2.jpeg"
import catImg3 from "../../assets/images/cat3.jpeg"
import catImg4 from "../../assets/images/cat4.jpeg"
import catImg5 from "../../assets/images/cat5.jpeg"

const Cat = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = [
    <div className="structured-view-card">
      <div className="pet-img1"> <img src={catImg1} alt="pet1" className="pet-img1"/> </div>
      <div className="pet-log-details1">
        <div className="pet1"> <h3> Luna the Siamese </h3> <hr/> </div>
        <div className="pet-report1"> <h3> Feline Lower Urinary Tract Disease (FLUTD) </h3> </div>
        <div className="pet-diagnosis1"> <h3>Symptoms:</h3> Straining to urinate, frequent urination, blood in urine, urinating outside litter box. <br/> <h3>Tests:</h3> Urinalysis. </div>
        <div className="pet-lab-results1"> <h3>Lab Results</h3>
          <ul>
            <li>Hematuria, crystals present, elevated pH</li>
            <li>Positive for E. coli</li>
            <li>Mildly elevated BUN/creatinine</li>
          </ul>
        </div>
        <div className="pet-past-treatment1"> <h3>Past Treatments: </h3>
          <ul>
            <li>IV fluids and Electrolytes to treat dehydration.</li>
            <li>Antiemetic medication to control vomiting.</li>
            <li>Broad-spectrum antibiotics to prevent secondary bacterial infections.</li>
          </ul>
        </div>
        <div className="pet-prescriptions"> <h3> Prescriptions: </h3>
          <ul>
            <li>Fluid Threapy.</li>
            <li>Gastroprotectants</li>
            <li>Ampicilin</li>
          </ul>
        </div>
      </div>
    </div>,
    <div className="structured-view-card">
      <div className="cat-img2"> <img src={catImg2} alt="pet2" className="cat-img2"/> </div>
      <div className="cat-log-details1">
        <div className="pet1"> <h3> Oliver the Maine Coon </h3> <hr/> </div>
        <div className="pet-report1"> <h3> Hypertrophic Cardiomyopathy (HCM)</h3> </div>
        <div className="pet-diagnosis1"> <h3>Symptoms:</h3> Rapid breathing, lethargy, fainting, reduced appetite. <br/> <h3>Tests:</h3> Echocardiogram</div>
        <div className="pet-lab-results1"> <h3>Lab Results</h3>
          <ul>
            <li>Mild leukocytosis.</li>
            <li>Positive for Bordetella bronchiseptica.</li>
            <li>No pneumonia detected.</li>
          </ul>
        </div>
        <div className="pet-past-treatment1"> <h3>Past Treatments: </h3>
          <ul>
            <li>Nebulization with saline to ease breathing.</li>
            <li>Antibiotics(doxycycline).</li>
          </ul>
        </div>
        <div className="pet-prescriptions"> <h3> Prescriptions: </h3>
          <ul>
            <li>Doxycycline.</li>
            <li>Cough suppressant syrup</li>
            <li>Vitamin Supplements</li>
          </ul>
        </div>
      </div>
    </div>,
    <div className="structured-view-card">
      <div className="cat-img3"> <img src={catImg3} alt="pet3" className="cat-img3"/> </div>
      <div className="pet-log-details1">
        <div className="pet1"> <h3> Pepper the Persian </h3> <hr/> </div>
        <div className="pet-report1"> <h3> Polycystic Kidney Disease (PKD) </h3> </div>
        <div className="pet-diagnosis1"> <h3>Symptoms:</h3> Increased thirst, frequent urination, weight loss, poor coat condition. <br/> <h3>Tests:</h3> Ultrasound of kidneys. </div>
        <div className="pet-lab-results1"> <h3>Lab Results</h3>
          <ul>
            <li>Positive for Canine Distemper Virus though PCR test.</li>
            <li>Lymphopenia.</li>
            <li>Increased protein levels.</li>
          </ul>
        </div>
        <div className="pet-past-treatment1"> <h3>Past Treatments: </h3>
          <ul>
            <li>IV fluids and Electrolytes to treat dehydration.</li>
            <li>Broad-spectrum antibiotics to prevent secondary bacterial infections.</li>
            <li>Anticonvulsant theraphy.</li>
          </ul>
        </div>
        <div className="pet-prescriptions"> <h3> Prescriptions: </h3>
          <ul>
            <li>Phenobarbital.</li>
            <li>Amoxicillin-clavulante</li>
            <li>NSAIDs(meloxicam)</li>
          </ul>
        </div>
      </div>
    </div>,
    <div className="structured-view-card">
      <div className="pet-img4"> <img src={catImg4} alt="pet4" className="pet-img4"/> </div>
      <div className="pet-log-details1">
        <div className="pet1"> <h3> Max the British Shorthair </h3> <hr/> </div>
        <div className="pet-report1"> <h3> Feline Diabetes Mellitus </h3> </div>
        <div className="pet-diagnosis1"> <h3>Symptoms:</h3> Excessive thirst, frequent urination, weight loss despite normal appetite, lethargy. <br/> <h3>Tests:</h3> Fructosamine test. </div>
        <div className="pet-lab-results1"> <h3>Lab Results</h3>
          <ul>
            <li>Negative for skin scraping test.</li>
            <li>Positive reaction to dust mites and grass pollen.</li>
            <li>Mild eosinophilia.</li>
          </ul>
        </div>
        <div className="pet-past-treatment1"> <h3>Past Treatments: </h3>
          <ul>
            <li>Medicated Shampoo.</li>
            <li>Corticosteroids.</li>
            <li>Hypoallergenic diet trial.</li>
          </ul>
        </div>
        <div className="pet-prescriptions"> <h3> Prescriptions: </h3>
          <ul>
            <li>Prednisolone.</li>
            <li>Cetrizine.</li>
            <li>Omega-3 fatty acid supplements daily.</li>
          </ul>
        </div>
      </div>
    </div>,
    <div className="structured-view-card">
      <div className="cat-img5"> <img src={catImg5} alt="pet5" className="cat-img5"/> </div>
      <div className="pet-log-details1">
        <div className="pet1"> <h3> Daisy the Ragdoll </h3> <hr/> </div>
        <div className="pet-report1"> <h3> Feline Hyperthyroidism </h3> </div>
        <div className="pet-diagnosis1"> <h3>Symptoms:</h3> Weight loss, increased appetite, hyperactivity, vomiting, diarrhea <br/> <h3>Tests:</h3> Blood test for thyroid hormone (T4) </div>
        <div className="pet-lab-results1"> <h3>Lab Results</h3>
          <ul>
            <li>Presence of Malassezia pachydermatis.</li>
            <li>Confirmation of mixed yeast and bacterial infection.</li>
            <li>Negative systemic infection.</li>
          </ul>
        </div>
        <div className="pet-past-treatment1"> <h3>Past Treatments: </h3>
          <ul>
            <li>Ears cleaned with vetinary ear cleanser.</li>
            <li>Topical antibiotics.</li>
            <li>Ear drops.</li>
          </ul>
        </div>
        <div className="pet-prescriptions"> <h3> Prescriptions: </h3>
          <ul>
            <li>Ear cleanser.</li>
            <li>Anti-inflammatory drops to the ear.</li>
            <li>Otic drops twice daily.</li>
          </ul>
        </div>
      </div>
    </div>
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="structured-view">
      <div className="structured-view-card-carousel"> 
        <div className="structured-view-title"> <h1>Patient Records</h1> <hr/> </div>
        <div className="structured-view-nav">
          <ul>
            <li> <Link to="/structured-view">Dogs</Link> </li>
            <li> <Link to="/cat">Cats</Link> </li>
            <li> <Link to="/fish">Fish</Link> </li>
            <li> <Link to="/other">Other</Link> </li>
          </ul>
        </div>
        <div className="structured-view-card-container">
          {cards[activeIndex]}
        </div>
        <div className="nav-arrows">
          <ArrowLeft className="nav-arrows" onClick={handlePrev} size={50}/> 
          <ArrowRight className="nav-arrows" onClick={handleNext} size={50}/>
        </div>
        <div className="return-btn">
          <a href="/dashboard/veterinarian">Back to Dashboard</a>
        </div>
      </div>
    </div>
  )
}

export default Cat;
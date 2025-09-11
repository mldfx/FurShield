import "./StructuredView.css"
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from "react";
import fishImg1 from "../../assets/images/fish1.jpeg"
import fishImg2 from "../../assets/images/fish2.jpeg"
import fishImg3 from "../../assets/images/fish3.jpeg"
import fishImg4 from "../../assets/images/fish4.jpeg"
import fishImg5 from "../../assets/images/fish5.jpeg"

const Fish = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = [
    <div className="structured-view-card">
      <div className="fish-img1"> <img src={fishImg1} alt="pet1" className="fish-img1"/> </div>
      <div className="pet-log-details1">
        <div className="pet1"> <h3> Bubbles the Betta (Siamese Fighting Fish) </h3> <hr/> </div>
        <div className="pet-report1"> <h3> Fin Rot </h3> </div>
        <div className="pet-diagnosis1"> <h3>Symptoms:</h3> Ragged fins, discoloration, lethargy. <br/> <h3>Tests:</h3> Water quality test (ammonia/nitrites), microscopic exam of fin tissue </div>
        <div className="pet-lab-results1"> <h3>Lab Results</h3>
          <ul>
            <li>Elevated ammonia/nitrites.</li>
            <li>Presence of bacterial colonies.</li>
            <li>Sensitivity to broad-spectrum antibiotics.</li>
          </ul>
        </div>
        <div className="pet-past-treatment1"> <h3>Past Treatments: </h3>
          <ul>
            <li>Water changes, salt baths.</li>
            <li>Removal of sharp tank objects.</li>
            <li>Isolated tank for recovery.</li>
          </ul>
        </div>
        <div className="pet-prescriptions"> <h3> Prescriptions: </h3>
          <ul>
            <li>Antibiotic bath.</li>
            <li>Aquarium salt.</li>
            <li>Stress coat conditioner.</li>
          </ul>
        </div>
      </div>
    </div>, 
    <div className="structured-view-card">
      <div className="pet-img2"> <img src={fishImg2} alt="pet2" className="pet-img2"/> </div>
      <div className="pet-log-details1">
        <div className="pet1"> <h3> Goldie the Goldfish </h3> <hr/> </div>
        <div className="pet-report1"> <h3> Ichthyophthirius multifiliis </h3> </div>
        <div className="pet-diagnosis1"> <h3>Symptoms:</h3> White cysts on skin, scratching against surfaces, rapid gill movement. <br/> <h3>Tests:</h3> Skin scrape under microscope </div>
        <div className="pet-lab-results1"> <h3>Lab Results</h3>
          <ul>
            <li>Ich protozoa visible.</li>
            <li>Cyst formation.</li>
            <li>Low temperature.</li>
          </ul>
        </div>
        <div className="pet-past-treatment1"> <h3>Past Treatments: </h3>
          <ul>
            <li>Gradual increase of tank temperature.</li>
            <li>Tank-wide parasite treatment.</li>
          </ul>
        </div>
        <div className="pet-prescriptions"> <h3> Prescriptions: </h3>
          <ul>
            <li>Formalin–Malachite Green combo.</li>
            <li>Copper sulfate treatment</li>
            <li> Controlled doses of aquarium salt.</li>
          </ul>
        </div>
      </div>
    </div>,
    <div className="structured-view-card">
      <div className="fish-img3"> <img src={fishImg3} alt="pet3" className="fish-img3"/> </div>
      <div className="pet-log-details1">
        <div className="pet1"> <h3> Stripe the Clownfish </h3> <hr/> </div>
        <div className="pet-report1"> <h3> Marine Velvet </h3> </div>
        <div className="pet-diagnosis1"> <h3>Symptoms:</h3> Fine golden dust on skin, rapid breathing, clamped fins. <br/> <h3>Tests:</h3> Gill scraping with microscope. </div>
        <div className="pet-lab-results1"> <h3>Lab Results</h3>
          <ul>
            <li>Presence of Amyloodinium ocellatum.</li>
            <li>Signs of oxygen deprivation.</li>
            <li>Stable pH but parasite load visible.</li>
          </ul>
        </div>
        <div className="pet-past-treatment1"> <h3>Past Treatments: </h3>
          <ul>
            <li>Freshwater dips.</li>
            <li>Quarantine tank setup.</li>
            <li>UV sterilizer in main aquarium.</li>
          </ul>
        </div>
        <div className="pet-prescriptions"> <h3> Prescriptions: </h3>
          <ul>
            <li>Copper-based medications.</li>
            <li>Chloroquine phosphate treatment.</li>
            <li>Vitamin-enriched food.</li>
          </ul>
        </div>
      </div>
    </div>,
    <div className="structured-view-card">
      <div className="fish-img4"> <img src={fishImg4} alt="pet4" className="fish-img4"/> </div>
      <div className="pet-log-details1">
        <div className="pet1"> <h3> Shadow the Koi </h3> <hr/> </div>
        <div className="pet-report1"> <h3> Koi Herpesvirus </h3> </div>
        <div className="pet-diagnosis1"> <h3>Symptoms:</h3> Sunken eyes, gill necrosis, lethargy. <br/> <h3>Tests:</h3> PCR test for KHV. </div>
        <div className="pet-lab-results1"> <h3>Lab Results</h3>
          <ul>
            <li>Positive for KHV.</li>
            <li>Necrotic tissue.</li>
            <li>Normal parameters.</li>
          </ul>
        </div>
        <div className="pet-past-treatment1"> <h3>Past Treatments: </h3>
          <ul>
            <li>Quarantine with controlled heating.</li>
            <li>Supportive oxygen therapy.</li>
            <li>Removal of sick fish from pond.</li>
          </ul>
        </div>
        <div className="pet-prescriptions"> <h3> Prescriptions: </h3>
          <ul>
            <li>Immune-boosting supplements.</li>
            <li>Secondary infection antibiotics.</li>
          </ul>
        </div>
      </div>
    </div>,
    <div className="structured-view-card">
      <div className="pet-img5"> <img src={fishImg5} alt="pet5" className="pet-img5"/> </div>
      <div className="pet-log-details1">
        <div className="pet1"> <h3> Coral the Guppy </h3> <hr/> </div>
        <div className="pet-report1"> <h3> Columnaris (Flexibacter infection) </h3> </div>
        <div className="pet-diagnosis1"> <h3>Symptoms:</h3> White cotton-like patches, frayed fins, ulcers. <br/> <h3>Tests:</h3> Gill swab </div>
        <div className="pet-lab-results1"> <h3>Lab Results</h3>
          <ul>
            <li>Flavobacterium columnare identified.</li>
            <li>Low oxygen, high organic matter.</li>
            <li>Rod-shaped bacteria observed.</li>
          </ul>
        </div>
        <div className="pet-past-treatment1"> <h3>Past Treatments: </h3>
          <ul>
            <li>Increased aeration.</li>
            <li>Quarantine tank treatment.</li>
            <li>Salt bath therapy.</li>
          </ul>
        </div>
        <div className="pet-prescriptions"> <h3> Prescriptions: </h3>
          <ul>
            <li>Kanamycin bath.</li>
            <li>Medicated fish food.</li>
            <li>Aquarium salt.</li>
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

export default Fish;
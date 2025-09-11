import "./StructuredView.css"
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from "react";
import otherImg1 from "../../assets/images/other1.jpeg"
import otherImg2 from "../../assets/images/other2.jpeg"
import otherImg3 from "../../assets/images/other3.jpeg"
import otherImg4 from "../../assets/images/other4.jpeg"
import otherImg5 from "../../assets/images/other5.jpeg"

const Other = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = [
    <div className="structured-view-card">
      <div className="pet-img1"> <img src={otherImg1} alt="pet1" className="pet-img1"/> </div>
      <div className="pet-log-details1">
        <div className="pet1"> <h3> Kiwi the Parakeet </h3> <hr/> </div>
        <div className="pet-report1"> <h3> Psittacosis (Chlamydiosis) </h3> </div>
        <div className="pet-diagnosis1"> <h3>Symptoms:</h3> Nasal discharge, green droppings, ruffled feathers, lethargy. <br/> <h3>Tests:</h3> PCR test for Chlamydia psittaci. </div>
        <div className="pet-lab-results1"> <h3>Lab Results</h3>
          <ul>
            <li>Positive for Chlamydia psittaci.</li>
            <li>Elevated white blood cell count.</li>
            <li>Bacterial inclusions.</li>
          </ul>
        </div>
        <div className="pet-past-treatment1"> <h3>Past Treatments: </h3>
          <ul>
            <li>Quarantine and strict hygiene measures.</li>
            <li>Supportive fluids and warmth.</li>
            <li>Nutritional supplements.</li>
          </ul>
        </div>
        <div className="pet-prescriptions"> <h3> Prescriptions: </h3>
          <ul>
            <li>Probiotics for gut balance.</li>
            <li>Doxycycline</li>
            <li>Probiotics for gut balance</li>
          </ul>
        </div>
      </div>
    </div>,
    <div className="structured-view-card">
      <div className="other-img2"> <img src={otherImg2} alt="pet2" className="other-img2"/> </div>
      <div className="pet-log-details1">
        <div className="pet1"> <h3> Mango the Parrot </h3> <hr/> </div>
        <div className="pet-report1"> <h3> Aspergillosis </h3> </div>
        <div className="pet-diagnosis1"> <h3>Symptoms:</h3> Wheezing, open-mouth breathing, tail bobbing, weight loss. <br/> <h3>Tests:</h3> Endoscopy </div>
        <div className="pet-lab-results1"> <h3>Lab Results</h3>
          <ul>
            <li>Thickened air sac lining.</li>
            <li>Aspergillus fumigatus growth.</li>
            <li>Elevated WBC, low protein.</li>
          </ul>
        </div>
        <div className="pet-past-treatment1"> <h3>Past Treatments: </h3>
          <ul>
            <li>Improved ventilation and cage hygiene.</li>
            <li>Oxygen support in avian ICU.</li>
            <li>Nebulization therapy.</li>
          </ul>
        </div>
        <div className="pet-prescriptions"> <h3> Prescriptions: </h3>
          <ul>
            <li>Antifungals.</li>
            <li>Nebulized Amphotericin B</li>
            <li>Nutritional support</li>
          </ul>
        </div>
      </div>
    </div>,
    <div className="structured-view-card">
      <div className="other-img3"> <img src={otherImg3} alt="pet3" className="other-img3"/> </div>
      <div className="pet-log-details1">
        <div className="pet1"> <h3> Thumper the Rabbit </h3> <hr/> </div>
        <div className="pet-report1"> <h3> Rabbit Hemorrhagic Disease Virus </h3> </div>
        <div className="pet-diagnosis1"> <h3>Symptoms:</h3> Fever, lethargy, difficulty breathing, sudden death in severe cases. <br/> <h3>Tests:</h3> PCR blood test, liver biopsy (post-mortem). </div>
        <div className="pet-lab-results1"> <h3>Lab Results</h3>
          <ul>
            <li>Positive for RHDV.</li>
            <li>Low platelets, abnormal clotting.</li>
            <li>Enlarged, hemorrhagic liver.</li>
          </ul>
        </div>
        <div className="pet-past-treatment1"> <h3>Past Treatments: </h3>
          <ul>
            <li>Isolation from other rabbits.</li>
            <li>Fluid therapy.</li>
            <li>Oxygen support.</li>
          </ul>
        </div>
        <div className="pet-prescriptions"> <h3> Prescriptions: </h3>
          <ul>
            <li>Pain relievers</li>
            <li>Vaccination for prevention</li>
          </ul>
        </div>
      </div>
    </div>,
    <div className="structured-view-card">
      <div className="other-img4"> <img src={otherImg4} alt="pet4" className="other-img4"/> </div>
      <div className="pet-log-details1">
        <div className="pet1"> <h3> Coco the Syrian Hamster </h3> <hr/> </div>
        <div className="pet-report1"> <h3> Wet Tail (Proliferative Ileitis) </h3> </div>
        <div className="pet-diagnosis1"> <h3>Symptoms:</h3> Severe diarrhea, wet/soiled tail area, lethargy, weight loss, hunched posture. <br/> <h3>Tests:</h3> Fecal culture. </div>
        <div className="pet-lab-results1"> <h3>Lab Results</h3>
          <ul>
            <li>Positive for Lawsonia intracellularis.</li>
            <li>Dehydration signs.</li>
            <li>Intestinal bacteria overgrowth.</li>
          </ul>
        </div>
        <div className="pet-past-treatment1"> <h3>Past Treatments: </h3>
          <ul>
            <li>Fluid therapy.</li>
            <li>Strict cage sanitation and bedding changes.</li>
            <li>Hand-feeding with recovery formula.</li>
          </ul>
        </div>
        <div className="pet-prescriptions"> <h3> Prescriptions: </h3>
          <ul>
            <li>Antibiotics.</li>
            <li>Probiotics for gut flora restoration.</li>
            <li>Anti-diarrheal supportive care.</li>
          </ul>
        </div>
      </div>
    </div>,
    <div className="structured-view-card">
      <div className="other-img5"> <img src={otherImg5} alt="pet5" className="other-img5"/> </div>
      <div className="pet-log-details1">
        <div className="pet1"> <h3> Nibbles the Guinea Pig </h3> <hr/> </div>
        <div className="pet-report1"> <h3> Scurvy (Vitamin C Deficiency) </h3> </div>
        <div className="pet-diagnosis1"> <h3>Symptoms:</h3> Swollen joints, poor coat, lethargy, loss of appetite. <br/> <h3>Tests:</h3> Blood vitamin C levels test and physical exam.</div>
        <div className="pet-lab-results1"> <h3>Lab Results</h3>
          <ul>
            <li>Low plasma vitamin C.</li>
            <li>Weak bones, mild fractures.</li>
            <li>Mild anemia.</li>
          </ul>
        </div>
        <div className="pet-past-treatment1"> <h3>Past Treatments: </h3>
          <ul>
            <li>Fresh fruits/vegetables supplementation.</li>
            <li>Vitamin C–fortified pellets.</li>
            <li>Assisted syringe-feeding.</li>
          </ul>
        </div>
        <div className="pet-prescriptions"> <h3> Prescriptions: </h3>
          <ul>
            <li>Oral Vitamin C.</li>
            <li>Pain relievers</li>
            <li>Nutritional support formula</li>
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

export default Other;
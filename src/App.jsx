import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PetOwnerDashboard from "./pages/PetOwnerDashboard";
import VeterinarianDashboard from "./pages/VeterinarianDashboard";
import ShelterDashboard from "./pages/ShelterDashboard";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FeedbackPage from "./pages/FeedbackPage";
import DocumentUpload from "./components/petowner/DocumentUpload";
import HealthTimeline from "./components/petowner/HealthTimeline";
import HealthRecords from "./components/petowner/HealthRecords";
import ProductCatalog from "./pages/ProductCatalog";
import MyPets from "./components/petowner/Mypet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard/pet-owner" element={<PetOwnerDashboard />} />
        <Route path="/dashboard/veterinarian" element={<VeterinarianDashboard />} />
        <Route path="/dashboard/shelter" element={<ShelterDashboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/dashboard/health-records" element={<HealthRecords />} />
        <Route path="/dashboard/health-timeline" element={<HealthTimeline />} />
        <Route path="/dashboard/document-upload" element={<DocumentUpload />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/mypet" element={<MyPets />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;

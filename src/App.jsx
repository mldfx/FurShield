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
import "./App.css";
import TreatmentLogs from "./components/medical/TreatmentLogs";
import StructuredView from "./components/medical/StructuredView";
import Cat from "./components/medical/cat";
import Fish from "./components/medical/fish";
import Other from "./components/medical/other";
import ProductCatalog from "./pages/ProductCatalog";
import HealthRecords from "./components/petowner/HealthRecords";
import HealthTimeline from "./components/petowner/HealthTimeline";
import DocumentUpload from "./components/petowner/DocumentUpload";
import InsuranceManagement from "./components/petowner/InsuranceManagement";
import CareOptions from "./components/care/CareOptions";

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
        <Route path="/treatment-log" element={<TreatmentLogs />} />
        <Route path="/structured-view" element={<StructuredView />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/fish" element={<Fish />} />
        <Route path="/other" element={<Other />} />
        <Route path="/catalog" element={<ProductCatalog />} />
        <Route path="/dashboard/health-records" element={<HealthRecords />} />
        <Route path="/dashboard/health-timeline" element={<HealthTimeline />} />
        <Route path="/dashboard/document-upload" element={<DocumentUpload />} />
        <Route path="/dashboard/insurance-management" element={<InsuranceManagement />} />
        <Route path="/dashboard/pet-owner" element={<PetOwnerDashboard />} />
        <Route path="/dashboard/care-resources" element={<CareOptions />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;

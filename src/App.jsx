import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

/* Service Pages */
import GroundMedicalTransport from "./pages/services/GroundMedicalTransport";
import AirAmbulance from "./pages/services/AirAmbulance";
import LongDistanceTransfer from "./pages/services/LongDistanceTransfer";
import InsuranceAssistance from "./pages/services/InsuranceAssistance";

function App() {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />

      {/* Services Pages */}
      <Route
        path="/services/ground-medical-transport"
        element={<GroundMedicalTransport />}
      />
      <Route
        path="/services/air-ambulance"
        element={<AirAmbulance />}
      />
      <Route
        path="/services/long-distance-transfer"
        element={<LongDistanceTransfer />}
      />
      <Route
        path="/services/insurance-assistance"
        element={<InsuranceAssistance />}
      />
    </Routes>
  );
}

export default App;

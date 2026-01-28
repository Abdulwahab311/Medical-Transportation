import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

/* Protected Routes */
import ProtectedRoute from "./components/auth/ProtectedRoute";
import RoleRoute from "./components/auth/RoleRoute";
/* Dashboard Pages */
import UserDashboard from "./pages/dashboard/UserDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import DriverDashboard from "./pages/dashboard/DriverDashboard"; 
/*profile*/
import Profile from "./pages/Profile";

/* Main Pages */
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CaregiversPage from "./pages/caregivers";
import ContactUsPage from "./pages/ContactUs";
import HowItWorksPage from "./pages/HowItWorks";

/* Booking Page */
import BookingPage from "./pages/Booking";

/* Service Pages */
import GroundMedicalTransport from "./pages/services/GroundMedicalTransport";
import AirAmbulance from "./pages/services/AirAmbulance";
import LongDistanceTransfer from "./pages/services/LongDistanceTransfer";
import InsuranceAssistance from "./pages/services/InsuranceAssistance";

/* Auth Pages */
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/caregivers" element={<CaregiversPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />

        {/* 🔐 Booking Page (USER ONLY) */}
        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["user"]}>
                <BookingPage />
              </RoleRoute>
            </ProtectedRoute>
          }
        />



  {/* 🔐 Dashboards */}
  <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["user"]}>
                <UserDashboard />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/driver-dashboard"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRoles={["driver"]}>
                <DriverDashboard />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
{/* 🔐 Profile Page (Any Authenticated User) */}
<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>



        {/* Services Pages */}
        <Route path="/services/ground-medical-transport" element={<GroundMedicalTransport />} />
        <Route path="/services/air-ambulance" element={<AirAmbulance />} />
        <Route path="/services/long-distance-transfer" element={<LongDistanceTransfer />} />
        <Route path="/services/insurance-assistance" element={<InsuranceAssistance />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;

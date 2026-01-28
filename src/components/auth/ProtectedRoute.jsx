import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  // Show nothing (or a loader) while auth state is loading
  if (loading) return null;

  // If authenticated, render children; otherwise redirect to login
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

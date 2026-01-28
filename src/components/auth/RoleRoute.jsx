import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function RoleRoute({ allowedRoles, children }) {
  const { role } = useAuth();

  // If user's role is in allowedRoles, render children; else redirect home
  return allowedRoles.includes(role) ? children : <Navigate to="/" replace />;
}

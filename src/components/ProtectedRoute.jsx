import { Navigate } from "react-router-dom"
import { useAuth } from "../context/Authcontext"

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth()
  return user ? children : <Navigate to="/auth" />
}

export default ProtectedRoute
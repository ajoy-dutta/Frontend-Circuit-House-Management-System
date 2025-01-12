import { Navigate } from "react-router-dom";
import { useUser } from "./UserProvider"; // Adjust based on the correct path

const ProtectedRoute = ({ children }) => {
  const { user } = useUser(); // Get user context


console.log(user)
  if (!user) {
    return <Navigate to="/" replace />; // Redirect to login if user is not authenticated
  }

  return children; // Render the protected content if the user is authenticated
};

export default ProtectedRoute;

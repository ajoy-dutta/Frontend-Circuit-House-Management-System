import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../BaseURL";

// Create a Context for user data
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};

// UserProvider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);  // Start with loading true
  const [error, setError] = useState(null);

  const token = localStorage.getItem("accessToken");

  const fetchUserData = async () => {
    if (!token) {
      setError("No token found. Please log in.");
      setUser(null);
      setLoading(false);  // Stop loading
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${baseurl}/user/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setUser(data);  // Set user data
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to fetch user data.");
      setUser(null);
    } finally {
      setLoading(false);  // Stop loading after fetch completes
    }
  };

  // Fetch user data when the page loads or token changes
  useEffect(() => {
    if (token) {
      fetchUserData();  // Automatically fetch user data on page load if token exists
    } else {
      setLoading(false);  // Stop loading if no token exists
    }
  }, [token]);  // Dependency on token, will trigger if token changes

  // Handle Sign Out
  const signOut = () => {
    localStorage.removeItem("accessToken");  // Remove token from localStorage
    setUser(null);  // Clear user state
  };

  return (
    <UserContext.Provider value={{ user, loading, error, fetchUserData, signOut }}>
      {loading ? <div>Loading...</div> : children} {/* Render a loading message */}
    </UserContext.Provider>
  );
};

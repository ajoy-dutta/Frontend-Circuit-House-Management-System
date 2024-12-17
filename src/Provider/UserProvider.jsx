import { createContext, useState, useContext, useEffect } from "react";
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("accessToken");

  const fetchUserData = async () => {
    if (!token) {
      setError("No token found. Please log in.");
      setUser(null);
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
      setUser(data);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to fetch user data.");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Expose refreshUser method to allow manual fetching of user data
  const refreshUser = () => {
    fetchUserData();
  };

  // Handle Sign Out
  const signOut = () => {
    localStorage.removeItem("accessToken"); // Remove token from localStorage
    setUser(null); // Reset user state
  };

  // Fetch user data on initial load if token exists
  useEffect(() => {
    if (token) fetchUserData();
  }, [token]);

  return (
    <UserContext.Provider value={{ user, loading, error, refreshUser,signOut }}>
      {children}
    </UserContext.Provider>
  );
};

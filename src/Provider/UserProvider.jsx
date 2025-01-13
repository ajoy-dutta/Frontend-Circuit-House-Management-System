import { createContext, useState, useContext, useEffect } from "react";
import { baseurl } from "../BaseURL";

const UserContext = createContext();

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


  const refreshUser = () => {
    fetchUserData();
  };

   
   useEffect(() => {
    if (token) fetchUserData();
  }, [token]);


  // Handle Sign Out
  const signOut = () => {
    localStorage.removeItem("accessToken");  // Remove token from localStorage
    setUser(null);  // Clear user state
  };

  return (
    <UserContext.Provider value={{ user, loading, error, refreshUser, signOut }}>
      {loading ? <div>Loading...</div> : children} 
    </UserContext.Provider>
  );
};

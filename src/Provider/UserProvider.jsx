import { createContext, useState, useContext, useEffect } from "react";
import { baseurl } from "../BaseURL";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();


export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null; // Retrieve user data from localStorage
  });  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  const token = localStorage.getItem("accessToken");

  const fetchUserData = async () => {
    if (!token) {
      setError("No token found. Please log in.");
      setUser(null);
      setLoading(false)
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
      localStorage.setItem("user", JSON.stringify(data)); // Save user data to localStorage

    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to fetch user data.");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };


  const refreshUser = () => {
    fetchUserData();
  };

  // Handle Sign Out
  const signOut = () => {
    localStorage.removeItem("accessToken"); 
    localStorage.removeItem("user"); 
    setUser(null);
    
  };


  useEffect(() => {
    if (token && !user) { // Only fetch if token exists and user is not set
      fetchUserData();
    }
  }, [token, user]);

  return (
    <UserContext.Provider value={{ user, loading, error, refreshUser, signOut }}>
       {loading ? <div>Loading...</div> : children} 
    </UserContext.Provider>
  );
};
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ setShowLoginForm }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); 

    console.log("Button clicked");

    try {
      setLoading(true); // Set loading to true to show the button is being processed
      const response = await axios.post("http://127.0.0.1:8000/token/", formData);
      console.log("Response received:", response); 

      if (response.data.access) { 
        alert("Login Successful!");
        localStorage.setItem("token", response.data.access); 

        // Reset form data after successful login
        setFormData({
          username: "",
          password: "",
        });

      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Invalid username or password."); // Set an error message
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="p-4">
        <h2 className="text-center font-semibold text-lg mb-4">Sign In</h2>

        {errorMessage && (
          <p className="text-red-500 text-sm text-center">{errorMessage}</p>
        )}

        <div className="mb-4">
          <label htmlFor="username" className="block font-semibold mb-2 text-sm">
            Username:
          </label>
          <input
            id="username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-1 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold mb-2 text-sm">
            Password:
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-1 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-teal-600 to-blue-700 text-white text-sm font-semibold py-2 w-full rounded"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign in"}
        </button>
      </form>

      <p className="text-sm font-semibold p-4">
        Do not have an account?{" "}
        <Link to="/register" onClick={() => setShowLoginForm(false)} className="text-blue-700 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;

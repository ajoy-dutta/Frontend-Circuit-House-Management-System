import axios from 'axios';
import { useState } from 'react';
import Registration from './Registration';

const Login = ({ setShowLoginForm }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showRegisterForm, setShowRegisterForm] = useState(false); // No need for `let` here, `useState` already returns the setter.

//   const toggleRegisterForm = () => {
//     setShowLoginForm(false); // Hide the login form
//     setShowRegisterForm(true); // Show the registration form
//     console.log("RF",showRegisterForm)
//   };


  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error message

    try {
      const response = await axios.post("http://127.0.0.1:8000/token/", formData);

      // Assuming the API returns a success response and token
      if (response.data.token) {
        alert("Login Successful!");
        localStorage.setItem("token", response.data.token); // Store token in localStorage
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Invalid email or password."); // Set an error message
    }
  };

  return (
    <div className="absolute  p-4 bg-gradient-to-r from-blue-300 to-blue-400 shadow-lg mb-4 rounded-lg">
      <form onSubmit={handleSubmit} className="p-4">
        <h2 className='text-center font-semibold text-lg'>Sign In</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className='mb-4'>
          <label className="block font-semibold mb-2 text-sm">Username:</label>
          <input
            type="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-1 border rounded"
            required
          />
        </div>
        <div className='mb-4'>
          <label className="block font-semibold mb-2 text-sm">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-1 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-gradient-to-r from-teal-600 to-blue-700 text-white text-sm font-semibold py-2 w-full rounded">Sign In</button>
      </form>

      <p className='text-sm font-semibold p-4'>
            <span onClick ={() => { 
        setShowLoginForm(false);
        setShowRegisterForm(true); 
        }} className='text-blue-700'>Sign Up</span>
      </p>

      {showRegisterForm && (
        <div className="absolute top-full mt-2 p-4 bg-gradient-to-r from-blue-300 to-blue-400 shadow-lg z-10 w-80">
          <Registration />
        </div>
      )}
    </div>
  );
};

export default Login;

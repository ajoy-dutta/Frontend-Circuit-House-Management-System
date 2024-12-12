import axios from 'axios';
import { useState } from 'react';

const Registration = () => {
//   const [showForm, setShowForm] = useState(true); // Show form by default
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password:"",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/register/", formData);

      // Update the registration list with the newly added user
      setShowForm(false);
      alert("Registration Successful");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="registration-container">
        <form onSubmit={handleSubmit} className="p-4">
        <h2 className="text-center font-semibold text-lg">Register</h2>
      
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-sm">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-1 border rounded"
            required
          />
        </div>
      
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-sm">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-1 border rounded"
            required
          />
        </div>
      
        <div className="mb-4">
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

        <div className="mb-4">
          <label className="block font-semibold mb-2 text-sm">Confirm Password:</label>
          <input
            type="password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            className="w-full px-4 py-1 border rounded"
            required
          />
        </div>
      
        <button
          type="submit"
          className="bg-gradient-to-r from-teal-600 to-blue-700 text-white text-sm font-semibold py-2 w-full rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;

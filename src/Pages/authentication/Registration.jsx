import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../../BaseURL"

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    profile_picture: null,
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); 


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${baseurl}/register/`, formData);
      alert("Registration Successful");

      // Reset form data after successful login
      setFormData({
        username: "",
        email:"",
        password: "",
        confirm_password: "",
        profile_picture: "",
      });

      navigate("/");

    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 p-6 shadow-xl mb-4 rounded-lg bg-teal-50"
      >
        <h2 className="text-center font-semibold text-lg mb-4">Sign Up</h2>

        {errorMessage && (
          <p className="text-red-500 text-sm text-center">{errorMessage}</p>
        )}

        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-2 text-sm">
            Name:
          </label>
          <input
            id="name"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-1 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-2 text-sm">
            Email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
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

        <div className="mb-4">
          <label
            htmlFor="confirm_password"
            className="block font-semibold mb-2 text-sm"
          >
            Confirm Password:
          </label>
          <input
            id="confirm_password"
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
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Registration;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../../Components/Axios";

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


  // Handle text and file changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value, // Handle file input separately
    }));
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation for passwords
    if (formData.password !== formData.confirm_password) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    setLoading(true);
    setErrorMessage(""); // Clear any previous errors

    // // Prepare form data for submission
      const form = new FormData();
      form.append("username", formData.username);
      form.append("email", formData.email);
      form.append("password", formData.password);
      form.append("confirm_password", formData.confirm_password);
      if (formData.profile_picture) {
      form.append("profile_picture", formData.profile_picture);
      }
    

    try {

        const response = await AxiosInstance.post('/register/', form );

      alert("Registration Successful");

      // Reset form data
      setFormData({
        username: "",   
        email: "",
        password: "",
        confirm_password: "",
        profile_picture: null,
      });

      navigate("/"); // Navigate to the home page
    } catch (error) {
      console.error("Error during registration:", error.response?.data || error.message);
      setErrorMessage(
        error.response?.data?.detail || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 p-6 shadow-xl rounded-lg bg-teal-50"
      >
        <h2 className="text-center font-semibold text-lg mb-4">Sign Up</h2>

        {errorMessage && (
          <p className="text-red-500 text-sm text-center mb-4">{errorMessage}</p>
        )}

        {/* Username */}
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
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        {/* Email */}
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
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        {/* Password */}
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
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        {/* Confirm Password */}
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
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>



        <div className="mb-4">
          <label
            htmlFor="profile_picture"
            className="block font-semibold mb-2 text-sm"
          >
            Profile Picture (optional):
          </label>
          <input
            id="profile_picture"
            type="file"
            name="profile_picture"
            // value={formData.profile_picture}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            accept="image/*"
          />
        </div>

        {/* Submit Button */}
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

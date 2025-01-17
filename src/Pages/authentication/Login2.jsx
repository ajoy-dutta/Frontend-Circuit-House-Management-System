/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from "../../Provider/UserProvider";
import AxiosInstance from '../../Components/Axios';
import { MdOutlineClose } from "react-icons/md";


const LoginDrop = ({ setShowDropLoginForm }) => {
  const navigate = useNavigate();
  const { refreshUser } = useUser();

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

  const form = new FormData();
  form.append("username", formData.username);
  form.append("password", formData.password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    console.log("Button clicked");

    try {
      setLoading(true);
      const response = await AxiosInstance.post('/token/', form);

      if (response.data.access) {

        localStorage.setItem("accessToken", response.data.access);


        // Reset form data and close login form
        setFormData({
          username: "",
          password: "",
        });

        refreshUser();
        
        navigate("/room"); // Redirect to home page
        setShowDropLoginForm(false);
        alert("Login Successful!");

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
      <div className='flex items-end justify-end '>
      <div className=' text-red-500 text-xl font-bold text-center  hover:text-black px-4 py-2' onClick={() => setShowDropLoginForm(false)}><MdOutlineClose /></div>
      </div>
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
        <Link to="/registers" onClick={() => setShowDropLoginForm(false)} className="text-blue-700 hover:underline">
          Sign Up
        </Link>
      </p>
      <p className="text-blue-700 hover:text-blue-800 font-semibold text-sm p-4">
        Forget Password ?{" "}
        <Link to="/forgot-password" className="text-blue-700 hover:underline">
          Reset Here
      </Link>
    </p>

    
    </div>
  );
};

export default LoginDrop;
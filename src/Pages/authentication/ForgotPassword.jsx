import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../../BaseURL";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseurl}/forgot-password/`, { username, email });
      setMessage(response.data.message);
    } catch (error) {
      setError(error.response.data.detail || "An error occurred.");
    }
  };

  return (
    <div className=" mini-h-screen mb-32 flex items-center justify-center">
      <div className=" flex flex-col items-center bg-teal-50 p-4 mb-4 mt-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="p-2 border border-gray-300 rounded w-full mb-4"
            required
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-2 border border-gray-300 rounded w-full mb-4"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full mb-4">
            Send Reset Link
        </button>
        </form>
        {message && <p className="text-green-500">{message}</p>}
        {error && <p className="text-red-500">{error}</p>}
        <p className="text-sm font-semibold p-4">
          Do not have an account?{" "}
          <Link to="/register" className="text-blue-700 hover:underline">
            Sign Up
        </Link>
        </p>
        <p className="text-blue-700 hover:text-blue-800 font-semibold text-sm p-4">
          <Link to="/login">Back to Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;

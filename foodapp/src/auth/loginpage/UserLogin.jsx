import React from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <>
    
     <div className="flex justify-center items-center h-screen bg-gradient-to-r from-orange-400 to-red-400">
      
    <form
        onSubmit={""}
        className="bg-white shadow-lg rounded-2xl px-8 py-10 w-full max-w-md"
        >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        {/* Email */}
        <div className="flex flex-col mb-4">
          <label className="mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
        </div>

        {/* Password */}
        <div className="flex flex-col mb-2 relative">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            required
            placeholder="Enter your password"
            className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
     
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mb-4">
          <Link
            to="/forgot-password"
            className="text-sm text-orange-600 hover:underline"
            >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition"
          >
          Login
        </button>

        {/* Register Link */}
        <p className="text-center text-sm mt-4 text-gray-600">
          Don’t have an account?
          <Link to="/register" className="text-orange-600 hover:underline font-medium">
            Register
          </Link>
        </p>
      </form>
    </div>
            
    </>
  );
};
export default UserLogin;

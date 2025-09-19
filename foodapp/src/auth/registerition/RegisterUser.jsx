import React from "react";
import { Link } from "react-router-dom";
const RegisterUser = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-orange-400 to-red-400">
        <form className="bg-white shadow-lg rounded-2xl px-8 py-10 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Register
          </h2>

          {/* ------------Full Name */}
          <div className="flex flex-col mb-4">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter your full name"
              className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Email--------------------------------------- */}
          <div className="flex flex-col mb-4">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Password---- */}
          <div className="flex flex-col mb-4">
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

          {/* Confirm Password---- */}
          <div className="flex flex-col mb-6">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              required
              placeholder="Confirm your password"
              className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* --Register Button--- */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition"
          >
            Register
          </button>

          {/* Login Link---------- */}
          <p className="text-center text-sm mt-4 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-600 hover:underline font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default RegisterUser;

import React from "react";
import { Link } from "react-router-dom";

const RegisterUser = () => {
  return (
    <div className="flex h-screen w-full">
      {/* Left Section */}
           <h2 className="text-3xl font-bold text-center mb-8">Register</h2>

          {/* ===== Section 1: Inputs ===== */}
          <div className="w-1/2 bg-black flex justify-center items-center flex-col">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="px-4 py-3 border border-gray-600 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-400">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="px-4 py-3 border border-gray-600 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-500"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-400">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="Enter your password"
                className="px-4 py-3 border border-gray-600 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-500"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-400">
                Confirm Password
              </label>
              <input
                type="password"
                required
                placeholder="Confirm your password"
                className="px-4 py-3 border border-gray-600 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-500"
              />
            </div>
          </div>

      {/* Right Section */}
      <div className="w-1/2 bg-black flex justify-center items-center">
        <form className="bg-[#1c1c1c] shadow-lg rounded-2xl px-8 py-10 w-full max-w-md text-white flex flex-col justify-between">
          {/* Title */}

          {/* ===== Section 2: Button + Links ===== */}
          <div>
            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-[#8B0000] hover:bg-red-800 text-white py-3 rounded-lg font-semibold transition"
            >
              REGISTER
            </button>

            {/* Links */}
            <div className="flex justify-between mt-6 text-sm">
              <p className="text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-red-500 hover:underline font-medium"
                >
                  Login
                </Link>
              </p>
              <p>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-red-500 transition font-medium"
                >
                  Back to Home
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;

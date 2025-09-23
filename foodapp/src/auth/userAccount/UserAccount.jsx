import React from "react";
import { Link } from "react-router-dom";

const UserAccount = () => {
  return (
    <div className="flex justify-center items-center h-auto bg-black z-50 pt-25 pb-10">
      <div className="bg-[#1c1c1c] shadow-lg rounded-2xl px-10 py-12 w-full max-w-md text-center text-white">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6">Welcome 👋</h2>
        
        {/* Subtitle */}
        <p className="text-gray-400 mb-4">
          Please choose an option to continue
        </p>

        {/* Login Button */}
        <Link
          to="/login"
          className="block w-full bg-[#8B0000] hover:bg-red-800 text-white py-3 rounded-lg font-semibold transition mb-4"
        >
          LOGIN
        </Link>

        {/* Register Button */}
        <Link
          to="/register"
          className="block w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
        >
          REGISTER
        </Link>

        {/* Optional Back/Home Button */}
        <div className="mt-6">
          <Link
            to="/"
            className="text-sm text-gray-400 hover:text-red-500 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;

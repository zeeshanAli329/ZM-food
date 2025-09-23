import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const UserLogin = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[black] ">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl px-6 bg-[#1c1816] ">
       
          <Link to="/" className="flex text-[white] rounded-3xl border-2 border-[red] hover:bg-[red] cursor-pointer p-2 ">
            <FaArrowLeft />
          </Link>
      

        {/* Left Side - Image/GIF */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <img
            src="https://www.kfcpakistan.com/static/media/login-animation.857cb4f842a7a27eed63.gif"
            alt="Login Animation"
            className="w-80"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 text-white">
          <h1 className="text-3xl font-bold mb-6">Welcome!</h1>

          {/* Phone Number Input */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm mb-2">
              Phone Number (3XXXXXXXXX)
            </label>
            <div className="flex items-center bg-[#1c1c1c] rounded-lg px-3 py-2">
              <span className="text-lg font-semibold">+92</span>
              <input
                type="tel"
                placeholder="3XXXXXXXXX"
                className="ml-2 flex-1 bg-transparent outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Login Button */}
          <button className="w-full bg-[#8B0000] hover:bg-red-800 text-white py-3 rounded-lg font-semibold transition mb-4">
            LOGIN
          </button>

          {/* Google Login */}
          <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold flex justify-center items-center gap-2">
            <span className="bg-white text-red-600 px-2 py-1 rounded-full font-bold">
              G
            </span>
            LOGIN WITH GOOGLE
          </button>

          {/* Back Button */}
          <div className="absolute top-6 left-6">
            <Link
              to="/"
              className="w-10 h-10 flex justify-center items-center bg-red-600 rounded-full"
            >
              <span className="text-white text-xl">←</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;

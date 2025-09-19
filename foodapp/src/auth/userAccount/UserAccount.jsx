import React from "react";
import { Link } from "react-router-dom";

const UserAccount = () => {
  return (
    <>
  
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-orange-400 to-red-400">
          <div className="bg-white shadow-lg rounded-2xl px-10 py-12 w-full max-w-md text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Welcome 👋
            </h2>
            
            <p className="text-gray-600 mb-8">
              Please choose an option to continue
            </p>

            {/* Login Button */}
            <Link
              to="/login"
              className="block w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition mb-4 cursor-pointer"
            >
              Login
            </Link>

            {/* Register Button */}
            <Link
              to="/register"
              className="block w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition cursor-pointer"
            >
              Register
            </Link>
                      {/* <p className="text-right text-sm mt-4 text-gray-600">
                    
                        <Link to="/" className="text-orange-600 hover:underline font-medium">
                          Home
                        </Link>
                      </p> */}
          </div>
        </div>
  
           
    </>
  );
};

export default UserAccount;

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex w-full  text-white items-center justify-center  mt-20 ">
     

          <footer className="bg-[#1f1f1f] text-white py-6 w-[100%] mt-10 ">
            {/* Social Links */}
            <div className="lg:flex justify-center space-x-8 mb-6 hidden">
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-[#FC8A06]"
              >
                <FaFacebookF />
                <span className="font-semibold">FACEBOOK</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-[#FC8A06]"
              >
                <FaInstagram />
                <span className="font-semibold">INSTAGRAM</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-[#FC8A06]"
              >
                <FaPinterestP />
                <span className="font-semibold">PINTEREST</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-[#FC8A06]"
              >
                <FaYoutube />
                <span className="font-semibold">YOUTUBE</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-[#FC8A06]"
              >
                <FaEnvelope />
                <span className="font-semibold">EMAIL</span>
              </a>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mx-10"></div>


            {/* Back to Top */}
            <div className="mt-4 text-center text-[#FC8A06]">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center justify-center mx-auto space-x-2 text-[#FC8A06] hover:text-white transition cursor-pointer"
              >
                <span className="text-lg">↑</span>
                <span className="font-semibold text-sm">BACK TO TOP</span>
              </button>
            </div>
            <div className="flex flex-col items-center mt-6 gap-5">


            <h1 className="font-semibold text-[20px]">
              Subscribe to our Mailing List
            </h1>
            <div className="flex bg-white rounded-full gap-2  mb-20 ">
              <input
                className="flex-1 px-4 py-2 text-gray-700 rounded-l-full focus:outline-none"
                type="email"
                placeholder="Enter Your email"
                ></input>
              <button className="bg-[#FC8A06] cursor-pointer  text-white px-6 py-2 rounded-full">
                Join Now
              </button>
            </div>
                </div>
            {/* Copyright */}
            <div className="text-center text-gray-400 text-sm">
              <p>Copyright © 🆉🅼 2025. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
     
    </>
  );
};
export default Footer;

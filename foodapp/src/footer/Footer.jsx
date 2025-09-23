import React from "react";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white py-10 px-6 lg:px-20 w-full mt-10">
       <div className="flex flex-col items-center mb-6 md:mb-0 ">
          <h1 className="text-3xl font-bold text-red-600 mb-3">KFC</h1>
          <div className="flex space-x-4">
            <a href="#">
              <FaYoutube size={30} className="hover:text-red-500" />
            </a>
            <a href="#">
              <FaInstagram size={30} className="hover:text-pink-500" />
            </a>
            <a href="#">
              <FaFacebookF size={30} className="hover:text-blue-500" />
            </a>
          </div>
        </div>
      {/* Top Row: Logo + Social + Links + App Store */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 ">
        {/* Left Links */}
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 lg:gap-10 gap-3 mb-6 md:mb-0 ">
          <div className="space-y-3">
            <a href="#" className="block hover:text-[red]">
              About Us
            </a>
            <a href="#" className="block hover:text-[red]">
              Mitao Bhook
            </a>
            <a href="#" className="block hover:text-[red]">
              Mitao Bhook - Scholarship
            </a>
            <a href="#" className="block hover:text-[red]">
              Privacy Policy
            </a>
            <a href="#" className="block hover:text-[red]">
              Careers
            </a>
          </div>
          <div className="space-y-3">
            <a href="#" className="block hover:text-[red]">
              Contact Us
            </a>
            <a href="#" className="block hover:text-[red]">
              Store Locator
            </a>
            <a href="#" className="block hover:text-[red]">
              Track Order
            </a>
            <a href="#" className="block hover:text-[red]">
              Terms & Conditions
            </a>
          </div>
        </div>

      

        <div className="flex flex-col space-y-3 items-center md:items-end md:w-[20%]  w-[100%]">
          <img
            src="/images/app-store.png"
            alt="App Store"
            className="h-12 md:w-[90%] w-[76%]  lg:mr-2"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-12 w-full"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 border-t border-gray-700 pt-6">
        <p>2025 KFC. All rights reserved</p>
        <p className="mt-2 md:mt-0">
          <span className="text-red-500 font-semibold">Powered by </span>
          <a href="#" className="underline hover:text-white">
            SimpleX Technology Solutions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <nav className="w-full bg-[black] fixed top-0 z-40 shadow-md">
        <div className="max-w-[1450px] mx-auto flex items-center justify-between px-6  py-5">
          {/* Left Section */}
          <div className="flex items-center gap-6">
            {/* Hamburger + Logo */}
            <div className="md:flex lg:flex items-center lg:gap-3 md:gap-3 flex flex-row-reverse md:flex-row justify-between gap-30">
              <button
                className="text-white transition-transform duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={34} /> : <Menu size={34} />}
              </button>
              <Link to="/">
                <img
                  src="/images/kfc-logo.png"
                  alt="KFC"
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Delivery / Pickup */}
            <div className="hidden md:flex gap-3">
              <div className="flex items-center gap-2 px-5 h-[50px] rounded-md border border-red-500 bg-[#003161] cursor-pointer hover:bg-[#012046] transition">
                <img
                  src="https://www.kfcpakistan.com/static/media/Delivery.793adbaa710baf75ba78.png"
                  alt="Delivery"
                  className="h-6 w-auto"
                />
                <Link to="/" className="text-white font-semibold">
                  DELIVERY
                </Link>
              </div>

              <div className="flex items-center gap-2 px-5 h-[50px] rounded-md bg-[#003161] cursor-pointer hover:bg-[#012046] transition">
                <img
                  src="https://www.kfcpakistan.com/static/media/pickup.47bb874f83ea6acb5a47.png"
                  alt="Pickup"
                  className="h-6 w-auto"
                />
                <Link to="/menu" className="text-white font-semibold">
                  PICKUP
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex gap-8 text-white items-center">
            {/* Cart */}
            <div className="relative flex items-center">
              <Link to="/cart" className="px-4 py-2 rounded-full transition flex">
                <ShoppingCart className="w-7 h-7" />
              </Link>
              {cartItems.length > 0 && (
                <p className="absolute -top-[-2px] -right-[-12px] rounded-full px-1 h-[20px]  min-w-[18px] text-[12px] bg-red-600 text-white flex items-center justify-center z-50">
                  {cartItems.length}
                </p>
              )}
            </div>

            {/* Login-Button */}
            <Link to="/user-account">
              <button className="bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 transition flex items-center gap-2">
                LOGIN
              </button>
            </Link>
          </div>
        </div>

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform transition-transform duration-500 ease-in-out z-50 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img src="/images/kfc-logo.png" alt="KFC" className="h-8" />
            </Link>
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col px-6 py-6 space-y-5 text-lg font-semibold">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-red-500">
              Home
            </Link>
            <Link to="/menu" onClick={() => setIsMenuOpen(false)} className="hover:text-red-500">
              Menu
            </Link>
            <Link to="/cart" onClick={() => setIsMenuOpen(false)} className="hover:text-red-500">
              Cart
            </Link>
            <Link to="/user-account" onClick={() => setIsMenuOpen(false)}>
              <button className="bg-red-600 hover:bg-red-700 rounded-md py-2 px-4 transition">
                LOGIN
              </button>
            </Link>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

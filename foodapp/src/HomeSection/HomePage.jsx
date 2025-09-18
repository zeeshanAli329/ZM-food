import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "../header/NavBar";
import FetchApi from "../FetchApi";
import Cart from "../pages/cart-section/Cart";

const HomePage = () => {
  const { foodItems, loading } = FetchApi();

  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filterItems = foodItems.filter((item) =>
    item.strCategory.toLowerCase().includes(search.toLowerCase())
  );
  // ----------loading--------------
  if (loading) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <div className="bg-[#03081f] min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <NavBar />
      {/* Hero Section */}
      <section className="w-full mt-24 max-w-[1450px] px-6">
        <div
          className="bg-no-repeat bg-cover bg-center rounded-xl lg:h-[400px]  flex flex-row-reverse items-center justify-between p-6 lg:px-20"
          style={{ backgroundImage: `url("/images/bg-20.svg")` }}
        >
          {/* Left side */}
          <div className="flex flex-col gap-4 text-white max-w-[500px]">
            <h1 className="text-3xl font-bold leading-tight">
              Feast Your Senses,
            </h1>
            <h1 className="text-3xl font-bold text-[#FC8A06]">
              Fast and Fresh
            </h1>

            {/* Search */}
            <div className="hidden md:flex items-center mt-4 bg-white rounded-full overflow-hidden w-full lg:w-[450px] md:w-[450px] max-w-[350px]">
              <input
                placeholder="Search items..."
                type="text"
                className="flex-1 px-4 py-2 text-gray-700 rounded-l-full focus:outline-none"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowDropdown(true);
                }}
              />
              <button className="bg-[#FC8A06] text-white px-6 py-2 rounded-r-full">
                Search
              </button>
            </div>
          </div>

          {/* Right side image */}
          <div className="hidden md:block">
            <img
              src="/images/Original-pic-bg.svg"
              alt="Food"
              className="h-[300px] object-contain"
            />
          </div>
        </div>

        {/* Mobile/Table */}
        <div className="md:hidden mt-6 flex items-center bg-white rounded-full overflow-hidden w-full max-w-[350px] mx-auto">
          <input
            placeholder="Search items..."
            type="text"
            className="flex-1 px-4 py-2 text-gray-700 rounded-l-full focus:outline-none"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowDropdown(true);
            }}
          />
          <button className="bg-[#FC8A06] text-white px-6 py-2 rounded-r-full">
            Search
          </button>
        </div>
      </section>

      {/* Dropdown */}
      {showDropdown && search && (
        <div className="absolute lg:top-[375px] lg:left-[830px] md:top-[350px] md:left-[440px] top-[296px] left-[45px] bg-white text-black border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto w-[230px]">
          {filterItems.length > 0 ? (
            filterItems.map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSearch(item.strCategory);
                  setShowDropdown(false);
                }}
              >
                {item.strCategory}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No items found</div>
          )}
        </div>
      )}

      {/* Products  */}
      <section className="max-w-[1450px] w-full px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterItems.map((item, index) => (
            <Link
              to={`/product/${item.strCategory}`}
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item?.strCategoryThumb}
                alt={`${item.strCategory} image`}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <p className="font-bold text-lg text-[#fc8a06]">
                  {item.strCategory}
                </p>
                <p className="line-clamp-2 text-sm text-gray-600">
                  {item.strCategoryDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;

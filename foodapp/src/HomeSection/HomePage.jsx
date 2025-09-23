import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "../header/NavBar";
import FetchApi from "../FetchApi";
import Cart from "../pages/cart-section/Cart";
import { FaRegHeart } from "react-icons/fa";
import { addToCart } from "../reduxtookit-cart/CartSlice";
import Slider from "../pages/slider/Slider";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ItemAddToast from "../notification/toastsNotification/ItemAddToast";
import ImageSection from "../pages/main-sections/ImagesSection";

const HomePage = () => {
  const { foodItems, loading } = FetchApi();
  const dispatch = useDispatch();
  const { strCategory } = useParams();
  const [notification, setNotification] = useState(false);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.idCategory,
        name: product.strCategory,
        image: product.strCategoryThumb,
        price: 23.1,
      })
    );

    setNotification(true);

    setTimeout(() => {
      setNotification(false);
    }, 3000);
  };

  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filterItems = foodItems.filter((item) =>
    item.strCategory.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[black] min-h-screen h-auto flex flex-col items-center">
      {/* Hero Section */}

      <Slider interval={4000} heightClass="h-[500px]" />
      <div className="  py-8 flex flex-col  w-[87%]">
        <button class="bg-red-600 text-white font-bold  md:px-50 lg:px-40 px-20 py-1 block mx-auto mb-10">
          REORDER
        </button>
        <div className="flex">
          <h2 className="text-white font-extrabold text-4xl inline-block border-b-4 border-red-600">
            EXPLORE MENU
          </h2>
        </div>
      </div>

      <section className="w-full  max-w-[1450px] px-6">
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
          {filterItems.length > 0 &&
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
            ))}
        </div>
      )}
      {/* Products */}

      <section className="max-w-[1450px] w-full px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filterItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#1c1816] rounded-lg shadow hover:shadow-lg transition flex flex-col"
            >
              <Link to={`/product/${item.strCategory}`} className="block">
                <img
                  src={item?.strCategoryThumb}
                  alt={`${item.strCategory} image`}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <p className="font-bold text-lg text-white">
                    {item.strCategory}
                  </p>
                  <p className="line-clamp-2 text-sm text-white">
                    {item.strCategoryDescription}
                  </p>
                </div>
              </Link>

              <div className="p-4">
                <button
                  onClick={() => {
                    dispatch(
                      addToCart({
                        id: item.idCategory,
                        name: item.strCategory,
                        image: item.strCategoryThumb,
                        price: 23.1,
                      })
                    );
                    setNotification(true);
                    setTimeout(() => setNotification(false), 3000);
                  }}
                  className="w-full bg-[#e7000b] text-white font-semibold px-2 py-2 rounded-md  transition cursor-pointer hover:bg-white hover:text-[red]"
                >
                  + ADD TO BUCKET
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {notification && (
        <ItemAddToast message="Item added to cart successfully!" />
      )}

      <div className="flex flex-wrap h-auto md:w-[87%] w-full mt-10">
        <div className="w-full sm:w-[50%] p-2">
          <div className="w-full h-full flex justify-center items-center">
            <img
              src="./images/banner-img-1.jpg"
              alt="Image 1"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="w-full sm:w-[50%] p-2">
          <div className="w-full h-full flex justify-center items-center">
            <img
              src="./images/banner-img-2.jpg"
              alt="Image 2"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="w-full sm:w-[50%] p-2">
          <div className="w-full h-full flex justify-center items-center">
            <img
              src="./images/banner-img-3.jpg"
              alt="Image 3"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="w-full sm:w-[50%] p-2">
          <div className="w-full h-full flex justify-center items-center">
            <img
              src="./images/banner-img-4.jpg"
              alt="Image 4"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;

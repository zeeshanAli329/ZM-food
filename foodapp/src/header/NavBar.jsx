import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [foodItems, setFoodItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const items = ["Menu"];

  const filterItems = foodItems.filter((item) =>
    item.strCategory.toLowerCase().includes(search.toLowerCase())
  );

  const fetchFoodList = async () => {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await res.json();
      setFoodItems(data.categories);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoodList();
  }, []);

  if (loading) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <>
      <nav className="w-full max-w-[1450px] bg-[#fc8a06]/100 backdrop-blur fixed top-0 z-50">
        <div className="max-w-[1450px] mx-auto flex items-center justify-between px-6 lg:px-16 py-3">
          {/* Logo */}
          <Link to="/">
            <img
              src="/images/zm-food-logo.jpeg"
              alt="Logo"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 text-white ">
            <Link
              to="/"
              className="hover:text-[#03081f] hover:bg-[white] px-4 py-2 rounded-full transition"
            >
              Home
            </Link>

            {items.map((item, idx) => (
              <Link
                key={idx}
                to={`/${item.toLowerCase()}`}
                className="hover:text-[#03081f] hover:bg-[white] px-4 py-2 rounded-full transition"
              >
                {item}
              </Link>
            ))}

            <div className="relative flex items-center">
              <Link
                to="/cart"
                className="hover:text-[#03081f] hover:bg-[white] px-4 py-2 rounded-full transition flex"
              >
                <ShoppingCart className="w-6 h-6" />
              </Link>

              {cartItems.length > 0 && (
                <p className="absolute -top-0 -right-[-2px] rounded-full px-1 h-[17px] min-w-[17px] text-[12px] bg-red-600 text-white flex items-center justify-center">
                  {cartItems.length}
                </p>
              )}
            </div>

            <Link to="/user-account">
              <button className="hover:text-black bg-black hover:bg-[white]  px-4 py-2 rounded-full transition cursor-pointer flex gap-3">
                <img src="/images/Male User.svg"></img>
                Login/Signup
              </button>
            </Link>
          </div>

          {/* Mobile/Tablet Menu Icon */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#03081f] text-white flex flex-col px-6 py-3 space-y-3">
            {items.map((item, idx) => (
              <Link
                key={idx}
                to={`/${item.toLowerCase()}`}
                className="hover:text-[#FC8A06] px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link to="/user-account">
              <button className=" bg-black hover:bg-[white] hover:text-[black] rounded-full py-2 transition cursor-pointer flex w-fit px-2">
                Login/Signup
              </button>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};
export default NavBar;

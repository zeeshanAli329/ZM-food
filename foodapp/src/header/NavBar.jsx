import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react"; 
import { useState, useEffect } from "react";

const NavBar = () => {
      const [loading, setLoading] = useState(true);
      const [search, setSearch] = useState("");
        const [foodItems, setFoodItems] = useState([]);
      const [showDropdown, setShowDropdown] = useState(false);
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      const items = ["Home", "Menu", "Shop", "About", "Contact"];
      
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
      




    return(
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
          <div className="hidden lg:flex gap-8 text-white font-semibold">
            {items.map((item, idx) => (
              <Link
                key={idx}
                to={`/${item.toLowerCase()}`}
                className="hover:text-[#03081f] hover:bg-white px-4 py-2 rounded-full transition"
              >
                {item}
              </Link>
            ))}
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
                className="hover:text-[#FC8A06]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>


        </>
    );
}
export default NavBar;
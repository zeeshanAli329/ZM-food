import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import FetchApi from "../../FetchApi";
import Cart from "../cart-section/Cart";

const ProductManu = () => {
  const { foodItems, loading } = FetchApi();

  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filterItems = foodItems.filter((item) =>
    item.idCategory.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[white] min-h-screen flex flex-col items-center">
      {/* Hero Section */}

      <section className="max-w-[1450px] w-full px-6 mt-40">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-6">
          {filterItems.map((item, index) => (
            <Link
              to={`/product/${item.idCategory}`}
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
      </section>
      <Footer />
    </div>
  );
};

export default ProductManu;





































// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import NavBar from "../../header/NavBar";
// import Footer from "../../footer/Footer";
// import ManufetchApi from "./ManufetchApi";
// import HomePage from "../../HomeSection/HomePage";

// function ProductManu() {
//   const { products, loading } = ManufetchApi();

//   return (
//     <>
//       <div className="max-w-[1450px] flex justify-center items-center w-[100%] ">
//         <section className="px-6 mt-30 flex ">
//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {products.map((item) => (
//               <Link
//                 key={item.idMeal}
//                 to={`/product/${item.idMeal}`}
//                 className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
//               >
//                 <img
//                   src={item.strMealThumb}
//                   alt={item.strMeal}
//                   className="w-full h-[200px] object-cover"
//                 />
//                 <div className="p-4">
//                   <p className="font-bold text-lg text-[#fc8a06]">
//                     {item.strMeal}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default ProductManu;
















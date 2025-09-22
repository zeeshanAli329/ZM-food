import React, { useState } from "react";
import NavBar from "../header/NavBar";
import FetchApi from "../FetchApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../reduxtookit-cart/CartSlice";
import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import Toasts from "../notification/toastsNotification/ItemAddToast";



const ProductDetaile = () => {
  const { foodItems, loading } = FetchApi();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [notification, setNotification] = useState(false);


  if (loading) return <h1 className="text-center mt-10">Loading......</h1>;

  const product = foodItems.find((item) => item.idCategory === id);
  if (!product) {
    return <h1 className="text-center mt-40">Product not found</h1>;
  }

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

  return (
    <>
      <div className="bg-black h-auto flex justify-center items-center flex-col">
        <div className="bg-black min-h-screen lg:w-[90%] w-full flex justify-center items-center">
          <div className="flex items-center justify-between gap-6 bg-white rounded-sm shadow-lg p-6">
            {/* ------------image-section------------ */}
            <div className="w-[40%] flex justify-center items-center">
              <img
                src={product.strCategoryThumb}
                alt={product.strCategory}
                className="rounded-sm w-full object-contain"
              />
            </div>

            {/* ------------detail-section------------ */}
            <div className="w-[50%] text-left">
              <h1 className="text-2xl font-bold text-[#FC8A06] ">
                {product.strCategory}
              </h1>
              <p className="text-gray-600 mt-3 line-clamp-3">
                {product.strCategoryDescription}
              </p>

              <p className="text-lg font-semibold mt-5 text-gray-900">
                GBP 23.10
              </p>

              <button
                onClick={handleAddToCart}
                className="mt-6 bg-[#FC8A06] text-white px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {notification && <Toasts message="Item added to cart successfully!" />}

        <Footer />
      </div>
    </>
  );
};

export default ProductDetaile;

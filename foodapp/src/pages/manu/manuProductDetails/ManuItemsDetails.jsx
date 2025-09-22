import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ManufetchApi from "../ManufetchApi";
import NavBar from "../../../header/NavBar";
import Footer from "../../../footer/Footer";

const ManuItemsDetails = () => {
  const { products, loading } = ManufetchApi();
  const { idMeal } = useParams(); 

  const item = products.find((item) => item.idMeal === idMeal);
    if (!item) return <h1 className="text-center mt-10">Item not found</h1>;


  return (
    <>
      <div className="bg-white h-auto flex justify-center items-center flex-col ">
        <div className="bg-white min-h-screen lg:w-[90%] md:w-[90%] w-full flex justify-center items-center">
          <div className="flex items-center justify-between gap-6 bg-gray-100 rounded-sm shadow-sm p-6 mt-23">
            {/* ------------image-section------------ */}
            <div className="w-[40%] flex justify-center items-center">
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="rounded-sm w-full object-contain"
              />
            </div>

            {/* ------------detail-section------------ */}
            <div className="w-[50%] text-left">
              <h1 className="text-2xl font-bold text-[#FC8A06] ">
                {item.strMeal}
              </h1>

              <p className="text-lg font-semibold mt-5 text-gray-900">
                GBP 23.10
              </p>

              <button
                onClick={""}
                className="mt-6 bg-[#FC8A06] text-white px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
export default ManuItemsDetails;

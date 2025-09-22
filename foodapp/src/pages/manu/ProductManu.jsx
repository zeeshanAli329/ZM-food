import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../header/NavBar";
import Footer from "../../footer/Footer";
import ManufetchApi from "./ManufetchApi";

function ProductManu() {
  const { products, loading } = ManufetchApi();

  return (
    <>
      <div className="max-w-[1450px] flex justify-center items-center w-[100%] ">
        <section className="px-6 mt-30 flex ">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((item) => (
              <Link
                key={item.idMeal}
                to={`/product/${item.idMeal}`}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <p className="font-bold text-lg text-[#fc8a06]">
                    {item.strMeal}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ProductManu;

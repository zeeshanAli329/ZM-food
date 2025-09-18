import React from "react";
import ProductDetaile from "./pages/ProductDetaile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/cart-section/Cart";
import NavBar from "./header/NavBar";
import HomePage from "./HomeSection/HomePage";

const AppRouter = () => {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<HomePage />} />

      {/* <Route path='/home' element={<Home />} /> */}

      {/* Product details page */}
      <Route path="/product/:category" element={<ProductDetaile />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
export default AppRouter;

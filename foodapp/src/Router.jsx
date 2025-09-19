import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetaile from "./pages/ProductDetaile";
import Cart from "./pages/cart-section/Cart";
import NavBar from "./header/NavBar";
import HomePage from "./HomeSection/HomePage";
import UserLogin from "./auth/loginpage/UserLogin";
import UserAccount from "./auth/userAccount/UserAccount";
import RegisterUser from "./auth/registerition/RegisterUser";
import ForgotPassword from "./auth/password-forgot/ForgotPassword";

const Router = () => {
  return (
    
 

      <Routes>
        {/* Account option page */}
        <Route path="/user-account" element={<UserAccount />} />
        {/* ----------------forgot-pasword----------- */}
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Login */}
        <Route path="/login" element={<UserLogin />} />

        {/* Register */}
        <Route path="/register" element={<RegisterUser />} />

        {/* Home page */}
        <Route path="/" element={<HomePage />} />

        {/* Product details page */}
        <Route path="/product/:category" element={<ProductDetaile />} />

        {/* Cart page */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
  
  );
};

export default Router;

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
import ProductManu from "./pages/manu/ProductManu";
import ManuItemsDetails from "./pages/manu/manuProductDetails/ManuItemsDetails";

const Router = () => {
  return (
    
 
<>
        <NavBar />
    <Routes>
        {/* Account option page */}
        <Route path="/user-account" element={<UserAccount />} />
        {/* ----------------forgot-pasword----------- */}
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Login */}
        <Route path="/login" element={<UserLogin />} />

        {/* Register */}
        <Route path="/register" element={<RegisterUser />} />
        {/* -------------manu */}

        <Route path="/manu" element={<ProductManu/>}></Route>
        {/* ============manu-product------details */}
        <Route path="/product/:idMeal" element={<ManuItemsDetails />} />


        {/* Home page */}
        <Route path="/" element={<HomePage />} />

        {/* Product details page */}
        <Route path="/product/:id" element={<ProductDetaile />} />

        {/* Cart page */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
  
</>
  );
};

export default Router;

import React from 'react';
import ProductDetaile from './pages/ProductDetaile'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomeSection/HomePage';

const AppRouter = () =>{



    return(
      <Routes>
        {/* Home page */}
        <Route path="/" element={<HomePage />} />

        {/* Product details page */}
        <Route path="/product/:category" element={<ProductDetaile />} />
      </Routes>
    );
}
export default AppRouter;
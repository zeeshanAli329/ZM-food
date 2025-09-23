import React from "react";
import "./App.css";
import Router from "./Router";
import "react-toastify/dist/ReactToastify.css";
import UserLogin from "./auth/loginpage/UserLogin";
import RegisterUser from "./auth/registerition/RegisterUser";
import NavBar from "./header/NavBar";
import Footer from "./footer/Footer";
import HomePage from "./HomeSection/HomePage";
import Slider from "./pages/slider/Slider";

function App() {
  return (
    <>

    {/* <HomePage/> */}
    {/* <Footer/> */}
      {/* <UserLogin /> */}
      {/* <RegisterUser /> */}
      <Router/>
      {/* <NavBar /> */}
    </>
  );
}

export default App;

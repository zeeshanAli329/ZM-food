import React from "react";
import "./App.css";
import Router from "./Router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserLogin from "./auth/loginpage/UserLogin";
import RegisterUser from "./auth/registerition/RegisterUser";

function App() {
  return (
    <>
      <ToastContainer position="top-right" />
      {/* <UserLogin /> */}
      {/* <RegisterUser /> */}
      <Router/>
    </>
  );
}

export default App;

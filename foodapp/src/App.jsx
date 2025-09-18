import React from 'react';
import "./App.css";
import AppRouter from './Router';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="top-right" />
      <AppRouter/>
 
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer"
import Home from "./pages/Buyer/Home"
import RoutesComponent from "./routes/route";
const App = () => {
  return (
   
    <>
    <Navbar/>
      <RoutesComponent />
      <Footer/>
  
    </>
   
  );
};

export default App;

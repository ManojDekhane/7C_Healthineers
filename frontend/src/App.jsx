import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"

import RoutesComponent from "./routes/route";
const App = () => {
  return (
   
    <>
    
      <RoutesComponent />
      
  
    </>
   
  );
};

export default App;

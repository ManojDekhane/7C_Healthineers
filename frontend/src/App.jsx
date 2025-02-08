import React from "react";

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";


import RoutesComponent from "./routes/route";



import { AuthProvider } from "./contexts/authContext/firebaseContext";

function App() {
  return (
    <AuthProvider>
      <RoutesComponent />
    </AuthProvider>
  );
}

export default App;

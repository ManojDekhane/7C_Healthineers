import React from "react";
import RoutesComponent from "./routes/route";
import { AuthProvider } from "./contexts/authContext/firebaseContext";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <RoutesComponent />
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;

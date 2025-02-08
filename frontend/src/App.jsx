import React from "react";
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

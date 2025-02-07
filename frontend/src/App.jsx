import React from "react";
import { AuthProvider } from "./contexts/authContext/firebaseContext";
import RoutesComponent from "./routes/route";

function App() {
  return (
    <AuthProvider>
      <RoutesComponent />
    </AuthProvider>
  );
}

export default App;

import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "./components/auth/login.jsx";
import Register from "./components/auth/Register.jsx";
import ForgotPassword from "./components/auth/ForgotPassword.jsx";
import Home from "./components/home/home";
import { AuthProvider } from "./contexts/authContext/firebaseContext";
import AdminDashboard from "./components/auth/AdminDashboard.jsx";

function App() {
  const routesElement = useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/home", element: <Home /> },
    { path: "/forgot-password", element: <ForgotPassword /> }, 
    { path: "/admin-dashboard", element: <AdminDashboard /> },
  ]);

  return (
    <AuthProvider>
      {/* <Header /> */}
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;

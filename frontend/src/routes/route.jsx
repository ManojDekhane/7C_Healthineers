import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../components/auth/Login.jsx";
import Register from "../components/auth/Register.jsx";
import ForgotPassword from "../components/auth/ForgotPassword.jsx";
import Home from "../components/home/Home.jsx";
import AdminDashboard from "../components/auth/AdminDashboard.jsx";

function RoutesComponent() {
    const routesElement = useRoutes([
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/home", element: <Home /> },
        { path: "/forgot-password", element: <ForgotPassword /> },
        { path: "/admin-dashboard", element: <AdminDashboard /> },
    ]);

    return (
        <>
            {routesElement}
        </>
    );
}

export default RoutesComponent;

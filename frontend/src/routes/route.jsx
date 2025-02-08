import Home from "../pages/Buyer/Home"
import { useRoutes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "../components/auth/PrivateRoute";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import AdminDashboard from "../components/auth/AdminDashboard";
import ForgotPassword from "../components/auth/ForgotPassword";
import ContactUs from "../components/ContactUs/ContactUs";

const RoutesComponent = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Protected Admin Dashboard Route */}
        <Route element={<PrivateRoute />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>

        {/* Default Route */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    
  );
};

export default RoutesComponent;
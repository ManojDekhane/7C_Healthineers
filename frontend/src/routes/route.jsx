import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/auth/PrivateRoute";
import Layout from "../routes/Layout"; 

// Pages
import LandingPage from "../pages/Buyer/LandingPage/LandingPage";
import ContactUs from "../pages/Buyer/ContactUs/ContactUs";
import ProfilePage from "../pages/Buyer/Profile/ProfilePage";

import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import ForgotPassword from "../components/auth/ForgotPassword";

import ProductCategoryPage from "../pages/Buyer/ProductCategory/ProductCategoryPage";
import ProductSubCategoryPage from "../pages/Buyer/ProductSubCategory/ProductSubCategoryPage";
import ProductListPage from "../pages/Buyer/ProductList/ProductListPage";

import AdminDashboard from "../pages/Seller/AdminDashboard/AdminDashboard";
import ProductDetail from "../components/ProductDetail/ProductDetail"

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/product-category" element={<ProductCategoryPage />} />
        <Route path="/category/:categoryName" element={<ProductSubCategoryPage />} />
        <Route path="/subcategory/:subcategoryName" element={<ProductListPage />} />
        <Route path="/product/:productName" element={<ProductDetail />} />
        <Route path="/profile" element={<ProfilePage />} />

      </Route>

      {/* Protected Admin Dashboard Route (without Layout) */}
      <Route element={<PrivateRoute />}>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;

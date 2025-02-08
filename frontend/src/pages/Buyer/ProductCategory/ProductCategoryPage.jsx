import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../../components/Navbar/Navbar";
import ProductCategoryCard from "../../../components/ProductCategory/ProductCategoryCard";
import Footer from "../../../components/Footer/Footer";

import productData from "../../../productData";

const ProductCategoryPage = () => {
  return (
    <>
      <Navbar />

      {/* Product Category Grid */}
      <div className="pt-44 px-4 sm:px-6 md:px-12 pb-20">
        <h1 className="text-center text-4xl font-bold text-sky-700 mb-10">
          Explore Our Categories
        </h1>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {productData.map((category, index) => (
            <ProductCategoryCard
              key={index}
              image={category.image}
              title={category.category}
              link={category.link}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductCategoryPage;

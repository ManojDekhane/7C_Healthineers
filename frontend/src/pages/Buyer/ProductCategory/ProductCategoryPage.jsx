import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import ProductCategoryCard from "../../../components/ProductCategory/ProductCategoryCard";

import productData from "../../../productData";

const ProductCategoryPage = () => {
  return (
    <>
      <Helmet>
        <title>Explore All Product Categories | Seven C Healthineers</title>
        <meta name="description" content="Browse a wide range of healthcare product categories from Seven C Healthineers — your trusted source for medical innovations." />
        <meta name="keywords" content="Product Categories, Medical Equipment, Healthcare Technology, Seven C Healthineers" />
        <meta property="og:title" content="Explore All Product Categories | Seven C Healthineers" />
        <meta property="og:description" content="Discover cutting-edge product categories in Radiology, ICU, Pathology and more from Seven C Healthineers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.7chealthineers.com/product-category" />
        <link rel="canonical" href="https://www.7chealthineers.com/product-category" />
      </Helmet>

      {/* Product Category Grid */}
      < div className="pt-44 px-4 sm:px-6 md:px-12 pb-20" >
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
      </div >
    </>
  );
};

export default ProductCategoryPage;

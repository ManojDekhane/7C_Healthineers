import React from "react";
import { Link } from "react-router-dom";

const ProductSubCategoryCard = ({ image, title }) => {
  return (
    <div className="w-72 md:w-80 lg:w-96 h-80 flex flex-col cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
      <Link to={`/subcategory/${encodeURIComponent(title)}`} className="block h-full">
        {/* Image with Overlay */}
        <div className="relative w-full h-56">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-t-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Title Section with Fixed Height */}
        <div className="flex-grow flex items-center justify-center p-4 bg-white h-24 rounded-b-lg shadow-inner">
          <p className="text-lg md:text-xl text-gray-900 font-bold text-center leading-tight">
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductSubCategoryCard;

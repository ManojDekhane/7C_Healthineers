import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ image, name }) => {
  const defaultImage = "https://via.placeholder.com/150";

  return (
  
    <div className="w-52 md:w-56 lg:w-60 bg-white border rounded-lg shadow-md p-3 flex flex-col items-center hover:shadow-lg transition-all duration-300">
      <img src={image || defaultImage} alt={name} className="w-28 h-32 object-contain mb-2" />
      <h3 className="text-md font-semibold text-center text-gray-800">{name}</h3>
      
      <Link
        to={`/product/${encodeURIComponent(name)}`} // Linking to Product Detail Page
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
      >
        View More
      </Link>
      
    </div>
   
  );
};

export default ProductCard;

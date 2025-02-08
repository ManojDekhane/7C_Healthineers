import React from "react";

const ProductCard = ({ image, name }) => {
  const defaultImage = "https://via.placeholder.com/150";

  return (
    <div className="w-52 md:w-56 lg:w-60 bg-white border rounded-lg shadow-md p-3 flex flex-col items-center hover:shadow-lg transition-all duration-300">
      <img src={image || defaultImage} alt={name} className="w-28 h-32 object-contain mb-2" />
      <h3 className="text-md font-semibold text-center text-gray-800">{name}</h3>
      <button className="bg-sky-600 hover:bg-black text-white font-bold py-2 px-3 rounded text-sm transition duration-300 mt-2">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;

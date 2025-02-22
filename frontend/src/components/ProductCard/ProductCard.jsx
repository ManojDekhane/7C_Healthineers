import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductDemoRequest from "../ProductDemoRequest/ProductDemoRequest";
import GetAQuote from "../GetAQuote/GetAQuote";

const ProductCard = ({ image, name, category, subCategory, brochureLink, price }) => {
  const [isModalOpen, setModalOpen] = useState(false); // Fix: Define state for modal
  const defaultImage = "https://via.placeholder.com/150";

  const handleBrochureClick = (e) => {
    e.preventDefault();
    window.open(brochureLink, "_blank");

    const link = document.createElement("a");
    link.href = brochureLink;
    link.download = brochureLink.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);


  };

  const handleBuyClick = (productName, price) => {
    const phoneNumber = "918484845154"; // Replace with your organization's WhatsApp number (include country code)
    const message = `Hello, I am interested in purchasing ${productName} for ₹${price} + GST. Can you provide more details?`;
    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };
  
  

  return (
    <div className="w-52 md:w-56 lg:w-60 bg-white border rounded-lg shadow-md p-3 flex flex-col items-center hover:shadow-lg transition-all duration-300">
     {category !== "pathology" && subCategory !== "Pathology Consumable(Reagents)"&& (
  <img src={image || defaultImage} alt={name} className=" w-28 h-32 object-contain mb-2" />
)}
      <h3 className="text-md font-bold text-center text-gray-800">{name}</h3>

      {category === "Pathology" && subCategory === "Pathology Machines" && brochureLink ? (
        <>
          <button
            onClick={handleBrochureClick}
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
          >
            Download Brochure
          </button>

          <div className="flex justify-center mt-1">
            <button
              className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
              onClick={() => setModalOpen(true)} 
            >
              Get a Quote
            </button>
          </div>

          {/* Get a quote */}
          
          <GetAQuote isOpen={isModalOpen} onClose={() => setModalOpen(false)} productName={name} />
        </>
      ) : category === "Pathology" && subCategory === "Pathology Consumable(Reagents)" ? (
        <>
          <p className="text-sm text-gray-700 font-bold mt-2">Price: ₹{price ? price : "N/A"} + GST</p>

          <p className="text-xs text-blue-800 font-semibold mt-1 text-center bg-red-100 p-1 rounded-md w-full max-w-[200px]">
            *Out of Pune - Delivery charges applied
          </p>

          <button
            onClick={() => handleBuyClick(name, price)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 w-full rounded-lg hover:bg-blue-800 transition-all"
          >
            Buy
          </button>
        </>
      ) : (
        <Link
          to={`/product/${encodeURIComponent(name)}`}
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
        >
          View More
        </Link>  
      )}
    </div>
  );
};

export default ProductCard;

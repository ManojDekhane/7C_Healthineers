import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ image, name, category, subCategory, brochureLink, price }) => {
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
    const phoneNumber = "918637723379"; // Replace with your organization's WhatsApp number (include country code)
    const message = `Hello, I am interested in purchasing ${productName} for ₹${price} + GST. Can you provide more details?`;
    const encodedMessage = encodeURIComponent(message);
  
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };
  

  return (
    <div className="w-52 md:w-56 lg:w-60 bg-white border rounded-lg shadow-md p-3 flex flex-col items-center hover:shadow-lg transition-all duration-300">
      <img src={image || defaultImage} alt={name} className="w-28 h-32 object-contain mb-2" />
      <h3 className="text-md font-semibold text-center text-gray-800">{name}</h3>

      {/* Show "Download Brochure" for Pathology Machines */}
      {category === "Pathology" && subCategory === "Pathology Machines" && brochureLink ? (
        <button
          onClick={handleBrochureClick}
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
        >
          Download Brochure
        </button>
      ) : category === "Pathology" && subCategory === "Pathology Consumable(Reagents)" ? (
        <>
          {/* Display price + GST */}
          <p className="text-sm text-gray-700 font-bold mt-2">Price: ₹{price ? price : "N/A"} + GST</p>

          {/* Styled "Out of Pune - Delivery charges applied" */}
          <p className="text-xs text-blue-800 font-semibold mt-1 text-center bg-red-100 p-1 rounded-md w-full max-w-[200px]">
            *Out of Pune - Delivery charges applied
          </p>

          {/* Buy button */}
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
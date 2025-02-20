import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import productData from "../../productData";
import ProductDemoRequest from "../ProductDemoRequest/ProductDemoRequest";

const ProductDetail = () => {
  const { productName } = useParams();
  const decodedProductName = decodeURIComponent(productName).toLowerCase();

  const productLookup = useMemo(() => {
    return productData.reduce((acc, category) => {
      (category.subCategories || []).forEach(subCategory => {
        (subCategory.products || []).forEach(product => {
          acc[product.name.toLowerCase()] = product;
        });
      });
      return acc;
    }, {});
  }, []);

  const product = productLookup[decodedProductName] || null;
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [decodedProductName]);

  if (loading) {
    return <h2 className="text-center text-2xl text-gray-600 animate-pulse">Loading product...</h2>;
  }

  if (!product) {
    return (
      <div className="pt-20 flex items-center justify-center">
        <h2 className="text-red-600 text-3xl font-semibold">⚠ Product Not Found</h2>
      </div>
    );
  }
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 px-6 py-12 pt-40">
      {/* Product Name */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-center text-sky-700 mb-5 sm:mb-7 drop-shadow-md">{product.name}</h2>

      {/* Product Image */}
      <div className="flex justify-center mb-14 mt-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-64 h-64 sm:w-80 sm:h-80 object-contain shadow-2xl rounded-2xl transition-transform transform hover:scale-110"
        />
      </div>

      {/* Product Description */}

      <div className="w-full sm:w-4/5 mx-auto bg-white/80 backdrop-blur-md shadow-lg border-l-8 border-sky-500 p-6 sm:p-12 rounded-2xl mb-8 sm:mb-12">
        <p className="text-xl font-medium text-gray-800 leading-relaxed text-center italic">
          {product.description}
        </p>
      </div>

      {/* Enhanced Features Section */}
      {product.features && product.features.length > 0 && (
        <div className="mt-8 p-8 max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-sky-700 mb-8 drop-shadow-md"> Key Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-lg p-7 shadow-xl rounded-2xl border-l-8 border-sky-500 text-left transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Feature Title */}
                <h4 className="text-xl font-bold text-sky-800">{feature.title}</h4>
                {/* Feature Description */}
                <p className="text-gray-700 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Get Demo Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition duration-300"
          onClick={() => setModalOpen(true)}
        >
          🚀 Get a Demo
        </button>
      </div>

      {/* Product Demo Request Modal */}
      <ProductDemoRequest isOpen={isModalOpen} onClose={() => setModalOpen(false)} productName={productName} />
      

    </div>
  );
};

export default ProductDetail;

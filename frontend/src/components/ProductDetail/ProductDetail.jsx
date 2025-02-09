import React from "react";
import { useParams } from "react-router-dom";
import productData from "../../productData"

const ProductDetail = () => {
  const { productName } = useParams();
  const decodedProductName = decodeURIComponent(productName);

  // Locate the product
  const product = productData
    .flatMap(category => category.subCategories || [])
    .flatMap(subCategory => subCategory.products || [])
    .find(product => product.name === decodedProductName);

  // Error message if product not found
  if (!product) {
    return (
      <div className=" pt-20 flex items-center justify-center ">
        <h2 className="text-sky-600 text-3xl font-semibold">⚠ Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 pt-40">
      {/* Product Name */}
      <h2 className="text-4xl font-bold text-center text-sky-700 mb-7">{product.name}</h2>

      {/* Product Image - Removed Border */}
      <div className="flex justify-center mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-80 h-80 object-contain shadow-lg rounded-lg"
        />
      </div>

      {/* Product Description */}
      {/* Product Description */}
      <div className="w-4/5 mx-auto bg-white shadow-lg border-l-8 border-sky-500 p-12 rounded-lg mb-12 transition-transform transform hover:scale-105 duration-300">
  <p className="text-xl font-medium text-gray-800 leading-relaxed text-center italic">
    {product.description}
  </p>
</div>




      {/* Enhanced Features Section */}
      {product.features && product.features.length > 0 && (
        <div className="mt-8  p-8 max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-sky-700 mb-8"> Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-7 shadow-xl rounded-lg border-l-8 border-sky-500 text-left transition-transform transform hover:scale-105 hover:shadow-2xl"
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
    </div>
  );
};

export default ProductDetail;

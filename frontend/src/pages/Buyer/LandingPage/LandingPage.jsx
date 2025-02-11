import React from "react";
import ContactUs from "../ContactUs/ContactUs";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";

const products = [
  {
    image: "https://productimages.withfloats.com/tile/678b3ff4222fa4966c5b1702.png",
    name: "Yumizen CA40 Semi-automated Clinical...",
    price: "INR 117000",
  },
  {
    image: "https://productimages.withfloats.com/tile/6633802d0070ce584f5729c4.jpg",
    name: "AGAPPE Mispa HbX Portable Haemoglobin...",
    price: "INR 19000",
  },
  {
    image: "https://productimages.withfloats.com/tile/66337f840070ce584f572989.jpg",
    name: "AGAPPE Mispa Chem Dx Auto Dry Biochemistry...",
    price: "INR 375000",
  },
];

const LandingPage = () => {
  return (
    <>

      {/* Full Page Background Image */}
      <div
        className="w-full min-h-screen bg-cover bg-center flex justify-center items-center relative top-20"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/beautiful-blue-background-that-shades-from-light-dark-concept-sky-air-sea_71793-40.jpg")',
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay Card */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 shadow-2xl rounded-2xl text-center max-w-3xl z-10">
          <h1 className="text-4xl font-extrabold text-sky-700">SevenC Healthineers</h1>
          <p className="text-gray-700 mt-4 text-lg">
            "Right Here, You Have An Option" Welcome to our "SevenC Healthineers" company! We provide cutting-edge solutions for the healthcare industry.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center space-x-6">
            <button className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-black hover:scale-105">
              <Link to="/product-category">VIEW PRODUCTS</Link>
              
            </button>
            <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-sky-600 hover:scale-105">
              SEND ENQUIRY
            </button>
          </div>
        </div>

      </div>

      {/* Products Section */}
      <div className="bg-gray-100 py-20 mt-10 text-center">
        <h1 className="text-4xl font-bold mb-12 text-gray-800">Our Products</h1>
        <div className="flex flex-wrap justify-center gap-8 px-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="mt-10">
          <button className="bg-sky-600 hover:bg-black text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:scale-105">
            <Link to="/product-category">VIEW ALL PRODUCTS</Link>
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 px-10 text-center bg-white">
        <h1 className="text-3xl font-bold mb-10 text-gray-900">About Our Organization</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <img
            src="https://fpimages.withfloats.com/tile/641aa9c0c225e200011b5209.jpg"
            alt="Organization"
            className="w-full md:w-[700px] h-auto rounded-lg shadow-xl object-cover"
          />
          <p className="max-w-2xl text-lg leading-relaxed text-gray-700">
            India is a country where culture resonates, tradition speaks, beauty entices, and variety fascinates. India’s religious, linguistic, and cultural diversity is unsurpassed. India is known for its rich history, many ethnicities, and enormous landscapes.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="m-6">
        <ContactUs />
      </div>

    </>
  );
};

export default LandingPage;

import React from "react";
import ContactUs from "../ContactUs/ContactUs";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import s_scan_open from "../../../assets/LandingPageProduct/s-scan_open.webp";
import MyLab_A50 from "../../../assets/LandingPageProduct/MyLab-A50.webp";
import g_scan_brio from "../../../assets/LandingPageProduct/g-scan-brio.webp";
import FeedbackSection from "../FeedbackSection/FeedbackSection";


const products = [
  {
    image: s_scan_open,
    name: "S-scan Open",
    price: "INR 117000",
  },
  {
    image: MyLab_A50,
    name: "MyLab™A50",
    price: "INR 19000",
  },
  {
    image: g_scan_brio,
    name: "G-scan Brio",
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
          <h1 className="text-4xl font-extrabold text-sky-700">Seven C Healthineers LLP</h1>
          <p className="text-gray-700 mt-4 text-lg">
            "Right Here, You Have An Option" Welcome to our "Seven C Healthineers LLP" company! We provide cutting-edge solutions for the healthcare industry.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center space-x-6">
            <button className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-black hover:scale-105">
              <Link to="/product-category">VIEW PRODUCTS</Link>

            </button>
            <button
              className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-black hover:scale-105"
              onClick={() => window.open("https://wa.me/918637723379?text=Hello, I would like to inquire about your products.", "_blank")}
            >
              SEND ENQUIRY
            </button>
          </div>
        </div>

      </div>


      {/* Products Section */}
      <div className="bg-gradient-to-b from-gray-50 to-gray-200 py-20 mt-10 text-center">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 tracking-wide">
          Our Products
        </h1>

        <div className="flex flex-wrap justify-center gap-8 px-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="transition-transform duration-300 hover:scale-105"
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link to="/product-category">
            <button className="bg-sky-600 hover:bg-sky-900 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:scale-105">
              VIEW ALL PRODUCTS
            </button>
          </Link>
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

      <FeedbackSection />

      {/* Contact Section */}
      <div className="m-6">
        <ContactUs />
      </div>

    </>
  );
};

export default LandingPage;

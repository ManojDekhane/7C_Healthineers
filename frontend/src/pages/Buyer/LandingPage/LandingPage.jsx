import React from "react";
import ContactUs from "../ContactUs/ContactUs";
import { Link } from "react-router-dom";

import esaoteLogo from "../../../assets/SevenC-logo/esaotelogo.png"
import Carousel from "../Carousel/Carousel";
import Background from "../../../assets/LandingPageProduct/background.jpg";
import about from "../../../assets/LandingPageProduct/about.webp"
import FeedbackSection from "../FeedbackSection/FeedbackSection";
import ProductNavbar from "../Products/ProductNavbar";

const LandingPage = () => {
  return (
    <>
      <div className="mt-10">
        <ProductNavbar /></div>

      {/* Full Page Background Image */}
      <div
        className="w-full min-h-screen bg-cover bg-center flex justify-center items-center   relative top-0"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundAttachment: "fixed",
        }}
      >


        {/* Overlay Card */}
        {/* Main Overlay Card */}
        <div className="mt-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 shadow-2xl rounded-2xl text-center max-w-3xl z-10">
          {/* Title */}
          <h1 className="text-4xl font-extrabold text-sky-600">Seven C Healthineers LLP</h1>

          <p className="text-gray-700 mt-4 text-base sm:text-lg leading-relaxed max-w-3xl px-4 sm:px-0 text-center mx-auto">
            Welcome to <span className="font-semibold text-sky-600">Seven C Healthineers LLP</span>!
            We are dedicated to delivering high-quality <span className="text-sky-700 font-medium">medical equipment </span>
            to healthcare professionals and institutions, ensuring <span className="font-semibold">reliability, efficiency & innovation</span> in the medical field.
          </p>


          {/* Buttons */}
          <div className="mt-6 flex justify-center space-x-6 mb-4" >
            <button className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-black hover:scale-105">
              <Link to="/product-category">VIEW PRODUCTS</Link>
            </button>
            <button
              className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-black hover:scale-105"
              onClick={() => window.open("https://wa.me/918484845154?text=Hello, I would like to inquire about your products.", "_blank")}
            >
              SEND ENQUIRY
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-black-300 my-6 w-3/4 mx-auto"></div>

          {/* Authorized Partner & Logos (Inside Overlay Card) */}
          <div className="flex flex-col items-center">
            {/* "Authorized Partner" Text */}
            <span className="text-gray-800 text-xs sm:text-sm md:text-lg font-semibold">
              Authorized Partner
            </span>

            {/* Logos */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-2">

              <a href="https://www2.esaote.com/" target="_blank">
                <img
                  src={esaoteLogo}
                  alt="Esaote Logo"
                  className="h-8 sm:h-8 md:h-8 w-auto object-contain max-w-full"
                />
              </a>
              <a href="https://www.infivision.com/" target="_blank">
                <img
                  src="https://www.infivision.com/upload/images/logo2.svg"
                  alt="Infivision Logo"
                  className="h-4 sm:h-4 md:h-4 w-auto object-contain max-w-full"
                />
              </a>
              <a href="https://orbitdiagnostics.net/" target="_blank">
                <img
                  src="https://orbitdiagnostics.net/wp-content/uploads/brizy/imgs/Orbit_Logo-456x286x0x0x456x286x1722609305.png"
                  alt="Orbit Logo"
                  className="h-8 sm:h-8 md:h-8 w-auto object-contain max-w-full"
                />
              </a>
              <a href="https://www.globalmedicaresystems.com/" target="_blank">
                <img
                  src="https://5.imimg.com/data5/SELLER/Logo/2021/11/CL/JR/WD/3049048/global-logo-new-90x90.png"
                  alt="Orbit Logo"
                  className="h-7 sm:h-7 md:h-7 w-auto object-contain max-w-full"
                />
              </a>

            </div>
          </div>
        </div>

      </div>




      {/* Products Section */}

      <div className="bg-gradient-to-b from-gray-50 to-gray-200 py-20 mt-15 text-center">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 tracking-wide">
          Our Products
        </h1>

        <Carousel />


        <div className="mt-12">
          <Link to="/product-category">
            <button className="bg-sky-600 hover:bg-sky-900 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:scale-105">
              VIEW ALL PRODUCTS
            </button>
          </Link>
        </div>
      </div>





      {/* About Section */}
      <div className="py-20 px-6 sm:px-10 text-center bg-white">
      <h1 className="text-3xl font-bold mb-10 text-gray-900">About Our Organization</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={about}
            alt="Organization"
            className="w-full max-w-md md:max-w-full h-auto rounded-lg shadow-xl object-cover"
          />
        </div>
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 max-w-2xl text-lg leading-relaxed text-gray-700 font-bold text-justify space-y-3 font-[Tahoma] flex items-center">
          <div>
            <p>
              <span className="text-xl text-blue-600">Who We Are?</span><br />
              Seven C Healthineer LLP specializes in supplying and trading high-quality medical equipment, including:
            </p>
            <ul className="list-none space-y-1 mt-2">
              <li>✅ Anesthesia Workstations</li>
              <li>✅ ICU Ventilators</li>
              <li>✅ MRI Machines</li>
              <li>✅ Ultrasound Systems</li>
              <li>✅ Pathology Equipment</li>
              <li>✅ Respiratory Infection</li>
              <li>✅ Related Consumables</li>
            </ul>
            <p>We provide customized solutions to meet your specific needs—all at competitive prices.</p>
          </div>
        </div>
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
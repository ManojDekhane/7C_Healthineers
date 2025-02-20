import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import esaoteLogo from "../../assets/SevenC-logo/esaotelogo.png"

const WelcomeCard = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: "32px", opacity: 0 }}
      animate={isVisible ? { y: "35%", opacity: 1, x: "-50%" } : { y: "100vh", opacity: 0 }}
      transition={{
        duration: 1.5,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      className="absolute top-10 sm:top-8 left-1/2 transform -translate-x-1/2 bg-white p-4 sm:p-6 shadow-2xl rounded-2xl text-center max-w-3xl w-11/12 sm:w-auto z-10"
    >

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-sky-600">
        Seven C Healthineers LLP
      </h1>

      <p className="text-gray-700 mt-4 text-base sm:text-lg leading-relaxed max-w-3xl px-4 sm:px-0 text-center mx-auto">
        Welcome to <span className="font-semibold text-sky-600">Seven C Healthineers LLP</span>!
        We are dedicated to delivering high-quality <span className="text-sky-700 font-medium">medical equipment</span>
        to healthcare professionals and institutions, ensuring <span className="font-semibold">reliability, efficiency & innovation</span> in the medical field.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex justify-center space-x-6 mb-4">
        <button className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-black hover:scale-105">
          <Link to="/product-category">VIEW PRODUCTS</Link>
        </button>
        <button
          className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-black hover:scale-105"
          onClick={() =>
            window.open("https://wa.me/918484845154?text=Hello, I would like to inquire about your products.", "_blank")
          }
        >
          SEND ENQUIRY
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-black-300 my-6 w-3/4 mx-auto"></div>

      {/* Authorized Partner & Logos */}
      <div className="flex flex-col items-center">
        <span className="text-gray-800 text-xs sm:text-sm md:text-lg font-semibold">
          Authorized Partner
        </span>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-2">
          <a href="https://www2.esaote.com/" target="_blank">
            <img src={esaoteLogo} alt="Esaote Logo" className="h-8 sm:h-8 md:h-8 w-auto object-contain max-w-full" />
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
    </motion.div>
  );
};

export default WelcomeCard;
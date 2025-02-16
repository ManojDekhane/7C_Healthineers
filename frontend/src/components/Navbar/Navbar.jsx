import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import newlogo from "../../assets/SevenC-logo/n.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>

      {/* Top Bar */}
      <div className="bg-sky-600 text-white text-[10px] sm:text-xs md:text-sm px-2 py-2 fixed top-0 left-0 w-full z-50">
        <div className="flex flex-nowrap items-center justify-center md:justify-end gap-2 md:gap-3 text-center">

          {/* Location */}
          <div className="flex items-center space-x-1 md:space-x-2">
            <MdLocationOn className="text-sm md:text-base" />
            <a href="https://www.google.co.in/maps/place/Suswani+Complex/" target="_blank" rel="noopener noreferrer" className="hover:font-semibold">
              Pune
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-1 md:space-x-2">
            <FaPhone className="animate-pulse transform scale-x-[-1] text-sm md:text-base" />
            <a href="tel:+918484845154" className="hover:text-white hover:font-semibold transition duration-300">
              +91 8484845154
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-1 md:space-x-2">
            <HiOutlineMail className="text-sm md:text-base" />
            <a href="mailto:KmKazi@7chealthineers.com" className="hover:font-semibold">
              KmKazi@7chealthineers.com
            </a>
          </div>

        </div>
      </div>



      {/* Main Navbar */}
      <nav className="bg-white shadow-md fixed top-[32px] left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-1">
          {/* Logo Section */}
          <div className="flex flex-wrap items-center space-x-3 md:space-x-4 text-center md:text-left">
            {/* Main Logo */}
            <img src={newlogo} alt="Logo" className="h-16 md:h-24 lg:h-28 w-auto object-contain max-w-full" />


          </div>


          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-x-8 text-black font-medium text-xl">
            <li><Link to="/" className="hover:text-sky-600 font-bold transition-colors">Home</Link></li>
            <li><Link to="/profile" className="hover:text-sky-600 font-bold transition-colors">Profile</Link></li>
            <li><Link to="/product-category" className="hover:text-sky-600 font-bold transition-colors">Products</Link></li>
            <li><Link to="/gallery" className="hover:text-sky-600 font-bold transition-colors">Gallery</Link></li>
            <li><Link to="/contact-us" className="hover:text-sky-600 font-bold transition-colors">Contact</Link></li>
          </ul>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              ref={buttonRef}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              className="text-gray-600 focus:outline-none p-2 rounded-md hover:bg-gray-200"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 flex justify-center items-start pt-[120px]"
        >



          <div className="w-4/5 max-w-sm bg-white shadow-lg p-5 rounded-md">
            <ul className="flex flex-col space-y-4 text-lg">
              <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-sky-600">Home</Link></li>
              <li><Link to="/profile" onClick={() => setIsOpen(false)} className="hover:text-sky-600">Profile</Link></li>
              <li><Link to="/product-category" onClick={() => setIsOpen(false)} className="hover:text-sky-600">Products</Link></li>
              <li><Link to="/gallery" onClick={() => setIsOpen(false)} className="hover:text-sky-600">Gallery</Link></li>
              <li><Link to="/contact-us" onClick={() => setIsOpen(false)} className="hover:text-sky-600">Contact</Link></li>
            </ul>
          </div>
        </div>

      )}
    </div>
  )
};

export default Navbar;

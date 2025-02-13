import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../../assets/SevenC-logo/SevenC_Healthineers_logo.png";

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
  }, [isOpen]);

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-sky-600 text-white text-sm flex justify-center md:justify-end px-4 py-2 items-center fixed top-0 left-0 w-full z-50">
        <div className="flex items-center space-x-5 animate-fade-in">
          <div className="flex items-center space-x-2">
            <MdLocationOn className="animate-bounce text-lg" />
            <a
              href="https://www.google.co.in/maps/place/Suswani+Complex/@18.4657128,73.8893891,19.17z/data=!4m6!3m5!1s0x3bc2ea603a5daa79:0x45d5771073c08eb4!8m2!3d18.4657647!4d73.889762!16s%2Fg%2F11c5s3gghj?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:font-semibold"
            >
              Pune
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className="animate-pulse transform scale-x-[-1]" />
            <a href="tel:+918484845154" className="hover:text-white hover:font-semibold transition duration-300">
              +91 8484845154
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <HiOutlineMail className="animate-spin-slow text-xl" />
            <a
              href="mailto:KmKazi@7chealthineers.com"
              className="hover:font-semibold"
            >
              KmKazi@7chealthineers.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md fixed top-[32px] left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-auto object-contain transition-transform transform scale-150 hover:scale-125 duration-300"
              />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-x-8 text-black font-medium">
              <li><Link to="/" className="hover:text-sky-600 transition-colors">Home</Link></li>
              <li><Link to="/profile" className="hover:text-sky-600 transition-colors">Profile</Link></li>
              <li><Link to="/product-category" className="hover:text-sky-600 transition-colors">Products</Link></li>
              <li><Link to="/gallery" className="hover:text-sky-600 transition-colors">Gallery</Link></li>
              <li><Link to="/contact-us" className="hover:text-sky-600 transition-colors">Contact</Link></li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 focus:outline-none p-2 rounded-md transition duration-300 hover:bg-gray-200"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-black bg-opacity-35 backdrop-blur-sm z-40 flex justify-center items-start pt-[120px]"
        >
          <div className="w-full bg-white bg-opacity-90 shadow-md p-6 text-center">
            <ul className="flex flex-col space-y-6 text-lg">
              <li className="group">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="relative transition-all duration-300 ease-in-out group-hover:text-sky-600 group-hover:scale-105 group-hover:font-bold"
                >
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="relative transition-all duration-300 ease-in-out group-hover:text-sky-600 group-hover:scale-105 group-hover:font-bold"
                >
                  Profile
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/product-category"
                  onClick={() => setIsOpen(false)}
                  className="relative transition-all duration-300 ease-in-out group-hover:text-sky-600 group-hover:scale-105 group-hover:font-bold"
                >
                  Products
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/gallery"
                  onClick={() => setIsOpen(false)}
                  className="relative transition-all duration-300 ease-in-out group-hover:text-sky-600 group-hover:scale-105 group-hover:font-bold"
                >
                  Gallery
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/contact-us"
                  onClick={() => setIsOpen(false)}
                  className="relative transition-all duration-300 ease-in-out group-hover:text-sky-600 group-hover:scale-105 group-hover:font-bold"
                >
                  Contact
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

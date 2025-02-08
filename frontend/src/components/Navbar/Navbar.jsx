import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-sky-600 text-white text-sm flex justify-center md:justify-end px-4 py-2 items-center fixed top-0 left-0 w-full z-50">
        <div className="flex items-center space-x-4">
          <MdLocationOn />
          <span>Pune</span>
          <FaPhone />
          <span>08048890652</span>
          <HiOutlineMail />
          <span>abc@gmail.com</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md fixed top-8 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Menu in One Line */}
            <div className="flex items-center space-x-10 w-full justify-between">
              <img src="/logo.png" alt="Logo" className="h-12" />
              
              {/* Menu Items - Tailwind Converted */}
              <ul className="hidden md:flex items-center space-x-6 text-black font-medium">
                <li><Link to="/" className="px-4 py-2 hover:text-sky-600">Home</Link></li>
                <li><Link to="/" className="px-4 py-2 hover:text-sky-600">About</Link></li>

                <li><Link to="/ProductCategory" className="px-4 py-2 hover:text-sky-600">Products</Link></li>
                <li><Link to="/" className="px-4 py-2 hover:text-sky-600">Gallery</Link></li>
                <li><Link to="/" className="px-4 py-2 hover:text-sky-600">Contact</Link></li>
              </ul>
            </div>

            {/* Menu Button (Mobile) */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className="md:hidden flex flex-col space-y-4 bg-white shadow-md p-4">
              <li><Link to="/" className="px-4 py-2 hover:text-sky-600">Home</Link></li>
              <li><Link to="/" className="px-4 py-2 hover:text-sky-600">About</Link></li>

              <li><Link to="/ProductCategory" className="px-4 py-2 hover:text-sky-600">Products</Link></li>
              <li><Link to="/" className="px-4 py-2 hover:text-sky-600">Gallery</Link></li>
              <li><Link to="/" className="px-4 py-2 hover:text-sky-600">Contact</Link></li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

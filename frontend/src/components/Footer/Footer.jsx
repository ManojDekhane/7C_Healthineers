import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from '../../assets/SevenC-logo/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Recently Updated Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Recently Updated Products</h4>
            <ul className="space-y-2">
              {[
                "#semiautoanalyzer",
                "#biochemistrysolutions",
                "#semiautolabtech",
                "#biochemistryprecision",
                "#semiautodiagnostics",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-gray-300">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                <li key={index}>
                  {day}: <span className="text-white">09:30 AM - 07:00 PM</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info & Socials */}
          <div>
            {/* Company Info */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-4 mb-6 justify-center md:justify-start">
                <div className="bg-white p-2 rounded-full">
                  <img src={logo} alt="7C Healthineers" className="h-14 w-14 rounded-full transform scale-x-150 scale-y-110" />
                </div>
                <div>
                  <h5 className="text-lg font-bold">7C Healthineers</h5>
                </div>
              </div>
              <div className="flex space-x-4 mb-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300">
                  Follow Page
                </button>
                <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md transition duration-300">
                  Share
                </button>
              </div>
            </div>

            {/* Social Share */}
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>

            <div className="flex justify-center md:justify-start space-x-4">
              {[
                { icon: FaInstagram, href: "#" }, 
                { icon: FaTwitter, href: "#" },
                { icon: FaFacebookF, href: "#" },
                { icon: FaLinkedinIn, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <a key={index} href={href} className="hover:text-white transition duration-300">
                  <Icon className="h-7 w-7 p-1 bg-gray-700 rounded-full hover:bg-gray-600 transition duration-300" />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

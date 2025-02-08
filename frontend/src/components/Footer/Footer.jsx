import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h4 className="font-bold mb-4">RECENTLY UPDATED PRODUCTS</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">#semiautoanalyzer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">#biochemistrysolutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">#semiautolabtech</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">#biochemistryprecision</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">#semiautodiagnostics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">OPENING HOURS</h4>
            <ul className="space-y-2">
              <li>Mon: 09:30AM to 07:00PM</li>
              <li>Tue: 09:30AM to 07:00PM</li>
              <li>Wed: 09:30AM to 07:00PM</li>
              <li>Thu: 09:30AM to 07:00PM</li>
              <li>Fri: 09:30AM to 07:00PM</li>
              <li>Sat: 09:30AM to 07:00PM</li>
              <li>Sun: 09:30AM to 07:00PM</li>
            </ul>
          </div>

          <div>
           

            <div className="mt-8">
              <div className="flex items-center mb-4">
                <img src="" alt="Global Medicals Inc." className="h-12 w-12 rounded-full mr-4" />
                <div>
                  <h5 className="font-bold">7C Healthineers</h5>
                
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Follow Page</button>
                <button className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded">Share</button>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-bold mb-4">SOCIAL SHARE</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">
                  <FaFacebookF className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-white">
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-white">
                  <FaLinkedinIn className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-white">
                  <FaPinterestP className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
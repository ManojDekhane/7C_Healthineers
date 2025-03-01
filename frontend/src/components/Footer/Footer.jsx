import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../assets/SevenC-logo/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

          {/* Sister Companies */}
          <div>
            <h3 className="text-2xl font-bold">Opening Hours</h3>
            <ul className="mt-4 text-gray-300 space-y-2">
              <li><strong>Monday - Saturday :</strong> 10:00 AM - 5:30 PM</li>
              <li><strong>Sunday :</strong> Closed</li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>

          </div>

          {/* Contact Information + Social Media */}
          <div>
            {/* Contact Info */}
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <ul className="mt-4 text-gray-300 space-y-3">
              <li className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-2 text-sky-500" />
                <a
                  href="https://www.google.co.in/maps/place/Suswani+Complex/@18.4657128,73.8893891,19.17z/data=!4m6!3m5!1s0x3bc2ea603a5daa79:0x45d5771073c08eb4!8m2!3d18.4657647!4d73.889762!16s%2Fg%2F11c5s3gghj?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:font-semibold"
                >
                  Pune, India
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaPhone className="mr-2 text-sky-500 transform scale-x-[-1]" />
                <a href="tel:+918484845154" className="hover:text-white hover:font-semibold transition duration-300">
                  +91 8484845154
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2 text-sky-500" />
                <a
                  href="mailto:KmKazi@7chealthineers.com"
                  className="hover:text-white hover:font-semibold"
                >
                 
                  KmKazi@7chealthineers.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2 text-sky-500" />
                <a
                  href="mailto:info@7chealthineers.com"
                  className="hover:text-white hover:font-semibold"
                >
                 
                 info@7chealthineers.com
                </a>
              </li>
            </ul>

            {/* Social Media Icons */}
            <h4 className="text-lg font-semibold mt-6">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              {[
                { icon: FaInstagram, href: "#" },
                { icon: FaTwitter, href: "#" },
                { icon: FaFacebookF, href: "#" },
                { icon: FaLinkedinIn, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="hover:text-white transition duration-300"
                >
                  <Icon className="h-7 w-7 p-1 bg-gray-700 rounded-full hover:bg-gray-600 transition duration-300" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-base sm:text-lg">
          <p>© {new Date().getFullYear()} Seven C Healthineers LLP.</p>
          <p>All Rights Reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link to="/PrivacyPolicy" className="hover:text-white transition duration-300">Privacy Policy</Link>
            <Link to="/TermsAndConditions" className="hover:text-white transition duration-300">Terms & Conditions</Link>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import criticalcare from "../../image/criticalcare.jpg";
import Pathology from "../../image/Pathology.jpg";
import Radiology from "../../image/Radiology.png";
const ProductCategory = () => {
  return (
    <>
    <Navbar/>
    
  
    <div className="pt-60 px-6 flex justify-center items-center flex-wrap gap-12 pb-40">
        
      {/* Card 1 */}
      <div className="max-w-xs h-92 cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <Link to="/" className="block h-full">
          <img
            src={Radiology}
            alt="Mumbai"
            className="w-full h-56 object-cover"
          />
          <div className="p-4 bg-white">
          <p className="text-xl text-gray-1000 font-bold">
  Radiology And Diagnostic
</p>

          </div>
        </Link>
      </div>

      {/* Card 2 */}
      <div className="max-w-xs h-92 cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <Link to="/Goa" className="block h-full">
          <img
            src={Pathology}
            alt="Goa"
            className="w-full h-56 object-cover"
          />
          <div className="p-4 bg-white">
          <p className="text-xl text-gray-900 font-bold">
  <h1>Pathology</h1>
</p>

          </div>
        </Link>
      </div>

      {/* Card 3 */}
      <div className="max-w-xs h-92 cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <Link to="/Pune" className="block h-full">
          <img
            src={criticalcare}
            alt="Pune"
            className="w-full h-56 object-cover"
          />
          <div className="p-4 bg-white">
          <p className="text-xl text-gray-900 font-bold">
  <h1>Critical Care</h1>
</p>
          </div>
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProductCategory;

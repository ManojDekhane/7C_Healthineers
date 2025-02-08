import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
const ProductCategory = () => {
  return (
    <>
    <Navbar/>
    
  
    <div className="pt-60 px-6 flex justify-center items-center flex-wrap gap-12 pb-40">
        
      {/* Card 1 */}
      <div className="max-w-xs h-92 cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <Link to="/" className="block h-full">
          <img
            src="https://onestepdiagnostic.com/wp-content/uploads/2024/01/Houston-Medical-Imaging.png"
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
            src="https://www.pathreflab.com/wp-content/uploads/2023/03/dermatopathology-800x419.jpg"
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
            src="https://i.guim.co.uk/img/media/60bba82aaeedb75bb5d1d50e51f5e64283ae491a/0_325_4879_2928/master/4879.jpg?width=620&dpr=2&s=none&crop=none"
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

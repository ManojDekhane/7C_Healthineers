import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../components/ContactUs/ContactUs";
const Home = () => {
  return (
    <>
      <Navbar />
      {/* Full Page Background Image */}
      <div
        className="w-full min-h-screen bg-cover relative top-20"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/beautiful-blue-background-that-shades-from-light-dark-concept-sky-air-sea_71793-40.jpg")',
          backgroundAttachment: 'fixed', // Ensures the background stays fixed
        }}
      >
        {/* Card placed at the bottom of the background image */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-8 shadow-lg rounded-lg text-center max-w-2xl z-10">
          <h1 className="text-3xl font-bold text-sky-700">7C Healthineers</h1>
          <p className="text-gray-600 mt-4">
            "Right Here, You Have An Option" Welcome to our "7C Healthineers" company! We are a
            leading provider of cutting-edge solutions for the healthcare industry.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center space-x-4">
            <button className="bg-sky-600 text-white px-6 py-3 rounded-md font-semibold transition duration-300 hover:bg-black">
              VIEW PRODUCTS
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-md font-semibold transition duration-300 hover:bg-sky-600">
              SEND ENQUIRY
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white py-16"> {/* Overall page padding and background */}
          <h1 className="text-4xl font-bold mb-4 py-12">Our Products</h1>
          <div className=" flex flex-col md:flex-row flex-wrap gap-6 justify-center "> {/* Responsive grid */}

            {/* Product Card (Reusable Component) */}
            <ProductCard
              image="https://productimages.withfloats.com/tile/678b3ff4222fa4966c5b1702.png"
              name="Yumizen CA40 Semi-automated Clinical..."
              price="INR 117000"
            />
            <ProductCard
              image="https://productimages.withfloats.com/tile/6633802d0070ce584f5729c4.jpg"
              name="AGAPPE Mispa HbX Portable Haemoglobin..."
              price="INR 19000"
            />
            <ProductCard
              image="https://productimages.withfloats.com/tile/66337f840070ce584f572989.jpg"
              name="AGAPPE Mispa Chem Dx Auto Dry Biochemistry..."
              price="INR 375000"
            />

          </div>

          <div className="mt-8 text-center">
            <button className="bg-sky-600 hover:bg-black text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
              VIEW ALL PRODUCTS
            </button>
          </div>

        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center mt-24 md:mx-20">About Our Organization</h1> {/* Responsive margin */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8"> {/* Responsive flexbox */}
          <img
            src="https://fpimages.withfloats.com/tile/641aa9c0c225e200011b5209.jpg"
            alt="Organization"
            className="h-auto w-full md:h-[350px] md:w-[700px] rounded-lg object-cover"
          />
          <p className="max-w-[90vw] md:max-w-[600px] text-base leading-relaxed md:text-lg"> {/* Responsive paragraph width */}
            India is a country where culture resonates, tradition speaks, beauty entices, and variety fascinates.
            India’s religious, linguistic, and cultural diversity is unsurpassed. India is known for its rich history,
            many ethnicities, and enormous landscapes.
            <br />
            <br />

          </p>
        </div>
      </div>
      <div className="m-5">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
};
const ProductCard = ({ image, name, price }) => (
  <div className="border rounded-lg shadow-md p-4 flex flex-col items-center w-61 "> {/* Card Styling */}
    <img src={image} alt={name} className="w-30 h-32 object-contain mb-2" /> {/* Image styling */}
    <h3 className="text-lg font-medium mb-1">{name}</h3>
    <p className="text-gray-600 mb-2">{price}</p>
    {/* You can add more details or buttons here if needed */}
  </div>
);

export default Home;

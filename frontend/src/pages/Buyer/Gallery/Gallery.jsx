import React from "react";
import productData from "../../../productData";

// Import Videos
import video1 from "../../../assets/Video/video1.mp4";
import video2 from "../../../assets/Video/video2.mp4";

// Import Static Images
import image1 from "../../../assets/GalleryImage/image1.jpg";
import image2 from "../../../assets/GalleryImage/image2.jpg";
import image3 from "../../../assets/GalleryImage/image3.jpg";
import image4 from "../../../assets/GalleryImage/image4.jpg";
import image5 from "../../../assets/GalleryImage/image5.jpg";
import image6 from "../../../assets/GalleryImage/image6.jpg";

// Static Images Array
const staticImages = [image1, image2, image3, image4, image5, image6];

const Gallery = () => {
  // Extract product images from productData
  const productImages = productData.flatMap(
    (category) =>
      category.subCategories?.flatMap(
        (sub) =>
          sub.products?.filter((product) => product.image).map((product) => product.image) || []
      ) || []
  );

  // Combine product images and static images
  const allImages = [...productImages, ...staticImages];

  return (
    <div className="container mx-auto p-6 mt-20">
      {/* Gallery Section */}
      <h2 className="text-3xl font-bold text-center mb-7 text-gray-800 p-10 mt-16">
       Product Gallery
      </h2>

      {/* Combined Product & Static Images Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allImages.map((img, index) => (
          <div
            key={`image-${index}`}
            className="border rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={img}
              alt={`Image ${index + 1}`}
              className="w-full h-auto object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Video Section */}
      <h2 className="text-3xl font-bold text-center mb-7 text-gray-800 p-10 mt-16">
        Video Gallery
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
        <video width="500" height="500" controls>
          <source src={video1} type="video/mp4" />
        </video>
        <video width="500" height="500" controls>
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Gallery;

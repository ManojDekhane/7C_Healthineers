import React from 'react';
import { Helmet } from "react-helmet-async";
import productData from '../../../productData';
import video1 from "../../../assets/Video/video1.mp4";
import video2 from "../../../assets/Video/video2.mp4";
// Import Static Images
import image1 from "../../../assets/GalleryImage/image1.jpg";
import image2 from "../../../assets/GalleryImage/image2.jpg";
import image3 from "../../../assets/GalleryImage/image3.jpg";
import image4 from "../../../assets/GalleryImage/image4.jpg";
import image5 from "../../../assets/GalleryImage/image5.jpg";
import image6 from "../../../assets/GalleryImage/image6.jpg";
import image7 from "../../../assets/GalleryImage/image7.jpg";
import image8 from "../../../assets/GalleryImage/image8.jpg";
import image9 from "../../../assets/GalleryImage/image9.jpg";
import image10 from "../../../assets/GalleryImage/image10.jpg";
import image11 from "../../../assets/GalleryImage/image11.jpg";
import image12 from "../../../assets/GalleryImage/image12.jpg";
import image13 from "../../../assets/GalleryImage/image13.jpg";
// Static Images Array
const staticImages = [image1, image3, image4, image5, image6, image7, image2, image8,
    image9, image10, image11, image12, image13
];

const Gallery = () => {
    // Extract product images from productData
    const productImages = productData.flatMap(category =>
        category.subCategories?.flatMap(sub =>
            sub.products?.filter(product => product.image).map(product => product.image) || []
        ) || []
    );

    // Combine product images with static images
    const allImages = [...staticImages, ...productImages];

    return (
        <>
            <Helmet>
                <title>Gallery - Pune Biomedical Equipment | Seven C Healthineers</title>
                <meta name="description" content="Explore images and videos of our biomedical products, healthcare innovations, and diagnostic machines by Seven C Healthineers in Pune, India." />
                <meta name="keywords" content="Gallery, Seven C Healthineers, Biomedical Equipment Gallery, Medical Devices Pune, Diagnostic Machines, ICU equipment, India healthcare" />
                <meta property="og:title" content="Gallery - Seven C Healthineers" />
                <meta property="og:description" content="Discover our healthcare innovations and biomedical product visuals." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.7chealthineers.com/gallery" />
                <link rel="canonical" href="https://www.7chealthineers.com/gallery" />
            </Helmet>


            <div className="container mx-auto p-6 mt-28">
                {/* Media Gallery - Static Images Only */}
                <h2 className="text-3xl font-bold text-center mb-7 text-gray-800 p-10">Media Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {staticImages.map((img, index) => (
                        <div key={index} className="border rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src={img} alt={`Static Image ${index + 1}`} className="w-full h-auto object-cover aspect-[4/3]" />
                        </div>
                    ))}
                </div>

                {/* Product Gallery */}
                <h2 className="text-3xl font-bold text-center mb-7 text-gray-800 mt-16 p-10">Product Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {productImages.map((img, index) => (
                        <div key={index} className="border rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                            <img src={img} alt={`Product Image ${index + 1}`} className="w-full h-auto object-cover aspect-[4/3]" />
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl font-bold text-center mb-7 text-gray-800 p-10 mt-16">
                    Video Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center mt-10">
                    <div className="flex justify-center">
                        <video className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-lg" controls>
                            <source src={video1} type="video/mp4" />
                        </video>
                    </div>
                    <div className="flex justify-center">
                        <video className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-lg" controls>
                            <source src={video2} type="video/mp4" />
                        </video>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Gallery;

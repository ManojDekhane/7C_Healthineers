import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules"; 

// Import Images
import slide_image_1 from "../../../assets/MRI-images/MRI/esaote-s-scan.webp";
import slide_image_2 from "../../../assets/MRI-images/MRI/g-scan-brio.webp";
import slide_image_3 from "../../../assets/Ultrasound/Ultrasound/mylab-x5.webp";
import slide_image_4 from "../../../assets/MRI-images/MRI/o-scan.webp";
import slide_image_5 from "../../../assets/Ultrasound/Ultrasound/MyLab-A50.webp";
import slide_image_6 from "../../../assets/Ultrasound/Ultrasound/mylab-x7.webp";

// Product data with image and link
const products = [
  { image: slide_image_1, name: "S-Scan" },
  { image: slide_image_2, name: "G-Scan%20Brio" },
  { image: slide_image_3, name: "MyLab™X5" },
  { image: slide_image_4, name: "O-Scan" },
  { image: slide_image_5, name: "MyLab™A50" },
  { image: slide_image_6, name: "MyLab™X7" },
];

const Carousel = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 py-10 w-full mt-30">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1000}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={-20}
        coverflowEffect={{
          rotate: 0,
          stretch: -40,
          depth: 250,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full max-w-screen-xl"
      >
        {products.map((product, index) => {
          // Encode the product name for URL
          const encodedProductName = encodeURIComponent(product.name.toLowerCase());

          return (
            <SwiperSlide key={index} className="flex flex-col items-center">
              <a href={`/product/${encodedProductName}`} className="text-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-auto max-h-[600px] object-contain rounded-xl shadow-md"
                />
                {/* Product Name Below Image */}
                <h3 className="mt-4 text-lg font-bold text-black-700">
                  {product.name.replace("%20", " ")}
                </h3>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;

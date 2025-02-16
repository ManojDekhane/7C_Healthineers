import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // ✅ Import autoplay styles
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules"; // ❌ Removed Navigation module

// Import Images
import slide_image_1 from "../../../assets/MRI-images/MRI/esaote-s-scan.webp";
import slide_image_2 from "../../../assets/MRI-images/MRI/g-scan-brio.webp";
import slide_image_3 from "../../../assets/Ultrasound/Ultrasound/mylab-x5.webp";
import slide_image_4 from "../../../assets/MRI-images/MRI/o-scan.webp";
import slide_image_5 from "../../../assets/PathologyMachines/Smart-7-Advance.png";
import slide_image_6 from "../../../assets/Ultrasound/Ultrasound/MyLab-A50.webp";
import slide_image_7 from "../../../assets/PathologyMachines/Xp-300png.png";

const images = [
  slide_image_1,
  slide_image_2,
  slide_image_3,
  slide_image_4,
  slide_image_5,
  slide_image_6,
  slide_image_7,
];

const Carousel = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 py-10 w-full">
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
        modules={[EffectCoverflow, Pagination, Autoplay]} // ❌ Removed Navigation module
        className="w-full max-w-screen-xl"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={img}
              alt={`slide_image_${index}`}
              className="w-auto max-h-[600px] object-contain rounded-xl shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

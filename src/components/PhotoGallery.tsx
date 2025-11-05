import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade'; // Add fade effect styles

import './PhotoGallery.css';

// import required modules
import { Autoplay, EffectFade } from 'swiper/modules'; // Import EffectFade

// Import images
import g1 from '../assets/g1.jpg';
import g2 from '../assets/g2.jpg';
import g3 from '../assets/g3.jpg';
import g4 from '../assets/g4.jpg';
import g5 from '../assets/g5.jpg';
import g6 from '../assets/g6.jpg';
import g7 from '../assets/g7.jpg';
import g8 from '../assets/g8.jpg';
import g9 from '../assets/g9.jpg';
import g10 from '../assets/g10.jpg';

// Distribute images into four groups for the four carousels
const images_large = [g1, g5, g9];
const images_small1 = [g2, g6, g10];
const images_small2 = [g3, g7];
const images_medium = [g4, g8];

const commonSwiperProps = {
  modules: [Autoplay, EffectFade], // Add EffectFade module
  slidesPerView: 1,
  loop: true,
  allowTouchMove: false,
  effect: 'fade' as const, // Set effect to fade
  speed: 1500, // Slow down the transition speed
};

export default function PhotoGallery() {
  return (
    <section id="gallery" className="pb-5">
      {/* The grid itself is outside the container to be full-width */}
      <div className="gallery-grid">
        {/* Large vertical carousel on the left */}
        <div className="gallery-item large-item">
          <Swiper
            {...commonSwiperProps}
            autoplay={{ delay: 7000, disableOnInteraction: false }} // Slower delay
          >
            {images_large.map((img, i) => (
              <SwiperSlide key={i}><img src={img} alt="" /></SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Container for the right side */}
        <div className="right-column">
          {/* Top-right container for two small carousels */}
          <div className="top-right-row">
            <div className="gallery-item small-item">
              <Swiper
                {...commonSwiperProps}
                autoplay={{ delay: 8500, disableOnInteraction: false }} // Slower delay
              >
                {images_small1.map((img, i) => (
                  <SwiperSlide key={i}><img src={img} alt="" /></SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="gallery-item small-item">
              <Swiper
                {...commonSwiperProps}
                autoplay={{ delay: 6500, disableOnInteraction: false }} // Slower delay
              >
                {images_small2.map((img, i) => (
                  <SwiperSlide key={i}><img src={img} alt="" /></SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Bottom-right medium carousel */}
          <div className="gallery-item medium-item">
            <Swiper
              {...commonSwiperProps}
              autoplay={{ delay: 9000, disableOnInteraction: false }} // Slower delay
            >
              {images_medium.map((img, i) => (
                <SwiperSlide key={i}><img src={img} alt="" /></SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

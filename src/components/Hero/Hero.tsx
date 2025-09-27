'use client';
import React from 'react';
import './hero.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

const Hero = () => {

  const images = ['./assets/hero/hero1.jpg', './assets/hero/hero2.jpg', './assets/hero/hero3.jpg'];

  return (
    <div className='hero'>
      <div className='hero__title'>
        <h1>Collectif d&apos;artistes émergents lyonnais</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor ex et sapien sollicitudin sollicitudin. Fusce porta pharetra vestibulum. Duis vestibulum varius dolor, non rhoncus ex. Maecenas consequat luctus ipsum sed porta. Vestibulum massa nibh, tincidunt vitae lacinia at, mattis eget nisi. Nulla eu elit pretium, tempor tortor ac, aliquet leo.</p>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        allowTouchMove={false}
        loop
        className='swiper'
      >
        {images.map((image, i) =>
          <SwiperSlide key={i}>
            <img src={image} alt={`hero${i+1}`} />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default Hero;
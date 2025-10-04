'use client';
import React from 'react';
import './hero.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

const Hero = () => {

  const images = ['./assets/hero/hero1.jpg', './assets/hero/hero2.jpg', './assets/hero/hero3.jpg'];

  return (
    <section className='hero'>
      <div className='hero__title'>
        <img src='./assets/target_live.png' alt='target-live' />
        <h1>Collectif d&apos;artistes émergents lyonnais</h1>
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
    </section>
  );
};

export default Hero;
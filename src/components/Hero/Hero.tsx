'use client';
import React from 'react';
import './hero.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-scroll';
import Section from '../Section/Section';

const Hero = () => {
  const images = ['./assets/hero/heroMain.jpg'];

  return (
    <Section color='black'>
      <section className='hero'>
        <div className='hero__title'>
          <img src='./assets/target_live.png' alt='target-live' />
          <h1>Collectif d&apos;artistes émergents lyonnais</h1>
          <Link to='contact' smooth duration={600}>
            <img src='./assets/right_arrow.svg' alt="" />
            Contactez-nous
          </Link>
        </div>
        <div className='hero__bgColor'></div>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          allowTouchMove={false}
          loop
          className='swiper'
        >
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <img src={image} alt={`hero${i + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Section>
  );
};

export default Hero;

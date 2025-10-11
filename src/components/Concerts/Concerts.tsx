'use client';
import React from 'react';
import './concerts.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { concerts } from '../../../data/data';

const Concerts = () => {
  return (
    <div className='section'>
    <section className='concerts container' id='concerts'>
      <h1><div></div>Nos prochaines dates</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination
        slidesPerView={1}
        allowTouchMove={true}
        className='swiper'
        loop
      >
        {concerts.map((concert, i) => (
          <SwiperSlide key={i}>
            <img
              onClick={() => window.open(concert.link, '_blank')}
              src={concert.image}
              alt={`concert${i + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    </div> 
  );
};

export default Concerts;

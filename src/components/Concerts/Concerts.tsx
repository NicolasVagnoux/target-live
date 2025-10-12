'use client';
import React from 'react';
import './concerts.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { concerts } from '../../../data/data';
import Section from '../Section/Section';

const Concerts = () => {
  return (
    <Section color='black'>
      <section className='concerts container' id='concerts'>
        <h1>
          <div></div>Nos prochaines dates
        </h1>
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
    </Section>
  );
};

export default Concerts;

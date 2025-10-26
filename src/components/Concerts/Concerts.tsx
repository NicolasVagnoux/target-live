'use client';
import React, { useEffect, useRef, useState } from 'react';
import './concerts.scss';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { concerts } from '../../../data/data';
import Section from '../Section/Section';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Concert } from '../../../data/types';
import { NavigationOptions } from 'swiper/types';
import ConcertsList from './ConcertsList';
import { motion, AnimatePresence } from 'framer-motion';

const Concerts = () => {
  const starredConcerts = concerts.filter((concert) => concert.star);
  const [activeConcert, setActiveConcert] = useState<Concert>(
    starredConcerts[0]
  );
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (
      swiper &&
      swiper.params &&
      swiper.params.navigation &&
      prevRef.current &&
      nextRef.current
    ) {
      (swiper.params.navigation as NavigationOptions).prevEl = prevRef.current;
      (swiper.params.navigation as NavigationOptions).nextEl = nextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <Section color='black'>
      <section className='concerts container' id='concerts'>
        <h1>
          <div></div>Nos prochaines dates
        </h1>
        <div className='concerts__grid'>
          <div className='concerts__grid__left'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeConcert.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <p>{activeConcert?.date}</p>
                <p>{activeConcert?.title}</p>
                <p>{activeConcert?.location}</p>
                <p>{activeConcert?.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <>
            <Swiper
              modules={[Navigation]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) =>
                setActiveConcert(starredConcerts[swiper.activeIndex])
              }
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              slidesPerView={1.2}
              speed={500}
              allowTouchMove={false}
              className='swiper'
            >
              {starredConcerts.map((concert, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={concert.image}
                    alt={`concert${i + 1}`}
                  />
                </SwiperSlide>
              ))}
              <div
                ref={prevRef}
                className='concerts-prev swiper-button-disabled'
              >
                <ArrowLeft size={40} color='white' />
              </div>
              <div
                ref={nextRef}
                className='concerts-next swiper-button-disabled'
              >
                <ArrowRight size={40} color='white' />
              </div>
            </Swiper>
          </>
        </div>
        <ConcertsList />
      </section>
    </Section>
  );
};

export default Concerts;

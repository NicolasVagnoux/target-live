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

const Concerts = () => {
  const [activeConcert, setActiveConcert] = useState<Concert>(concerts[0]);
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
            <p>{activeConcert?.date}</p>
            <p>{activeConcert?.title}</p>
            <p>{activeConcert?.description}</p>
          </div>
          <>
            <Swiper
              modules={[Navigation]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) =>
                setActiveConcert(
                  concerts.find(
                    (c) => c.id === swiper.activeIndex + 1
                  ) as Concert
                )
              }
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              slidesPerView={1.2}
              allowTouchMove={false}
              className='swiper'
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
            <div ref={prevRef} className='concerts-prev swiper-button-disabled'>
              <ArrowLeft size={40} color='white' />
            </div>
            <div ref={nextRef} className='concerts-next swiper-button-disabled'>
              <ArrowRight size={40} color='white' />
            </div>
          </>
        </div>
      </section>
    </Section>
  );
};

export default Concerts;

import { useMemo } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function WhatWeDoComponent() {
  const swiperOptions = useMemo(() => {
    return {
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: { delay: 3000 }
    };
  }, []);

  return (
    <>
      <section className="wedo">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-capitalize text-center mb-4 mb-lg-5">
            What We Do
          </h2>
          <p className="p-18 text-center mb-5">
            Payriot Payments has many years experience in all aspects of the
            International and online financial world. This allows us to offer
            the best solution, one which is tailored to the exact requirements
            of your business.
          </p>
          <div className="swiper swipertext w-100">
            <Swiper {...swiperOptions}>
              <SwiperSlide>
                <h1 id="spin1" className="big-title text-center">
                  Approval Rate?
                  <span id="spin2" className="big-quest orange">  90</span>
                </h1>
              </SwiperSlide>
              <SwiperSlide>
                <h1 className="big-title text-center">
                  Uptime?
                  <span className="big-quest orange">  98%</span>
                </h1>
              </SwiperSlide>
              <SwiperSlide>
                <h1 className="big-title text-center">
                  Amount of currencies?
                  <span className="big-quest orange">  142</span>
                </h1>
              </SwiperSlide>
              <SwiperSlide>
                <h1 className="big-title text-center">
                  Where are we based?
                  <span className="big-quest orange">  UK</span>
                </h1>
              </SwiperSlide>
              <SwiperSlide>
                <h1 className="big-title text-center">
                  Do we have a support team?
                  <span className="big-quest orange">  Absolutely</span>
                </h1>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

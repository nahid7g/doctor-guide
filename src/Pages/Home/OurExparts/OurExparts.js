import React from 'react';
import ExpartCard from '../../../components/ExpartCard/ExpartCard';
import './OurExparts.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

const OurExparts = () => {
  return (
    <div className='expert container mx-auto'>
      <div className='text-center mb-4 font-semibold'>
        <h2 className='text-3xl font-bold'>Our Medical Experts</h2>
        <p className='w-2/3 mx-auto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum augue quis augue ornare, eget faucibus felis pharetra. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      {/* <div className='grid grid-cols-3 gap-4'> */}
      {/* <SwiperSlide>
            <ExpartCard />
          </SwiperSlide> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className='mySwiper'
      >
        <SwiperSlide>
          <ExpartCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExpartCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExpartCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExpartCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExpartCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExpartCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExpartCard />
        </SwiperSlide>
      </Swiper>
    </div>
    // </div>
  );
};

export default OurExparts;

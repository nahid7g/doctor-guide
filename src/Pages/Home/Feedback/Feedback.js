import React from 'react';
import './Feedback.css';
import FeedbackCard from '../../../components/FeedbackCard/FeedbackCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

const Feedback = () => {
  return (
    <div className='feedback w-11/12 mx-auto'>
      <div className='feedback-container'>
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <FeedbackCard />
          </SwiperSlide>
          <SwiperSlide>
            <FeedbackCard />
          </SwiperSlide>
          <SwiperSlide>
            <FeedbackCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;

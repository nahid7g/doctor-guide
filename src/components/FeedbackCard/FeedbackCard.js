import React from 'react';
import './FeedbackCard.css';
import guy from '../../assets/guy.png';

const FeedbackCard = () => {
  return (
    <div className='feedback-card py-8 text-white'>
      <h2 className='text-3xl font-bold text-center'>Find The Care You Need</h2>
      <div className='grid items-center grid-cols-2'>
        <div className='mx-auto'>
          <img src={guy} alt='Free guy' />
        </div>
        <div className='flex flex-col gap-4'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan
            duis posuere scelerisque curabitur lorem. Viverra at venenatis, arcu
            et. Elementum nunc eleifend ipsum mauris ut nunc aliquet nulla
            aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className='font-semibold'>
            <h4>TOM COOPPER </h4>
            <h5>Managing Director Or Art</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;

import React from 'react';
import './Feedback.css';
import FeedbackCard from '../../../components/FeedbackCard/FeedbackCard';

const Feedback = () => {
  return (
    <div className='feedback w-11/12 mx-auto'>
      <div className='feedback-container'>
        <FeedbackCard />
      </div>
    </div>
  );
};

export default Feedback;

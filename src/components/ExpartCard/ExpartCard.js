import React from 'react';
import doctorz from '../../assets/doctorz.png';
import flag2 from '../../assets/flag2.png';

const ExpartCard = () => {
  return (
    <div>
      <img src={doctorz} alt='Doctor Z' />
      <div className='flex justify-between p-4'>
        <p>Dr. Emrul Kayes</p>
        <img src={flag2} alt='Flag 2' />
      </div>
      <div className='flex gap-2 px-4'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
        <button className='btn btn-danger'>Book Now</button>
      </div>
    </div>
  );
};

export default ExpartCard;

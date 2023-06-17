import React from 'react';
import orthopedic from '../../assets/orthopedic.png';

const ServicesCard = () => {
  return (
    <div>
      <img src={orthopedic} alt='Orthopedic' />
      <p className='bg-fuchsia-800 py-2 text-center text-white'>
        Orthopedic Clinic
      </p>
    </div>
  );
};

export default ServicesCard;

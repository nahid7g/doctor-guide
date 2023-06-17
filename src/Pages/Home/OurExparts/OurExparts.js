import React from 'react';
import ExpartCard from '../../../components/ExpartCard/ExpartCard';

const OurExparts = () => {
  return (
    <div className='container'>
      <div className='text-center mb-4 font-semibold'>
        <h2 className='text-3xl font-bold'>Our Medical Experts</h2>
        <p className='w-2/3 mx-auto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum augue quis augue ornare, eget faucibus felis pharetra. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <ExpartCard />
        <ExpartCard />
        <ExpartCard />
      </div>
    </div>
  );
};

export default OurExparts;

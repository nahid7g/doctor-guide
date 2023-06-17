import React from 'react';
import ServicesCard from '../../../components/ServicesCard/ServicesCard';

const OurServices = () => {
  return (
    <div className='container'>
      <div className='text-center mb-4 font-semibold'>
        <h2 className='text-3xl font-bold'>Find The Care You Need</h2>
        <p>Services We Provide</p>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
      <div className='flex justify-center my-6'>
        <button className='btn btn-warning'>Make Appointment</button>
      </div>
    </div>
  );
};

export default OurServices;

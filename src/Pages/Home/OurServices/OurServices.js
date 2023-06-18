import React from 'react';
import ServicesCard from '../../../components/ServicesCard/ServicesCard';
import OrangeButton from '../../../components/Buttons/OrangeButton';

const OurServices = () => {
  return (
    <div className='container mx-auto'>
      <div className='text-center mb-4 font-semibold'>
        <h2 className='text-3xl font-bold'>Find The Care You Need</h2>
        <p>Services We Provide</p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
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
        <OrangeButton>LOAD MORE DEPARTMENTS</OrangeButton>
      </div>
    </div>
  );
};

export default OurServices;

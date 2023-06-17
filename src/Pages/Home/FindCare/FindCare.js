import React from 'react';
import './FindCare.css';
import doctorx from '../../../assets/doctor-x.png';
import doctory from '../../../assets/doctor-y.png';
import elipse from '../../../assets/elipse.png';
import dotGrid from '../../../assets/dot-grid.png';
import OrangeButton from '../../../components/Buttons/OrangeButton';

const FindCare = () => {
  return (
    <section className='find-care relative'>
      <img className='absolute top-0 left-0' src={elipse} alt='Elipse' />
      <img className='absolute top-10 left-60' src={dotGrid} alt='Dot grid' />
      <img
        className='absolute bottom-10 left-80'
        src={dotGrid}
        alt='Dot grid'
      />
      <div className='container grid md:grid-cols-3 ml-auto justify-center items-center gap-2'>
        <div className='flex flex-col gap-4 mt-8'>
          <h2 className='text-3xl font-bold'>Find The Care You Need</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <div>
            <OrangeButton>Make Appointment</OrangeButton>
          </div>
        </div>
        <div className='doctor'>
          <img src={doctorx} alt='Doctor X' />
        </div>
        <div className='doctor'>
          <img src={doctory} alt='Doctor y' />
        </div>
      </div>
    </section>
  );
};

export default FindCare;

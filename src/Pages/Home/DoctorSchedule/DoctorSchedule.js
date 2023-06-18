import React from 'react';
import doctorm from '../../../assets/doctorm.png';
import SmallCard from '../../../components/SmallCard/SmallCard';
import ScheduleSlider from '../../../components/ScheduleSlider/ScheduleSlider';

const DoctorSchedule = () => {
  return (
    <section>
      <div className='container grid md:grid-cols-2 items-center justify-center'>
        <div className='mx-auto'>
          <h2 className='text-3xl font-bold mb-4'>Doctor’s Schedule Today</h2>
          <div className='flex flex-col gap-8'>
            <ScheduleSlider />
            <ScheduleSlider />
            <ScheduleSlider />
            <ScheduleSlider />
          </div>
        </div>
        <div className='relative'>
          <span className='absolute top-20 left-20'>
            <SmallCard bgColor='bg-fuchsia-800' />
          </span>
          <img
            className='mx-auto'
            style={{ height: '400px' }}
            src={doctorm}
            alt='Doctor Y'
          />
        </div>
      </div>
    </section>
  );
};

export default DoctorSchedule;

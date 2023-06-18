import React from 'react';
import divider from '../../assets/divider-sm.png';

const ScheduleSlider = () => {
  return (
    <div>
      <div className='flex gap-12 items-center mb-4'>
        <p className='text-red-600'>08:00</p>
        <div>
          <h3 className='font-semibold'>General Practitioner</h3>
          <h4>Dr. Robbert Algazali</h4>
        </div>
      </div>
      <img className='w-2/4' src={divider} alt='divider' />
    </div>
  );
};

export default ScheduleSlider;

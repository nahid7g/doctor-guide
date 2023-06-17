import React from 'react';
import human from '../../assets/Vector-human.png';
import divider from '../../assets/divider.png';

const Stats = () => {
  return (
    <div className='flex flex-col gap-2 items-center justify-center text-white'>
      <img src={human} alt='Human' />
      <p className='text-4xl font-bold'>50</p>
      <img src={divider} alt='Divider' />
      <h3>Medical Experts</h3>
    </div>
  );
};

export default Stats;

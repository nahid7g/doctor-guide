import React from 'react';
import Stats from '../../../components/Stats/Stats';
import './OurStats.css';

const OurStats = () => {
  return (
    <section
      style={{ minHeight: '400px' }}
      className='our-stats flex flex-wrap items-center justify-around p-4 gap-4'
    >
      <Stats />
      <Stats />
      <Stats />
      <Stats />
    </section>
  );
};

export default OurStats;

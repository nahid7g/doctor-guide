import React from 'react';
import Stats from '../../../components/Stats/Stats';
import './OurStats.css';

const OurStats = () => {
  return (
    <section
      style={{ height: '400px' }}
      className='our-stats flex items-center justify-around'
    >
      <Stats />
      <Stats />
      <Stats />
      <Stats />
    </section>
  );
};

export default OurStats;

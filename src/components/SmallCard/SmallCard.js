import React from 'react';
import person from '../../assets/person.png';

const SmallCard = ({ bgColor }) => {
  return (
    <div className='flex items-center gap-2'>
      <div
        className={`h-14 w-14 rounded-full flex items-center justify-center ${bgColor}`}
      >
        <img src={person} alt='Person' />
      </div>
      <div>
        <p>Consult Online</p>
        <p>Best Solution</p>
      </div>
    </div>
  );
};

export default SmallCard;

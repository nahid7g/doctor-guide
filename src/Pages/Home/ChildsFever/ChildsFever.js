import React from 'react';
import doctory from '../../../assets/doctor-y.png';
import SmallCard from '../../../components/SmallCard/SmallCard';
import bag from '../../../assets/bag.png';
import dotGrid from '../../../assets/dotgrid-sm.png';

const ChildsFever = () => {
  return (
    <section>
      <div className='container mx-auto grid md:grid-cols-2 items-center justify-center'>
        <div className='relative'>
          <span className='absolute top-0 left-0'>
            <SmallCard bgColor='bg-fuchsia-800' />
          </span>
          <span className='absolute bottom-0 right-0'>
            <SmallCard bgColor='bg-indigo-500' />
          </span>
          <img
            className='absolute top-20 right-20'
            src={dotGrid}
            alt='Dot grid sm'
          />
          <img
            className='mx-auto'
            style={{ height: '400px' }}
            src={doctory}
            alt='Doctor Y'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-3xl font-bold'>
            Sick Kid? How to Deal with a Child’s Fever: 4 Steps
          </h2>
          <div className='flex flex-col gap-4'>
            <p className='flex gap-3 items-center'>
              <img className='h-7 w-7' src={bag} alt='Fast Aid' />
              <span>Cras sit sed nec a nunc</span>
            </p>
            <p className='flex gap-3 items-center'>
              <img className='h-7 w-7' src={bag} alt='Fast Aid' />
              <span>Tempor mauris mauris in</span>
            </p>
            <p className='flex gap-3 items-center'>
              <img className='h-7 w-7' src={bag} alt='Fast Aid' />
              <span>Nibh turpis praesent pretium</span>
            </p>
            <p className='flex gap-3 items-center'>
              <img className='h-7 w-7' src={bag} alt='Fast Aid' />
              <span>Cras sit sed nec a nunc</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildsFever;

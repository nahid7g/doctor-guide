import React from 'react';
import './Newsletter.css';
import doctorx from '../../../assets/doctor-x.png';

const Newsletter = () => {
  return (
    <section className='my-4 mx-4 newsletter'>
      <div className='p-4 grid md:grid-cols-3 items-center gap-4 bg-cyan-600'>
        <div className='mx-auto'>
          <img src={doctorx} alt='Doctor X' />
        </div>
        <div className='md:col-span-2 flex flex-col gap-4 mx-auto'>
          <h2 className='text-2xl text-white'>Subscribe Now</h2>
          <p className='text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec.
          </p>
          <div className='relative'>
            <input
              type='text'
              placeholder='Your email here'
              className='input input-bordered w-full max-w-xl'
            />
            <button
              class='btn btn-warning absolute top-50 right-0 text-white py-1 px-2 rounded'
              type='submit'
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

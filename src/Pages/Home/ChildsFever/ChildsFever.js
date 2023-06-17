import React from 'react';
import doctory from '../../../assets/doctor-y.png';
import SmallCard from '../../../components/SmallCard/SmallCard';

const ChildsFever = () => {
  return (
    <section>
      <div className='container grid md:grid-cols-2 items-center justify-center'>
        <div className='relative'>
          <span className='absolute top-0 left-0'>
            <SmallCard bgColor='bg-fuchsia-800' />
          </span>
          <span className='absolute bottom-0 right-0'>
            <SmallCard bgColor='bg-indigo-500' />
          </span>
          <img
            className='mx-auto'
            style={{ height: '400px' }}
            src={doctory}
            alt='Doctor Y'
          />
        </div>
        <div>
          <h2 className='text-3xl font-bold'>Find The Care You Need</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <button className='btn btn-warning'>Make Appointment</button>
        </div>
      </div>
    </section>
  );
};

export default ChildsFever;

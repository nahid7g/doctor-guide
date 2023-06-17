import React from 'react';
import doctorx from '../../../assets/doctor-x.png';
import SmallCard from '../../../components/SmallCard/SmallCard';

const DoctorSchedule = () => {
  return (
    <section>
      <div className='container grid md:grid-cols-2 items-center justify-center'>
        <div>
          <h2 className='text-3xl font-bold'>Find The Care You Need</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <button className='btn btn-warning'>Make Appointment</button>
        </div>
        <div className='relative'>
          <span className='absolute top-20 left-20'>
            <SmallCard bgColor='bg-fuchsia-800' />
          </span>
          <img
            className='mx-auto'
            style={{ height: '400px' }}
            src={doctorx}
            alt='Doctor Y'
          />
        </div>
      </div>
    </section>
  );
};

export default DoctorSchedule;

import React from 'react';
import './FindCare.css';
import doctorx from '../../../assets/doctor-x.png';
import doctory from '../../../assets/doctor-y.png';

const FindCare = () => {
  return (
    <section className='find-care'>
      <div className='container grid md:grid-cols-3 ml-auto justify-center items-center gap-2'>
        <div>
          <h2>Find The Care You Need</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <button className='btn btn-warning'>Make Appointment</button>
        </div>
        <div>
          <img src={doctorx} alt='Doctor X' />
        </div>
        <div>
          <img src={doctory} alt='Doctor y' />
        </div>
      </div>
    </section>
  );
};

export default FindCare;

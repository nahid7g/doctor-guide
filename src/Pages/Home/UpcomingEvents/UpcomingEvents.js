import React from 'react';
import event1 from '../../../assets/event1.png';
import calendar from '../../../assets/Calendar.png';

const UpcomingEvents = () => {
  return (
    <div className='container mx-auto'>
      <div className='text-center mb-4 font-semibold'>
        <h2 className='text-3xl font-bold'>Upcoming Events</h2>
        <p className='w-2/3 mx-auto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum augue quis augue ornare, eget faucibus felis pharetra. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div>
        <div className='grid md:grid-cols-2 gap-4 items-center'>
          <div>
            <img className='w-full' src={event1} alt='Event 1' />
          </div>
          <div>
            <div>
              <h2 className='text-3xl font-bold'>
                How to lead a good healthy life
              </h2>
              <div className='flex gap-4 my-4'>
                <p className='flex gap-2 items-center'>
                  <span>
                    <img src={calendar} alt='Calendar' />
                  </span>
                  <span>15 Oct, 2019</span>
                </p>
                <p className='flex gap-2 items-center'>
                  <span>
                    <img src={calendar} alt='Calendar' />
                  </span>
                  <span>15 Oct, 2019</span>
                </p>
                <p className='flex gap-2 items-center'>
                  <span>
                    <img src={calendar} alt='Calendar' />
                  </span>
                  <span>15 Oct, 2019</span>
                </p>
              </div>
            </div>
            <p>
              Early had add equal china quiet visit. Appear an manner as no
              limits either praise in. In in written on charmed justice is
              amiable farther besides. Law insensible middletons unsatiable for
              apartments boy delightful unreserved. Early had add equal china
              quiet visit. Appear an manner as no limits either praise in. In in
              written on charmed justice is amiable farther besides. Law
              insensible middletons unsatiable for apartments boy delightful
              unreserved.
            </p>
            <div className='flex gap-2 my-3'>
              <button className='btn btn-warning'>Make Appointment</button>
              <button className='btn btn-warning'>Make Appointment</button>
            </div>
          </div>
        </div>
      </div>
      {/* Event Two  */}
      <div className='my-4'>
        <div className='grid md:grid-cols-2 gap-4 items-center'>
          <div className='order-last'>
            <img className='w-full' src={event1} alt='Event 1' />
          </div>
          <div>
            <div>
              <h2 className='text-3xl font-bold'>
                How to lead a good healthy life
              </h2>
              <div className='flex gap-4 my-4'>
                <p className='flex gap-2 items-center'>
                  <span>
                    <img src={calendar} alt='Calendar' />
                  </span>
                  <span>15 Oct, 2019</span>
                </p>
                <p className='flex gap-2 items-center'>
                  <span>
                    <img src={calendar} alt='Calendar' />
                  </span>
                  <span>15 Oct, 2019</span>
                </p>
                <p className='flex gap-2 items-center'>
                  <span>
                    <img src={calendar} alt='Calendar' />
                  </span>
                  <span>15 Oct, 2019</span>
                </p>
              </div>
            </div>
            <p>
              Early had add equal china quiet visit. Appear an manner as no
              limits either praise in. In in written on charmed justice is
              amiable farther besides. Law insensible middletons unsatiable for
              apartments boy delightful unreserved. Early had add equal china
              quiet visit. Appear an manner as no limits either praise in. In in
              written on charmed justice is amiable farther besides. Law
              insensible middletons unsatiable for apartments boy delightful
              unreserved.
            </p>
            <div className='flex gap-2 my-3'>
              <button className='btn btn-warning'>Make Appointment</button>
              <button className='btn btn-warning'>Make Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;

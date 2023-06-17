import React from 'react';
import FindCare from './FindCare/FindCare';
import ChildsFever from './ChildsFever/ChildsFever';
import DoctorSchedule from './DoctorSchedule/DoctorSchedule';
import OurServices from './OurServices/OurServices';
import OurStats from './OurStats/OurStats';
import OurExparts from './OurExparts/OurExparts';
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';
import Newsletter from './Newsletter/Newsletter';
import Feedback from './Feedback/Feedback';

const Home = () => {
  return (
    <div>
      <FindCare />
      <ChildsFever />
      <DoctorSchedule />
      <OurServices />
      <OurStats />
      <OurExparts />
      <Feedback />
      <UpcomingEvents />
      <Newsletter />
    </div>
  );
};

export default Home;

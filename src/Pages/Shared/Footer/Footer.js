import React from 'react';
import logo from '../../../assets/logo.png';
import mail from '../../../assets/mail.png';
import phone from '../../../assets/phone.png';
import location from '../../../assets/location.png';
import view from '../../../assets/view.png';
import facebook from '../../../assets/facebook.png';
import twitter from '../../../assets/twitter.png';
import linkedin from '../../../assets/linkedin.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-black text-white py-6 px-2'>
      <footer className='footer lg:grid-cols-4 p-10'>
        <div className='flex flex-col gap-8'>
          <Link to='/' className='btn btn-ghost normal-case text-3xl p-0'>
            <img src={logo} alt='logo' />
            <span className='text-[#FF8B42]'>Doctor Gui</span>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
            cras velit senectus id tellus aliquam enim felis. Sed commodo cursus
            tellus sapien, viverra imperdiet morbi dignissim. Consequat in metus
            arcu eget.
          </p>
          <div className='flex gap-2'>
            <button className='btn bg-[#FF8B42] text-white'>
              <img src={twitter} alt='Twitter' />
            </button>
            <button className='btn bg-[#FF8B42] text-white'>
              <img src={linkedin} alt='Linkedin' />
            </button>
            <button className='btn bg-[#FF8B42] text-white'>
              <img src={facebook} alt='Facebook' />
            </button>
          </div>
        </div>
        <div className='divide-y'>
          <span className='text-xl'>Our Services</span>
          <Link to='/' className='link link-hover'>
            Bills & Insurance
          </Link>
          <Link to='/' className='link link-hover'>
            Cancer Screening
          </Link>
          <Link to='/' className='link link-hover'>
            Cardiac Surgery
          </Link>
          <Link to='/' className='link link-hover'>
            Neurology
          </Link>
        </div>
        <div>
          <span className='text-xl'>Contact Us</span>
          <Link to='/' className='link link-hover flex gap-2 items-center'>
            <img src={location} alt='Location' />
            <p>
              1234 Uttara Khal Pahr, Image Osman Center, Sonargao, Janapath,
            </p>
          </Link>
          <Link to='/' className='link link-hover flex gap-2 items-center'>
            <img src={phone} alt='Phone' />
            <p>+09876543211</p>
          </Link>
          <Link to='/' className='link link-hover flex gap-2 items-center'>
            <img src={mail} alt='Email' />
            <p>
              1234 Uttara Khal Pahr, Image Osman Center, Sonargao, Janapath,
            </p>
          </Link>
        </div>
        <div>
          <span className='text-xl'>Doctors Schedule</span>
          <p>
            At vero eos et accusam et justou dolores et ea rebum tet clita kasd
            gubergren no sea takimata.
          </p>
          <button className='btn bg-[#FF8B42] text-white capitalize '>
            <img src={view} alt='view schedule' /> View Schedule
          </button>
        </div>
      </footer>
      <footer className='footer px-10 py-4 border-t border-base-300'>
        <div className='items-center grid-flow-col'>
          <p>Copyright © 2022. All Rights Reserved. Made with by Solutya.</p>
        </div>
        <div className='md:place-self-center md:justify-self-end'>
          <div className='flex gap-4'>
            <p>
              <Link to='/'>Latest News</Link>
            </p>
            <p>
              <Link to='/'>Privacy Policy</Link>
            </p>
            <p>
              <Link to='/'>Terms and Conditions</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

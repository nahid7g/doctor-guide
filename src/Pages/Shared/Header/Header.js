import React from 'react';
import './Header.css';
import logo from '../../../assets/logo.png';

const Header = () => {
  const menu = (
    <>
      <li tabIndex={0}>
        <details>
          <summary className='text-white'>HOME</summary>
          <ul className='p-2'>
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary className='text-white'>FEATURES</summary>
          <ul className='p-2'>
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary className='text-white'>DEPARTMENT</summary>
          <ul className='p-2'>
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary className='text-white'>EVENT</summary>
          <ul className='p-2'>
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li className='text-white'>
        <a>CONTACT US</a>
      </li>
    </>
  );
  return (
    <div className='navbar bg-black py-6 px-8'>
      <div>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost text-white lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52'
          >
            {menu}
          </ul>
        </div>
        <a className='btn btn-ghost normal-case text-3xl'>
          <img src={logo} alt='logo' />
          <span className='text-[#FF8B42]'>Doctor Gui</span>
        </a>
      </div>
      <div className='ml-auto'>
        <div className='hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{menu}</ul>
        </div>
        <div className='flex gap-2 flex-col md:flex-row'>
          <button className='btn btn-warning mr-4'>Login</button>
          <button className='btn btn-warning'>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

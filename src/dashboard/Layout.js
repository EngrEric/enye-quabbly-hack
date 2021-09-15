import React from 'react';
import userProfile from '../images/user.png';
import calendar from '../images/calendar.svg';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div style={{ background: '#E5E5E5' }} className='flex flex-col h-screen'>
      <nav className='bg-white py-2'>
        <div className='flex items-center'>
          <div
            className='h-full grid place-content-center'
            style={{ flexBasis: '220px' }}
          >
            <h4
              style={{ color: '#091E42' }}
              className='text-center text-neutral font-montserrat font-extrabold text-3xl'
            >
              Ajot
            </h4>
          </div>
          <div className='flex-1 px-10'>
            <div className='flex justify-between items-center'>
              <div>
                <h3 className='text-2xl font-medium font-lato text-neutral'>
                  Welcome Manuel,
                </h3>
                <p className='text-sm font-lato text-neutral'>
                  Here’s an overview of your Ajot.
                </p>
              </div>
              <div className='flex items-center'>
                <form className='relative'>
                  <input
                    type='text'
                    id='search'
                    className='text-sm bg-gray-100 py-2 px-5 pl-10 text-gray-600 outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 duration-200 rounded-lg'
                    placeholder='Search...'
                  />
                  <label
                    htmlFor='search'
                    className='absolute top-0 bottom-0 h-full left-0 px-3 flex items-center text-gray-400'
                  >
                    <i className='fa fa-search'></i>
                  </label>
                  <button type='submit' className='hidden'>
                    submit
                  </button>
                </form>
                <button className='text-white bg-primary mr-3 px-5 py-2 rounded-lg ml-3 duration-200 hover:bg-opacity-80 text-sm'>
                  <i className='fa fa-plus mr-3'></i>
                  Add Customer
                </button>
                <button className='outline-none mx-3 focus:outline-none '>
                  <img src={calendar} alt='calendar' />
                </button>
                <button className='outline-none mx-3 focus:outline-none '>
                  <i className='fa fa-bell'></i>
                </button>
                <div className='flex ml-3 items-center cursor-pointer'>
                  <figure className='mr-3'>
                    <img
                      src={userProfile}
                      className='rounded-full h-11 w-11'
                      alt=''
                    />
                  </figure>
                  <i className='fa fa-angle-down'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className='flex-1 overflow-auto flex'>
        <Sidebar />
        <div className='flex-1 overflow-auto'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;

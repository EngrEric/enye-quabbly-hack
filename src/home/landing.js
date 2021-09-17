import React from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../images/52401.png';
import location from '../images/location.svg';

const Landing = () => {
  return (
    <div className='flex flex-wrap'>
      <div className=' block md:hidden w-full md:w-1/2 mb-5 md:pt-20 pt-14 mr-10'>
        <img src={homeImg} alt='landing' />
        {/* <img
            src={location}
            className='inline relative left-9'
            alt='locations'
          /> */}
      </div>
      <div className='w-full md:w-1/2 md:pl-24 md:pt-20 px-4'>
        <h2 className='text-3xl mt-5 md:text-5xl font-manrope md:leading-loose font-black'>
          A Penny A Day, Brings The Target Closer.
        </h2>
        <p className='leading-relaxed md:text-2xl md:leading-loose mt-5 text-xl'>
          We are committed to funding your dreams because we believe in your
          ability to change the world through your value propositions.mm
        </p>
        <p className='my-16'>
          <Link
            to='/login'
            className='in-block transform hover:scale-105 mt-20 rounded-md bg-primary outline-none px-5 py-3 text-white md:px-10 md:py-5'
          >
            Get Started for Merchants
          </Link>
        </p>
      </div>

      <div className='hidden md:block w-full md:w-1/2 mb-5 md:pt-20 pt-10'>
        <img src={homeImg} alt='landing' />
        {/* <img
            src={location}
            className='inline relative left-9'
            alt='locations'
          /> */}
      </div>
      <div className='w-2/3 flex items-center justify-center mb-5 mx-auto shadow-xl py-10'>
        <input
          className='border h-12 px-10 outline-none rounded-md border-primary mr-10'
          placeholder='Enter Location'
        />
        <button className='rounded-md bg-primary outline-none px-5 py-3 transform hover:scale-105 text-white md:px-10 md:py-5'>
          Find Merchant
        </button>
      </div>
    </div>
  );
};

export default Landing;

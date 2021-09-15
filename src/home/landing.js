import React from "react";
import homeImg from "../images/52401.png";
import location from "../images/location.svg";

const Landing = () => {
  return (
    <>
    <div className="flex flex-wrap md:flex-nowrap justify-around align-middle items-center">
      <div  className='ml-20'>
      <h2 className='text-3xl mt-5 xxl:text-5xl font-manrope leading-loose font-black'>A Penny A Day, Brings The Target Closer.</h2>
        <p className='leading-relaxed xxl:text-3xl xxl:leading-loose mt-5 text-xl'>
          We are committed to funding your dreams because we believe in your
          ability to change the world through your value propositions.
        </p>
        <button className='transform hover:scale-105 mt-20 rounded-md bg-primary outline-none px-5 py-3 text-white xxl:px-10 xxl:py-5'>Get Started for Merchants</button>
      </div>

      <img className='xxl:mt-20 mt-10' src={homeImg} alt='landing image' />
    </div>
    <div className='flex items-center justify-center w-2/5 mb-5 mx-auto shadow-xl p-8'>
      <div>
        <img src={location} className='inline relative left-9' />
      <input className='border h-12 px-10 outline-none rounded-md border-primary mr-10' placeholder='Enter Location' />
      </div>
      <button className='rounded-md bg-primary outline-none px-5 py-3 transform hover:scale-105 text-white xxl:px-10 xxl:py-5'>Find Merchant</button>
    </div>
    </>
  );
};

export default Landing;

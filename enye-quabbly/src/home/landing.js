import React from "react";
import homeImg from "../images/52401.png";

const Landing = () => {
  return (
    <>
    <div className="flex justify-around align-middle items-center">
      <div  className='ml-20'>
      <h2 className='text-3xl xxl:text-5xl font-manrope leading-loose font-extrabold'>A Penny A Day, Brings The Target Closer.</h2>
        <p className='leading-relaxed xxl:text-3xl xxl:leading-loose mt-10 text-xl'>
          We are committed to funding your dreams because we believe in your
          ability to change the world through your value propositions.
        </p>
        <button className='mt-20 rounded-md bg-primary outline-none px-5 py-3 text-white xxl:px-10 xxl:py-5'>Get Started for Free</button>
      </div>

      <img className='xxl:mt-20' src={homeImg} alt='landing image' />
    </div>
    <div className='w-2/5 mx-auto shadow-md p-10'>
      <input className='w-44 border border-primary ' placeholder='Enter Location' />
      <button className='mt-20 rounded-md bg-primary outline-none px-5 py-3 text-white xxl:px-10 xxl:py-5'>Find Merchant</button>
    </div>
    </>
  );
};

export default Landing;

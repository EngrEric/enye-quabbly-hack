import React from 'react';
import PropTypes from 'prop-types';

const ApplicationMenu = ({setVisible}) => {
  return (
    <div className='flex pb-5 pt-2'>
          <form className='flex-1 relative'>
            <input
              type='text'
              className='text-base py-2 px-5 pl-12 block w-full outline-none focus:outline-none ring-1 rounded-lg ring-gray-400 focus:ring-2 focus:ring-blue-300 duta'
            />
            <label
              htmlFor='search'
              className='absolute top-0 bottom-0 h-full left-0 px-5 flex items-center text-gray-400'
            >
              <i className='fa fa-search'></i>
            </label>
            <button className='hidden'>submit</button>
          </form>
          <button className='text-primary flex items-center bg-active font-semibold ml-3 px-5 py-2 rounded-lg duration-200 hover:bg-opacity-80 text-sm'>
            Export
            <i className='fa fa-sort-down text-primary ml-3'></i>
          </button>
          <button
            onClick={() => setVisible(true)}
            className='text-white bg-primary px-5 py-2 rounded-lg ml-3 duration-200 hover:bg-opacity-80 text-sm'
          >
            <i className='fa fa-plus mr-3'></i>
            Add Customer
          </button>
        </div>
  );
};

export default ApplicationMenu;

// https://hooks.zapier.com/hooks/catch/10919399/b69qvky/

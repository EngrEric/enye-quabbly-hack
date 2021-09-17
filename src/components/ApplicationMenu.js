import React from 'react'
import PropTypes from 'prop-types'

const ApplicationMenu = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-1 mx-3 my-4 text-lg'>
    <div className='relative mt-6 border rounded-lg mr-6  ml-3 col-span-2'>
      <div className='absolute top-4 left-3 pl-2'>
        <i className='fa fa-search text-gray-400 z-20 hover:text-gray-500' />{' '}
      </div>
      <input
        type='text'
        onChange={() => {}}
        className='h-14 w-full pl-14 pr-20 rounded-lg z-0 focus:shadow focus:outline-none'
        placeholder='Search'
      />
    </div>
    <div className='d-flex mt-6'>
      {/* <button className='btn-white mr-5'>
      <button className='btn-white mr-5 border-primary text-primary'>
        <i className='fas fa-filter mr-2' /> {FILTER}
      </button> */}

      <div className='group inline-block mr-5 z-50'>
        <button className='outline-none text-lg px-5 rounded-md py-3 text-gray-500 border font-bold'>
          <span className='pr-1 font-semibold flex-1'>
            Export <i className="fas fa-sort-down ml-2"/>
          </span>
        </button>
        <ul
          className='bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute
transition duration-150 ease-in-out origin-top w-36 z-40'
        >
          <li className='rounded-sm px-4 py-2 cursor-pointer hover:bg-gray-100'>Amount</li>
          <li className='rounded-sm px-4 py-2 cursor-pointer hover:bg-gray-100'>Status</li>
        </ul>
      </div>

      <button className='text-white bg-primary mr-3 px-5 py-3 rounded-lg ml-3 duration-200 hover:bg-opacity-80 text-sm'>
      <i className="fas fa-plus mr-2"></i> Add Customer
      </button>
    </div>
  </div>
  )
}

export default ApplicationMenu

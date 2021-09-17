import React from 'react';
import { Modal } from 'antd';

const AddCustomer = ({ setVisible, visible }) => {
  return (
    <>
      <Modal
        title={<h4 className='font-lato text-2xl font-bold'>Add Customer</h4>}
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
        width={870}
        style={{ borderRadius: '8px' }}
        footer={[]}
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          <div className=''>
            <label
              htmlFor='firstName'
              className='font-lato text-sm font-medium'
            >
              First Name
            </label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              className='block w-full bg-gray-100 text-sm py-2 rounded outline-none focus:outline-none px-5 mt-2 duration-200 focus:ring-2 focus:ring-blue-300'
            />
          </div>
          <div className=''>
            <label htmlFor='email' className='font-lato text-sm font-medium'>
              Email Address
            </label>
            <input
              type='text'
              name='email'
              id='email'
              className='block w-full bg-gray-100 text-sm py-2 rounded outline-none focus:outline-none px-5 mt-2 duration-200 focus:ring-2 focus:ring-blue-300'
            />
          </div>
          <div className=''>
            <label htmlFor='phone' className='font-lato text-sm font-medium'>
              Phone Number
            </label>
            <input
              type='text'
              name='phone'
              id='phone'
              className='block w-full bg-gray-100 text-sm py-2 rounded outline-none focus:outline-none px-5 mt-2 duration-200 focus:ring-2 focus:ring-blue-300'
            />
          </div>
          <div className=''>
            <label htmlFor='plan' className='font-lato text-sm font-medium'>
              Saving Plan
            </label>
            <input
              type='text'
              name='plan'
              id='plan'
              className='block w-full bg-gray-100 text-sm py-2 rounded outline-none focus:outline-none px-5 mt-2 duration-200 focus:ring-2 focus:ring-blue-300'
            />
          </div>
          <div className=''>
            <label htmlFor='duration' className='font-lato text-sm font-medium'>
              Duration
            </label>
            <input
              type='text'
              name='duration'
              id='duration'
              className='block w-full bg-gray-100 text-sm py-2 rounded outline-none focus:outline-none px-5 mt-2 duration-200 focus:ring-2 focus:ring-blue-300'
            />
          </div>
          <div className=''>
            <label
              htmlFor='daily_amount'
              className='font-lato text-sm font-medium'
            >
              Daily Amount
            </label>
            <input
              type='text'
              name='daily_amount'
              id='daily_amount'
              className='block w-full bg-gray-100 text-sm py-2 rounded outline-none focus:outline-none px-5 mt-2 duration-200 focus:ring-2 focus:ring-blue-300'
            />
          </div>
        </div>
        <div>
          <h4 className='font-lato mt-5 text-primary pb-2 text-lg font-medium'>
            Account Information
          </h4>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
            <div className=''>
              <label
                htmlFor='account_name'
                className='font-lato text-sm font-medium'
              >
                Account Name
              </label>
              <input
                type='text'
                name='account_name'
                id='account_name'
                className='block w-full bg-gray-100 text-sm py-2 rounded outline-none focus:outline-none px-5 mt-2 duration-200 focus:ring-2 focus:ring-blue-300'
              />
            </div>
            <div className=''>
              <label
                htmlFor='account_number'
                className='font-lato text-sm font-medium'
              >
                Account Number
              </label>
              <input
                type='text'
                name='account_number'
                id='account_number'
                className='block w-full bg-gray-100 text-sm py-2 rounded outline-none focus:outline-none px-5 mt-2 duration-200 focus:ring-2 focus:ring-blue-300'
              />
            </div>
            <div className=''>
              <label htmlFor='bank' className='font-lato text-sm font-medium'>
                Bank
              </label>
              <input
                type='text'
                name='bank'
                id='bank'
                className='block w-full bg-gray-100 text-sm py-2 rounded outline-none focus:outline-none px-5 mt-2 duration-200 focus:ring-2 focus:ring-blue-300'
              />
            </div>
          </div>
        </div>
        <div>
          <h4 className='font-lato mt-5 text-primary pb-2 text-lg font-medium'>
            Next of Kin
          </h4>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
            <div className=''>
              <label
                htmlFor='next_of_kin_fullname griZ'
                className='font-lato text-sm font-medium'
              >
                Full Name
              </label>
              <input
                type='text'
                name='next_of_kin_fullname'
                id='next_of_kin_fullname'
                className='block w-full bg-gray-100 text-sm py-2 rounded outline-none focus:outline-none px-5 mt-2 duration-200 focus:ring-2 focus:ring-blue-300'
              />
            </div>
            <div className=''>
              <label
                htmlFor='next_of_kin_phone'
                className='font-lato text-sm font-medium'
              >
                Phone Number
              </label>
              <input
                type='text'
                name='next_of_kin_phone'
                id='next_of_kin_phone'
                className='block w-full bg-gray-100 text-sm py-2 rounded outline-none focus:outline-none px-5 mt-2 duration-200 focus:ring-2 focus:ring-blue-300'
              />
            </div>
          </div>
        </div>
        <div className='flex mt-7 justify-end'>
          <button
            onClick={() => setVisible(false)}
            className='block py-2 px-8 text-base rounded-lg border border-primary'
          >
            Cancel
          </button>
          <button className='block py-2 px-5 text-base rounded-lg bg-primary text-white ml-5'>
            Add Customer
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AddCustomer;

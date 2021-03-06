import React, { useState } from 'react';
import { Table } from 'antd';
import Layout from './Layout';
import 'antd/dist/antd.min.css';
import AddCustomer from './AddCustomer';
import ApplicationMenu from '../components/ApplicationMenu';

const Marking = ({ setVisible }) => {
  const columns = [
    {
      title: <span className='font-lato text-sm font-semibold'>Name</span>,
      dataIndex: 'name',
      key: 'name',
      render: name => <span className='font-lato text-sm'>{name}</span>,
    },
    {
      title: <span className='font-lato text-sm font-semibold'>ID</span>,
      dataIndex: 'id',
      key: 'id',
      render: id => <span className='font-lato text-sm'>{id}</span>,
    },
    {
      title: <span className='font-lato text-sm font-semibold'>Ajot Plan</span>,
      dataIndex: 'plan',
      key: 'plan',
      render: plan => <span className='font-lato text-sm'>{plan}</span>,
    },
    {
      title: <span className='font-lato text-sm font-semibold'>Duration</span>,
      dataIndex: 'duration',
      key: 'duration',
      render: duration => <span className='font-lato text-sm'>{duration}</span>,
    },
    {
      title: <span className='font-lato text-sm font-semibold'>Amount</span>,
      dataIndex: 'amount',
      key: 'amount',
      render: amount => <span className='font-lato text-sm'>{amount}</span>,
    },
    {
      title: <span className='font-lato text-sm font-semibold'>Date</span>,
      dataIndex: 'date',
      key: 'date',
      render: date => (
        <span className='font-lato text-sm'>
          {new Date(date).getDate()}/{new Date(date).getMonth()}/
          {new Date(date).getFullYear()}
        </span>
      ),
    },
    {
      title: <span className='font-lato text-sm font-semibold'>Status</span>,
      dataIndex: 'status',
      key: 'status',
      render: status => (
        <span
          className={`font-lato text-sm capitalize py-1 rounded ${
            status.toLowerCase() === 'not paid' &&
            'bg-red-400 bg-opacity-30 px-3 text-red-600 rounded'
          } ${
            status.toLowerCase() === 'paid' &&
            'bg-green-400 bg-opacity-30 px-5 text-green-600 rounded'
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: <span className='font-lato text-sm font-semibold'>Action</span>,
      render: record => (
        <button className='focus:outline-none outline-none cursor-pointer'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z'
              fill='#B7BCC2'
            />
          </svg>
        </button>
      ),
    },
  ];
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      id: 32,
      plan: 'Short Plan',
      duration: '2 Months',
      date: new Date(),
      amount: '???5000/day',
      status: 'Paid',
    },
    {
      key: '1',
      name: 'Mike',
      id: 32,
      plan: 'Short Plan',
      duration: '2 Months',
      date: new Date(),
      amount: '???5000/day',
      status: 'Paid',
    },
    {
      key: '1',
      name: 'Mike',
      id: 32,
      plan: 'Short Plan',
      duration: '2 Months',
      date: new Date(),
      amount: '???5000/day',
      status: 'Paid',
    },
    {
      key: '1',
      name: 'Mike',
      id: 32,
      plan: 'Short Plan',
      duration: '2 Months',
      date: new Date(),
      amount: '???5000/day',
      status: 'not Paid',
    },
    {
      key: '1',
      name: 'Mike',
      id: 32,
      plan: 'Short Plan',
      duration: '2 Months',
      date: new Date(),
      amount: '???5000/day',
      status: 'Paid',
    },
  ];

  return (
    <>
      <div className='p-3'>
        <ApplicationMenu setVisible={setVisible} />
       <Table dataSource={dataSource} columns={columns} />;
      </div>
    </>
  );
};

export default Marking;

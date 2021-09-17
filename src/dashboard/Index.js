import React, { useEffect, useState } from 'react';
import { notification, Table } from 'antd';
import card from '../images/card.svg';
import 'antd/dist/antd.min.css';
import { columns, dataSource } from './constants';
import Auth from '@aws-amplify/auth';

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(false);
  const [walletDetails, setWallet] = useState({});

  async function getOrcreateWallet() {
    const user = await Auth.currentUserInfo();
    setUserInfo(user);

    try {
      const wallet = await fetch('https://api.getwallets.co/v1/wallets', {
        method: 'POST',
        body: JSON.stringify({ customer_email: user.attributes.email }),
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer sk_live_6140a262e7e3684960079b0e6140a262e7e3684960079b0f',
        },
      });
      const json = await wallet.json();
      setWallet(json.data);
    } catch (error) {
      notification.error({
        message: "An error occured, we couldn't create wallet for you",
      });
    }
  }

  useEffect(() => {
    getOrcreateWallet();
  }, []);

  return (
    <>
      <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-8 p-3'>
          <div className='grid gap-7 grid-cols-3'>
            <div className='h-32 bg-white rounded-lg flex flex-col justify-center'>
              <div className='flex justify-between px-5'>
                <div className='h-11 w-11 rounded-full bg-primary bg-opacity-20 grid place-content-center'>
                  <i className='fa fa-users text-primary'></i>
                </div>
                <div>
                  <h5 className='font-lato text-neutral text-base'>
                    Total Customers
                  </h5>
                  <h3 className='text-right text-2xl font-lato font-medium'>
                    320
                  </h3>
                </div>
              </div>
            </div>
            <div className='h-32 bg-white rounded-lg flex flex-col justify-center'>
              <div className='flex justify-between px-5'>
                <div className='h-11 w-11 rounded-full bg-primary bg-opacity-20 grid place-content-center'>
                  <i className='fa fa-arrow-left transform -rotate-45 text-primary'></i>
                </div>
                <div>
                  <h5 className='font-lato text-neutral text-base'>
                    Total Collection
                  </h5>
                  <h3 className='text-right text-2xl font-lato font-medium'>
                    ₦{walletDetails.balance}
                  </h3>
                </div>
              </div>
            </div>
            <div className='h-32 bg-white rounded-lg flex flex-col justify-center'>
              <div className='flex justify-between px-5'>
                <div className='h-11 w-11 rounded-full bg-primary bg-opacity-20 grid place-content-center'>
                  <i className='fa fa-arrow-up transform rotate-45 text-primary'></i>
                </div>
                <div>
                  <h5 className='font-lato text-neutral text-base'>
                    Total Payout
                  </h5>
                  <h3 className='text-right text-2xl font-lato font-medium'>
                    ₦{walletDetails.reserved_balance}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <h4 className='font-lato text-base font-semibold mb-3'>
              Marking List
            </h4>
            <Table dataSource={dataSource} columns={columns} />;
          </div>
        </div>
        <div className='col-span-4 py-3 bg-white'>
          <figure className='m-0 p-0 px-3'>
            <img src={card} alt='' />
          </figure>
          <div className='pt-5 px-3 flex justify-center'>
            <div className='h-11 w-11 rounded-lg mr-5 bg-green-600 bg-opacity-20 grid place-content-center'>
              <i className='fa fa-arrow-left transform -rotate-45 text-green-600'></i>
            </div>
            <div className='h-11 w-11 rounded-lg mr-5 bg-red-600 bg-opacity-20 grid place-content-center'>
              <i className='fa fa-arrow-left transform -rotate-45 text-red-600'></i>
            </div>
            <div className='h-11 w-11 rounded-lg bg-gray-600 bg-opacity-20 grid place-content-center'>
              <svg
                width='21'
                height='21'
                viewBox='0 0 21 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M5.5 9H2.5V16H5.5V9Z' fill='#20242E' />
                <path d='M12 9H9V16H12V9Z' fill='#20242E' />
                <path d='M20.5 18H0.5V21H20.5V18Z' fill='#20242E' />
                <path d='M18.5 9H15.5V16H18.5V9Z' fill='#20242E' />
                <path d='M10.5 0L0.5 5V7H20.5V5L10.5 0Z' fill='#20242E' />
              </svg>
            </div>
          </div>
          <div className='mt-5'>
            <h4 className='font-lato py-2 mb-3 px-3 text-base font-semibold'>
              Recent Activities
            </h4>
            <div className='flex border-b border-gray-200 py-3 justify-between px-3'>
              <div className='flex items-center'>
                <div className='h-8 w-8 rounded-full bg-green-400 bg-opacity-20 grid place-content-center'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.9706 6.38056L19.5606 4.97056L7.97055 16.5606L7.97055 9.97056H5.97055L5.97055 19.9706H15.9706V17.9706H9.38055L20.9706 6.38056Z'
                      fill='#66B286'
                    />
                  </svg>
                </div>
                <div className='ml-2'>
                  <h4 className='text-base font-semibold font-lato '>
                    Ronald Richards
                  </h4>
                  <h5 className='text-sm text-neutral-light font-lato '>
                    Ronald Richards
                  </h5>
                </div>
              </div>
              <div className='ml-2'>
                <h4 className='text-base font-semibold font-lato '>
                  Ronald Richards
                </h4>
                <h5 className='text-sm text-neutral-light font-lato '>
                  Ronald Richards
                </h5>
              </div>
            </div>
            <div className='flex border-b border-gray-200 py-3 justify-between px-3'>
              <div className='flex items-center'>
                <div className='h-8 w-8 rounded-full bg-green-400 bg-opacity-20 grid place-content-center'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.9706 6.38056L19.5606 4.97056L7.97055 16.5606L7.97055 9.97056H5.97055L5.97055 19.9706H15.9706V17.9706H9.38055L20.9706 6.38056Z'
                      fill='#66B286'
                    />
                  </svg>
                </div>
                <div className='ml-2'>
                  <h4 className='text-base font-semibold font-lato '>
                    Ronald Richards
                  </h4>
                  <h5 className='text-sm text-neutral-light font-lato '>
                    Ronald Richards
                  </h5>
                </div>
              </div>
              <div className='ml-2'>
                <h4 className='text-base font-semibold font-lato '>
                  Ronald Richards
                </h4>
                <h5 className='text-sm text-neutral-light font-lato '>
                  Ronald Richards
                </h5>
              </div>
            </div>
            <div className='flex border-b border-gray-200 py-3 justify-between px-3'>
              <div className='flex items-center'>
                <div className='h-8 w-8 rounded-full bg-green-400 bg-opacity-20 grid place-content-center'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.9706 6.38056L19.5606 4.97056L7.97055 16.5606L7.97055 9.97056H5.97055L5.97055 19.9706H15.9706V17.9706H9.38055L20.9706 6.38056Z'
                      fill='#66B286'
                    />
                  </svg>
                </div>
                <div className='ml-2'>
                  <h4 className='text-base font-semibold font-lato '>
                    Ronald Richards
                  </h4>
                  <h5 className='text-sm text-neutral-light font-lato '>
                    Ronald Richards
                  </h5>
                </div>
              </div>
              <div className='ml-2'>
                <h4 className='text-base font-semibold font-lato '>
                  Ronald Richards
                </h4>
                <h5 className='text-sm text-neutral-light font-lato '>
                  Ronald Richards
                </h5>
              </div>
            </div>
            <div className='flex border-b border-gray-200 py-3 justify-between px-3'>
              <div className='flex items-center'>
                <div className='h-8 w-8 rounded-full bg-green-400 bg-opacity-20 grid place-content-center'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.9706 6.38056L19.5606 4.97056L7.97055 16.5606L7.97055 9.97056H5.97055L5.97055 19.9706H15.9706V17.9706H9.38055L20.9706 6.38056Z'
                      fill='#66B286'
                    />
                  </svg>
                </div>
                <div className='ml-2'>
                  <h4 className='text-base font-semibold font-lato '>
                    Ronald Richards
                  </h4>
                  <h5 className='text-sm text-neutral-light font-lato '>
                    Ronald Richards
                  </h5>
                </div>
              </div>
              <div className='ml-2'>
                <h4 className='text-base font-semibold font-lato '>
                  Ronald Richards
                </h4>
                <h5 className='text-sm text-neutral-light font-lato '>
                  Ronald Richards
                </h5>
              </div>
            </div>
            <div className='flex border-b border-gray-200 py-3 justify-between px-3'>
              <div className='flex items-center'>
                <div className='h-8 w-8 rounded-full bg-green-400 bg-opacity-20 grid place-content-center'>
                  <svg
                    width='25'
                    height='25'
                    viewBox='0 0 25 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.9706 6.38056L19.5606 4.97056L7.97055 16.5606L7.97055 9.97056H5.97055L5.97055 19.9706H15.9706V17.9706H9.38055L20.9706 6.38056Z'
                      fill='#66B286'
                    />
                  </svg>
                </div>
                <div className='ml-2'>
                  <h4 className='text-base font-semibold font-lato '>
                    Ronald Richards
                  </h4>
                  <h5 className='text-sm text-neutral-light font-lato '>
                    Ronald Richards
                  </h5>
                </div>
              </div>
              <div className='ml-2'>
                <h4 className='text-base font-semibold font-lato '>
                  Ronald Richards
                </h4>
                <h5 className='text-sm text-neutral-light font-lato '>
                  Ronald Richards
                </h5>
              </div>
            </div>
            <button className='bg-primary text-white px-5 py-2 rounded-lg block mx-auto max-w-max mt-5 text-sm duration-200 hover:bg-opacity-75'>
              View All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

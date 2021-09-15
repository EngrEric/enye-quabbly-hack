import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div
      className='overflow-auto pt-10 bg-white'
      style={{ flexBasis: '220px' }}
    >
      <ul>
        <li>
          <NavLink
            to='/dashboard'
            activeClassName='text-neutral-dark border-l-4 border-primary bg-active font-semibold'
            className='px-10 font-lato w-full mt-3 hover:bg-blue-50 duration-200 text-neutral-light flex py-3'
          >
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill={location.pathname === '/dashboard' ? '#2D9CDB' : '#B3BAC5'}
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z' />
            </svg>
            <span className='pl-5'>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/marking'
            activeClassName='text-neutral-dark border-l-4 border-primary bg-active font-semibold'
            className='px-10 font-lato w-full mt-3 hover:bg-blue-50 duration-200 text-neutral-light flex py-3'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill={location.pathname === '/marking' ? '#2D9CDB' : '#B3BAC5'}
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M17.907 9.74981H12.5633V11.7187C12.5633 13.1145 11.4277 14.2502 10.032 14.2502C8.63633 14.2502 7.50079 13.1145 7.50079 11.7187V7.44337L5.21915 8.81457C4.54064 9.2189 4.1258 9.95373 4.1258 10.7413V12.4043L1.3133 14.0287C0.775411 14.3381 0.589083 15.0272 0.901973 15.5651L3.71447 20.4382C4.02384 20.9761 4.7129 21.159 5.25079 20.8496L8.88594 18.7506H13.6883C14.9293 18.7506 15.9383 17.7415 15.9383 16.5004H16.5008C17.123 16.5004 17.6258 15.9976 17.6258 15.3753V13.1251H17.907C18.3746 13.1251 18.7508 12.7489 18.7508 12.2813V10.5936C18.7508 10.126 18.3746 9.74981 17.907 9.74981ZM23.0996 8.43485L20.2871 3.56179C19.9777 3.02385 19.2887 2.84102 18.7508 3.15042L15.1156 5.24943H11.5227C11.1008 5.24943 10.6895 5.36897 10.3309 5.59047L9.15313 6.3253C8.82266 6.52923 8.62579 6.89137 8.62579 7.27812V11.7187C8.62579 12.4957 9.25508 13.1251 10.032 13.1251C10.809 13.1251 11.4383 12.4957 11.4383 11.7187V8.62471H17.907C18.9933 8.62471 19.8758 9.50721 19.8758 10.5936V11.5957L22.6883 9.97131C23.2262 9.6584 23.409 8.97279 23.0996 8.43485Z' />
            </svg>
            <span className='pl-5'>Marking</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/customers'
            activeClassName='text-neutral-dark border-l-4 border-primary bg-active font-semibold'
            className='px-10 font-lato w-full mt-3 hover:bg-blue-50 duration-200 text-neutral-light flex py-3'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill={location.pathname === '/customers' ? '#2D9CDB' : '#B3BAC5'}
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M16.5 12C17.88 12 18.99 10.88 18.99 9.5C18.99 8.12 17.88 7 16.5 7C15.12 7 14 8.12 14 9.5C14 10.88 15.12 12 16.5 12ZM9 11C10.66 11 11.99 9.66 11.99 8C11.99 6.34 10.66 5 9 5C7.34 5 6 6.34 6 8C6 9.66 7.34 11 9 11ZM16.5 14C14.67 14 11 14.92 11 16.75V19H22V16.75C22 14.92 18.33 14 16.5 14ZM9 13C6.67 13 2 14.17 2 16.5V19H9V16.75C9 15.9 9.33 14.41 11.37 13.28C10.5 13.1 9.66 13 9 13Z' />
            </svg>
            <span className='pl-5'>Customers</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/settings'
            activeClassName='text-neutral-dark border-l-4 border-primary bg-active font-semibold'
            className='px-10 font-lato w-full mt-3 hover:bg-blue-50 duration-200 text-neutral-light flex py-3'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill={location.pathname === '/settings' ? '#2D9CDB' : '#B3BAC5'}
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M21.7133 10.48L19.48 9.81333C19.3256 9.2742 19.1132 8.75339 18.8466 8.26L19.94 6.21333C19.981 6.13607 19.996 6.04765 19.9828 5.96118C19.9696 5.87471 19.9289 5.79481 19.8666 5.73333L18.2733 4.13333C18.2118 4.07111 18.1319 4.03037 18.0455 4.01716C17.959 4.00395 17.8706 4.01897 17.7933 4.06L15.76 5.14666C15.2617 4.8671 14.7341 4.64352 14.1866 4.48L13.52 2.27333C13.4918 2.19201 13.4385 2.12173 13.3678 2.07261C13.2971 2.02349 13.2127 1.99807 13.1266 2H10.8733C10.7867 2.0004 10.7026 2.02842 10.633 2.07998C10.5635 2.13154 10.5122 2.20394 10.4866 2.28666L9.81998 4.48666C9.26799 4.64931 8.73582 4.87291 8.23331 5.15333L6.23331 4.07333C6.15606 4.0323 6.06764 4.01728 5.98117 4.03049C5.8947 4.0437 5.81479 4.08444 5.75331 4.14666L4.13331 5.72666C4.07109 5.78814 4.03035 5.86805 4.01714 5.95452C4.00393 6.04098 4.01896 6.12941 4.05998 6.20666L5.13998 8.20666C4.86002 8.70706 4.63643 9.23697 4.47331 9.78666L2.26665 10.4533C2.18393 10.4789 2.11152 10.5302 2.05996 10.5997C2.0084 10.6692 1.98038 10.7534 1.97998 10.84V13.0933C1.98038 13.1799 2.0084 13.2641 2.05996 13.3336C2.11152 13.4032 2.18393 13.4544 2.26665 13.48L4.48665 14.1467C4.65154 14.6872 4.8751 15.2081 5.15331 15.7L4.05998 17.7933C4.01896 17.8706 4.00393 17.959 4.01714 18.0455C4.03035 18.1319 4.07109 18.2118 4.13331 18.2733L5.72665 19.8667C5.78813 19.9289 5.86803 19.9696 5.9545 19.9828C6.04097 19.996 6.12939 19.981 6.20665 19.94L8.26665 18.84C8.75396 19.1029 9.26799 19.313 9.79998 19.4667L10.4666 21.7133C10.4922 21.796 10.5435 21.8685 10.613 21.92C10.6826 21.9716 10.7667 21.9996 10.8533 22H13.1066C13.1932 21.9996 13.2774 21.9716 13.3469 21.92C13.4165 21.8685 13.4678 21.796 13.4933 21.7133L14.16 19.46C14.6874 19.3056 15.197 19.0955 15.68 18.8333L17.7533 19.94C17.8306 19.981 17.919 19.996 18.0055 19.9828C18.0919 19.9696 18.1718 19.9289 18.2333 19.8667L19.8266 18.2733C19.8889 18.2118 19.9296 18.1319 19.9428 18.0455C19.956 17.959 19.941 17.8706 19.9 17.7933L18.7933 15.7267C19.0582 15.2418 19.2705 14.73 19.4266 14.2L21.6733 13.5333C21.756 13.5078 21.8284 13.4565 21.88 13.387C21.9316 13.3174 21.9596 13.2332 21.96 13.1467V10.8733C21.9639 10.7904 21.9424 10.7083 21.8983 10.638C21.8542 10.5677 21.7897 10.5126 21.7133 10.48ZM12 15.6667C11.2748 15.6667 10.5659 15.4516 9.96289 15.0487C9.35991 14.6458 8.88994 14.0732 8.61242 13.4032C8.3349 12.7332 8.26229 11.9959 8.40377 11.2847C8.54525 10.5734 8.89446 9.92006 9.40725 9.40727C9.92005 8.89448 10.5734 8.54526 11.2846 8.40378C11.9959 8.2623 12.7332 8.33492 13.4032 8.61244C14.0731 8.88996 14.6458 9.35992 15.0487 9.9629C15.4516 10.5659 15.6666 11.2748 15.6666 12C15.6666 12.9725 15.2803 13.9051 14.5927 14.5927C13.9051 15.2804 12.9724 15.6667 12 15.6667Z' />
            </svg>

            <span className='pl-5'>Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            activeClassName='text-neutral-dark border-l-4 border-primary bg-active font-semibold'
            className='px-10 font-lato w-full mt-3 hover:bg-blue-50 duration-200 text-neutral-light flex py-3'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill={location.pathname === '/contact' ? '#2D9CDB' : '#B3BAC5'}
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M11.3245 2C6.70606 2 2.95422 5.81 2.95422 10.5C2.95422 15.19 6.70606 19 11.3245 19H11.8168V22C16.6026 19.66 19.6947 15 19.6947 10.5C19.6947 5.81 15.9429 2 11.3245 2ZM12.3092 16.5H10.3397V14.5H12.3092V16.5ZM12.3092 13H10.3397C10.3397 9.75 13.2939 10 13.2939 8C13.2939 6.9 12.4077 6 11.3245 6C10.2412 6 9.35499 6.9 9.35499 8H7.38552C7.38552 5.79 9.14819 4 11.3245 4C13.5007 4 15.2634 5.79 15.2634 8C15.2634 10.5 12.3092 10.75 12.3092 13Z' />
            </svg>
            <span className='pl-5'>Contact Us</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/terms'
            activeClassName='text-neutral-dark border-l-4 border-primary bg-active font-semibold'
            className='px-10 font-lato w-full mt-3 hover:bg-blue-50 duration-200 text-neutral-light flex py-3'
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill={location.pathname === '/terms' ? '#2D9CDB' : '#B3BAC5'}
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M5.25 0.25C2.48858 0.25 0.25 2.48858 0.25 5.25V14.75C0.25 17.5114 2.48858 19.75 5.25 19.75H14.75C17.5114 19.75 19.75 17.5114 19.75 14.75V5.25C19.75 2.48858 17.5114 0.25 14.75 0.25H5.25ZM4.75 6.25C4.75 5.83579 5.08579 5.5 5.5 5.5H14.5C14.9142 5.5 15.25 5.83579 15.25 6.25C15.25 6.66421 14.9142 7 14.5 7H5.5C5.08579 7 4.75 6.66421 4.75 6.25ZM4.75 10C4.75 9.58579 5.08579 9.25 5.5 9.25H14.5C14.9142 9.25 15.25 9.58579 15.25 10C15.25 10.4142 14.9142 10.75 14.5 10.75H5.5C5.08579 10.75 4.75 10.4142 4.75 10ZM5.5 13C5.08579 13 4.75 13.3358 4.75 13.75C4.75 14.1642 5.08579 14.5 5.5 14.5H14.5C14.9142 14.5 15.25 14.1642 15.25 13.75C15.25 13.3358 14.9142 13 14.5 13H5.5Z'
              />
            </svg>

            <span className='pl-5'>Terms Of Use</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch,useHistory } from 'react-router';

import userProfile from '../images/user.png';
import calendar from '../images/calendar.svg';
import Sidebar from './Sidebar';
import Dashboard from './Index';
import Customers from '../pages/customers/Customers';
import Auth from '@aws-amplify/auth';
import { Link } from 'react-router-dom';

const Layout = ({ location, user }) => {
  const [openUserMenu, setUserMenu] = useState(false)
  const history = useHistory()
  const { path: _path } = useRouteMatch();
  const [userInfo, setUserInfo] = useState(false);

  const routes = [
    {
      path: _path,
      exact: true,
      comp: Dashboard,
    },
    {
      path: _path + '/customers',
      comp: Customers,
    },
    {
      path: _path + '/marking',
      //Replace with desired component
      comp: Customers,
    },
    {
      path: _path + '/settings',
      //Replace with desired component
      comp: Customers,
    },
    {
      path: _path + '/contact',
      //Replace with desired component
      comp: Customers,
    },
    {
      path: _path + '/terms',
      //Replace with desired component
      comp: Customers,
    },
  ];

  useEffect(async () => {
    const user = await Auth.currentUserInfo();
    setUserInfo(user);
  }, []);



  async function logOut() {
    await Auth.signOut();
    setUserInfo(false);
    history.push('/login');
  }

  return (
    <div style={{ background: '#E5E5E5' }} className='flex flex-col h-screen'>
      <nav className=' bg-white py-2'>
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
                  Welcome {userInfo.username},
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
                {location.pathname === '/dashboard' ? (
                  <button className='text-white bg-primary mr-3 px-5 py-2 rounded-lg ml-3 duration-200 hover:bg-opacity-80 text-sm'>
                    <i className='fa fa-plus mr-3'></i>
                    Add Customer
                  </button>
                ) : (
                  ''
                )}
                <button className='outline-none mx-3 focus:outline-none '>
                  <img src={calendar} alt='calendar' />
                </button>
                <button className='outline-none mx-3 focus:outline-none '>
                  <i className='fa fa-bell'></i>
                </button>
        <div className='relative w-1/2 flex justify-end'>
        <div onClick={() => setUserMenu(prev => !prev)} className='flex ml-3 items-center cursor-pointer'>
                  <figure className='mr-3'>
                    <img
                      src={userProfile}
                      className='rounded-full h-11 w-11'
                      alt=''
                    />
                  </figure>
                  <i className='fa fa-angle-down'></i>
                </div>
          {/* <button className="h-full w-full fixed inset-0 cursor-default" /> */}
          {openUserMenu && (
            <div
              onClick={() => setUserMenu(prev => !prev)}
              style={{ zIndex: '1' }}
              className='fixed inset-0'
            />
          )}
          <div
            className={`${
              !openUserMenu && 'hidden'
            } absolute z-20 top-0 bg-white rounded-lg shadow-lg py-2 mt-14`}
          >
            <Link to='/' className='block px-4 py-2 text-black'>
              <i className='fas fa-user mr-2' /> Profile
            </Link>
            <button
              onClick={logOut}
              style={{ outline: 0 }}
              className='w-full text-left block px-4 py-2 text-red-600'
            >
              <i className='fas fa-sign-out-alt mr-2' />
              LogOut
            </button>
          </div>
        </div>







              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className='flex-1 overflow-auto flex'>
        <Sidebar />
        <div className='flex-1 overflow-auto'>
          {
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.comp />}
                />
              ))}
            </Switch>
          }
        </div>
      </div>
    </div>
  );
};

export default Layout;

/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";
import { Auth } from "@aws-amplify/auth";
import { Hub } from "@aws-amplify/core";
// import logo from '../../images/logo/logo.svg'

// import { useSelector } from 'react-redux'

const NavBar = () => {
  const { pathname } = useLocation();
  const [nav, setNav] = useState(true);
  const [userInfo, setUserInfo] = useState(false);
  //   const { userInfo } = useSelector(({ auth }) => auth.authUser)

  const openRoutes = [
    "/",
    "/about",
    "/faq",
    "/contact-us",
    "/login",
    "/sign-up",
    "/how-it-works",
  ];

  useEffect(async () => {
    const user = await Auth.currentUserInfo();
    console.log(user);
    setUserInfo(user);
  }, []);

  if (!openRoutes.includes(pathname)) {
    return "";
  }
  return (
    <nav className="nav-bar border-b border-gray-100">
      <Link to="/">
        <div className="flex items-center flex-shrink-0 text-blacker mr-6">
          <h1 className="font-manrope font-black text-primary text-4xl ml-20">
            Ajot
          </h1>
        </div>
      </Link>
      <div className="block lg:hidden">
        <button
          onClick={() => setNav((navToggle) => !navToggle)}
          className="flex items-center px-3 py-2 border rounded text-black border-gray-500"
        >
          <i className="fas fa-bars" />
        </button>
      </div>

      <div
        className={classnames(
          "lg:w-auto mt-1 w-full block flex-grow lg:flex lg:items-center",
          {
            hidden: nav,
          }
        )}
      >
        <div className="lg:flex-grow lg:text-right text-base">
          <Link
            to="/"
            className={`${
              pathname === "/"
                ? "border-b-2  font-bold text-primary"
                : "text-black"
            } block ml-4 mt-4 lg:inline-block lg:mt-0  hover:text-primary mr-6`}
          >
            Home
          </Link>

          <Link
            to="/how-it-works"
            className={`${
              pathname === "/how-it-works"
                ? "border-b-2  font-bold text-primary"
                : "text-black"
            } block ml-4 mt-4 lg:inline-block lg:mt-0 hover:text-primary mr-6`}
          >
            About us
          </Link>

          <Link
            to="/about"
            className={`${
              pathname === "/about"
                ? "border-b-2  font-bold text-primary"
                : "text-black"
            } block ml-4 mt-4 lg:inline-block lg:mt-0 hover:text-primary mr-6`}
          >
            How it works
          </Link>
          <Link
            to="/faq"
            className={`${
              pathname === "/faq"
                ? "border-b-2 font-bold text-primary"
                : "text-black"
            } block ml-4 mt-4 lg:inline-block lg:mt-0 hover:text-primary mr-6`}
          >
            FAQ
          </Link>
        </div>
        {!userInfo ? (
          <div>
            <Link
              to="/dashboard"
              className="nav-btn rounded-md outline-none hover:text-white text-primary font-manrope font-medium border border-primary"
            >
              Login
            </Link>
            <Link
              to="/dashboard"
              className="nav-btn rounded-md hover:text-gray-300 text-white bg-primary"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <Link
            to="/dashboard"
            className="nav-btn hover:text-gray-300 text-white bg-primary"
          >
            Dashboard
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

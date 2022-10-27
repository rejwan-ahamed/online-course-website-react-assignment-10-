import React from "react";
import { Navbar, Tooltip } from "flowbite-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/MainContext";
import { useState } from "react";

const Header = () => {
  const { userLogout, user } = useContext(AuthContext);
  const SingOutButtonClick = () => {
    userLogout();
  };

  // set toggle state
  const [toggle, setToggle] = useState(true);
  const toggleTheme = () => {
    setToggle(!toggle)
  };
  return (
    <div>
      <div className="nav-main border-b-2 border-gray-100">
        <Navbar
          fluid={true}
          rounded={true}
          className=" rounded-none lg:px-20 xl:px-40"
        >
          <Navbar.Brand href="https://flowbite.com/">
            <img
              src="/assets/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-mono font-bold dark:text-white">
              Jonkar EDU
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            {user ? (
              <div className="avatar-group flex">
                <button
                  onClick={SingOutButtonClick}
                  type="button"
                  class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Sign out
                </button>
                {user.photoURL ? (
                  <Tooltip content={user.displayName}>
                    <img
                      class="w-10 h-10 rounded-full"
                      src={user.photoURL}
                      alt="Rounded avatar"
                    />
                  </Tooltip>
                ) : (
                  <Tooltip content={user.displayName}>
                    <img
                      class="w-10 h-10 rounded-full"
                      src="https://celadon-granita-38dd91.netlify.app/images/avatar.jpg "
                      alt="Rounded avatar"
                    />
                  </Tooltip>
                )}
              </div>
            ) : (
              <div className="button-group">
                <Link
                  to="/login"
                  type="button"
                  class="text-white bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  type="button"
                  class="text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Register
                </Link>
              </div>
            )}

            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="font-general">
            <Link to="/">Home</Link>
            <Link to="/blog">Blogs</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/courses">Courses</Link>

            {/* toggle button */}
            <label
              for="default-toggle"
              class="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                id="default-toggle"
                class="sr-only peer"
              />
              <div
                onClick={toggleTheme}
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-orange-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"
              ></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {toggle?'light':'dark'}
              </span>
            </label>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;

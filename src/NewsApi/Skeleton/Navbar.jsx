import React from 'react';
import { NavLink } from 'react-router-dom';

import SearchBar from '../SearchComponents/SearchBar';

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col items-center text-black text-5xl font-bold mb-4 m-4"><a href="/">News</a></div>
      <div className="flex justify-center bg-blue-500 p-4 gap-5">
        <div className="flex flex-col m-auto gap-4">
          <nav className="max-w-6xl px-2 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center w-full gap-7">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  exact="true"
                  className="text-white hover:underline hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  All
                </NavLink>
                <NavLink
                  to="/top-headlines"
                  exact="true"
                  className="text-white hover:underline hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Top Headlines
                </NavLink>
                <NavLink
                  to="/top-headlines/sources"
                  exact="true"
                  className="text-white hover:underline hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Sources
                </NavLink>
              </div>
              <div className='mt-1'>
                <SearchBar />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

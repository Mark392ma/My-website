import React from 'react';
//import { FaBell, FaChevronDown } from 'react-icons/fa';

const LoginNavbar = () => {

  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex items-center space-x-4">
        <button
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md bg-white shadow-md"
          >
           Chat GPT 4v
          </button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-full bg-white shadow-md">
          {/* <FaBell size={20} /> */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-md w-5 h-5 flex items-center justify-center bg-white shadow-md">
            3
          </span>
        </button>
        <div className="flex items-center space-x-2 bg-white shadow-md rounded-md">
          <img
            src="https://via.placeholder.com/40"
            alt="User Profile"
            className="w-10 h-10 rounded-full"
          />
         {/* <FaChevronDown size={16} className="text-gray-700" />*/}
        </div>
      </div>
    </nav>
  );
};

export default LoginNavbar;



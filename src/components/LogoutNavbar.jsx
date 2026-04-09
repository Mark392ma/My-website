import React from 'react'


function LogoutNavbar({ onLogin }) {
  return (
      <>
        <nav className="mt-4 mx-auto w-4/5 flex items-center justify-between p-4 bg-black rounded-2xl shadow-md">
            <div className="flex items-center">
              <img src="/favicon.svg" alt="Logo" className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold text-white-800">Brand Name</span>
            </div>
            <ul className="flex items-center space-x-6">
              <li><a href="#" className="text-white hover:text-gray-800">Home</a></li>
              <li><a href="#" className="text-white hover:text-gray-800">Templates</a></li>
              <li><a href="#" className="text-white hover:text-gray-800">Pricing</a></li>
              <li><a href="#" className="text-white hover:text-gray-800">Support</a></li>
            </ul>
            <button className="bg-white hover:bg-white-700 text-black font-bold py-2 px-4 rounded-md" onClick={ onLogin }>
              Get Started
            </button>
          </nav>
      </>
    )
}

export default LogoutNavbar
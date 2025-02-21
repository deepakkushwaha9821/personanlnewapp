import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Budget 2025', path: '/budget-2025' },
    { name: 'Crime', path: '/crime' },
    { name: 'Accidents', path: '/accidents' },
    { name: 'Sports', path: '/sports' },
    { name: 'Politics', path: '/politics' },
    { name: 'Election', path: '/election' },
    { name: 'Culture', path: '/culture' },
    { name: 'Entertainment', path: '/entertainment' },
    { name: 'International', path: '/international' },
    { name: 'Weather', path: '/weather' },
  ];

  return (
    <div className="flex flex-col ml-50 mr-40">
      {/* Top Bar */}
      <div className="flex items-center p-4 bg-white shadow-md justify-between w-full">
        {/* Menu Button for Mobile */}
        <button className="p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars className="text-xl" />
        </button>

        {/* Profile Icon */}
        <div className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
          <FaUser className="text-xl text-gray-600" />
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Latest News Updates, Weather, Entertainment & Many More..."
          className="flex-grow mx-4 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 min-w-0"
        />
      </div>

      {/* Navigation Tabs */}
      <div
        className={`flex flex-col md:flex-row justify-around bg-gray-100 border-b overflow-x-auto transition-all duration-300 ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="p-4 text-gray-700 hover:text-blue-500 cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

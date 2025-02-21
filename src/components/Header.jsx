import React from "react";

const Header = () => {
  return (
    <header className="bg-indigo-900 text-white p-6">
      <div className="text-center mt-5">
        <h1 className="text-2xl md:text-4xl font-serif">The News</h1>
      </div>
      <div className="text-center">
        <p className="text-sm md:text-lg">Monday, January 23, 2025</p>
      </div>

      <button className="mt-4 bg-white text-indigo-900 py-1 px-3 md:py-2 md:px-4 rounded ml-[1200px]">
        Sign In / Log In
      </button>
    </header>
  );
};

export default Header;

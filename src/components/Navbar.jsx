import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-slate-600">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between font-sans">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <a href="/" className="flex flex-shrink-0 items-center mr-10">
              <img className="h-10 w-auto border-2 border-white rounded-full" src={logo} alt="ReadingTracker" />
              <span className="hidden md:block text-white text-2xl font-bold ml-3">
                Reading Tracker
              </span>
            </a>
            <div className="flex space-x-4 font-medium">
              <a
                href="/ReadingLog"
                className="text-white hover:bg-slate-500 border-2 border-white rounded-md text-2xl px-3 py-2"
              >
                Reading Log
              </a>
              <a
                href="/TBR"
                className="text-white hover:bg-slate-500 border-2 border-white rounded-md text-2xl px-3 py-2"
              >
                My Shelf
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

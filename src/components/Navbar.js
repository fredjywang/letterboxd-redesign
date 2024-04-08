import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import LetterboxLogo from './../assets/letterboxd-logo.png'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAlert = (e) => {
    e.preventDefault();
    alert("No change from main website, so did not implement for purposes of this assignment.");
  };
  
  return (
    <nav className="bg-nav z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* <div className="text-nav-text font-bold">My App</div> */}
        <NavLink to="/">
            <img src={LetterboxLogo} alt="Logo" className="object-contain h-16 w-52"   />
        </NavLink>
        <div className="flex space-x-4">
          <NavLink to="/films">Films</NavLink>
          <button 
            className="text-nav-text text-left hover:text-white transition-colors duration-300"
            onClick={handleAlert}
          >
            Members
          </button>
          <NavLink to="/lists">Lists</NavLink>
          <button 
            className="text-nav-text text-left hover:text-white transition-colors duration-300"
            onClick={handleAlert}
          >
            Journal
          </button>
          <div ref={dropdownRef} style={{ visibility : isDropdownOpen ? 'visible' : 'hidden' }}>
            <button
              onClick={toggleDropdown}
              className="flex items-center text-white focus:outline-none visible"
            >
              <CgProfile className="w-6 h-6 mr-2" />
              <span className="hidden sm:inline mr-2">hcistudent</span>
              <IoIosArrowDown />
            </button>
            <div className="absolute mt-2 w-48 bg-dropdown-bg shadow-lg">
              <div className="flex flex-col m-2 pl-4 space-y-2">
                <NavLinkDropdown to="/">Home</NavLinkDropdown>
                <NavLinkDropdown to="/profile">Profile</NavLinkDropdown>
                <button 
                  className="text-black text-left hover:text-white transition-colors duration-300"
                  onClick={handleAlert}
                >
                  Diary
                </button>
                <button 
                  className="text-black text-left hover:text-white transition-colors duration-300"
                  onClick={handleAlert}
                >
                  Reviews
                </button>
                <button 
                  className="text-black text-left hover:text-white transition-colors duration-300"
                  onClick={handleAlert}
                >
                  Network
                </button>
              </div>
              <div className="border-b border-divide flex-grow mt-2 mb-2 w-full"></div>
              <div className="flex flex-col m-2 pl-4 space-y-2">
                <button 
                  className="text-black text-left hover:text-white transition-colors duration-300"
                  onClick={handleAlert}
                >
                  Settings
                </button>
                <button 
                  className="text-black text-left hover:text-white transition-colors duration-300"
                  onClick={handleAlert}
                >
                  Subscriptions
                </button>
                <button 
                  className="text-black text-left hover:text-white transition-colors duration-300"
                  onClick={handleAlert}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
          {/* Add more NavLink components for other routes */}
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-nav-text hover:text-white transition-colors duration-300"
    >
      {children}
    </Link>
  );
};

const NavLinkDropdown = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-black hover:text-white transition-colors duration-300"
    >
      {children}
    </Link>
  );
};

export default Navbar;

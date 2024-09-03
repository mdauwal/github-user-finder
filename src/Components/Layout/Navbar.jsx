import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar shadow-lg mb-12 bg-neutral text-neutral-content">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Logo and Brand */}
        <div className="flex items-center">
          <Link to="/" className="font-bold align-middle text-lg flex items-center">
            <FaGithub className="inline pr-2 text-3xl" />
            Github Finder
          </Link>
        </div>
        
        {/* Hamburger Menu Button (visible on mobile) */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-neutral-content focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>

        {/* Links - Flex on Large Screens, Hidden on Mobile */}
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <div className="lg:flex lg:justify-end lg:items-center lg:space-x-4">
            <Link to="/" className="block mt-4 lg:mt-0 lg:inline-block btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="block mt-4 lg:mt-0 lg:inline-block btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
            <Link to="/contact" className="block mt-4 lg:mt-0 lg:inline-block btn btn-ghost btn-sm rounded-btn">
              Contact
            </Link>
            <Link to="/login" className="block mt-4 lg:mt-0 lg:inline-block btn btn-ghost btn-sm rounded-btn">
              Login
            </Link>
            <Link to="/signup" className="block mt-4 lg:mt-0 lg:inline-block btn btn-ghost btn-sm rounded-btn">
              Signup
            </Link>
            <Link to="/privacy" className="block mt-4 lg:mt-0 lg:inline-block btn btn-ghost btn-sm rounded-btn">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

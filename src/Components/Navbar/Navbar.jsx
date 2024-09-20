/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../Image/WorldChefLogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-[#f0f0f0] text-black fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4 h-24">
        
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/" onClick={handleScrollToTop} className="flex items-center">
            <img src={logo} alt="Logo" className="w-28 h-28 mr-2" />
          </Link>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-black"
          >
            {isOpen ? <FaTimes className="inline-block" /> : <FaBars className="inline-block" />}
          </button>

          {/* Sliding Menu for mobile */}
          <div
            className={`fixed top-0 right-0 w-64 bg-[#f0f0f0] h-full transform ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out shadow-lg`}
          >
            <div className="relative">
              {/* Close Icon */}
              {isOpen && (
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-0 right-4 text-2xl"
                >
                  <FaTimes className="text-black" />
                </button>
              )}

              <div className="p-4 mt-5 relative top-4">
                {['/', '/products', '/about', '/contact'].map((path, index) => (
                  <Link
                    key={index}
                    to={path}
                    className="block py-2 px-4 hover:bg-black hover:text-white rounded"
                    onClick={() => {
                      setIsOpen(false);
                      handleScrollToTop();
                    }}
                  >
                    {path === '/' ? 'HOME' : path.slice(1).toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex md:items-center md:space-x-4 text-lg">
          {['/', '/products', '/about', '/contact'].map((path, index) => (
            <Link
              key={index}
              to={path}
              className="py-2 px-4 hover:bg-black hover:text-white rounded font-semibold"
              onClick={handleScrollToTop}
            >
              {path === '/' ? 'HOME' : path.slice(1).toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Contact button section for large screens */}
        <div className="hidden lg:flex space-x-4">
          <a href="tel:9312369690" className="rounded px-4 py-2.5 group bg-black relative hover:bg-gradient-to-r hover:from-[#444343] hover:to-[#2c2c2c] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#2c2c2c] transition-all ease-out duration-300">
            <span className="absolute right-0 w-6 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Contact us</span>
          </a>
          <a href="mailto:sidharthchemhouse@gamil.com" className="rounded px-4 py-2.5 group bg-black relative hover:bg-gradient-to-r hover:from-[#444343] hover:to-[#2c2c2c] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#2c2c2c] transition-all ease-out duration-300">
            <span className="absolute right-0 w-6 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Send Mail</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

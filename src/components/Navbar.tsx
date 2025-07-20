import React, { useState } from 'react';
import logo from '@assets/images/logo/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-lg backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-full transition-opacity duration-300" />
              <img src={logo} className="relative h-14 w-auto" alt="BangkalanDev Logo" />
            </div>
          </button>

          <div className="hidden md:flex">
            <div className="flex items-center space-x-6">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Career', path: '/career' },
              ].map((item) => (
                <span
                  key={item.path}
                  className={`cursor-pointer px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive(item.path) ? 'text-[#EA222B]' : 'text-gray-700 hover:text-[#EA222B]'
                  } group relative`}
                  onClick={() => navigate(item.path)}
                >
                  {item.name}
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#EA222B] to-red-600 transition-all duration-300 ${
                      isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.open('https://t.me/bangkalandeveloper', '_blank');
                }
              }}
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#EA222B] to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span>Contact Us</span>
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100 hover:text-[#EA222B] focus:outline-none"
              onClick={() => setToggle(!toggle)}
            >
              <span className="sr-only">Open main menu</span>
              {!toggle ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${toggle ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="space-y-1 px-6 py-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Career', path: '/career' },
              ].map((item) => (
                <span
                  key={item.path}
                  className={`block cursor-pointer rounded-lg px-4 py-3 text-base font-semibold transition-all duration-300 ${
                    isActive(item.path) ? 'bg-[#EA222B] text-white' : 'text-gray-700 hover:bg-gray-50 hover:text-[#EA222B]'
                  }`}
                  onClick={() => {
                    navigate(item.path);
                    setToggle(false);
                  }}
                >
                  {item.name}
                </span>
              ))}

              <div className="pt-4">
                <button
                  type="button"
                  className="block w-full rounded-lg bg-gradient-to-r from-[#EA222B] to-red-600 px-4 py-3 text-center text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    window.open('https://t.me/bangkalandeveloper', '_blank');
                    setToggle(false);
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

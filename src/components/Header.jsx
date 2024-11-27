import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/solutions', label: 'Solutions' },
    { path: '/resources', label: 'Resources' },
    { path: '/about', label: 'About us' },
    { path: '/blog', label: 'Blog' },
  ];

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50 py-4">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between lg:justify-start lg:space-x-12">
          <Link to="/" className="flex items-center">
            <img src="/rian.webp" alt="Rian Logo" className="h-8" />
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-white hover:text-blue-400 transition-colors ${
                    isActive ? 'text-blue-400' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/vendor" className="text-white hover:text-blue-400">
              Vendor registration
            </Link>
            <Link to="/login" className="text-white hover:text-blue-400">
              Log in
            </Link>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
              Book a Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block text-white hover:text-blue-400 transition-colors ${
                    isActive ? 'text-blue-400' : ''
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/vendor"
              className="block text-white hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Vendor registration
            </Link>
            <Link
              to="/login"
              className="block text-white hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Link>
            <button className="w-full bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
              Book a Demo
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
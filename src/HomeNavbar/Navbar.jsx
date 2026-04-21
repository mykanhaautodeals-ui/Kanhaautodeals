// Navbar.jsx

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCalculator, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}assets/logo.png`}
            alt="logo"
            className="h-14 w-auto object-contain"
          />

          <div>
            <h2 className="text-2xl font-black text-black leading-none">
              Kanhaautodeals
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Vehicle Scrap Experts
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 font-semibold text-gray-700">
          <Link to="/"><li className="hover:text-green-600">Home</li></Link>
          <Link to="/about"><li className="hover:text-green-600">About</li></Link>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="flex items-center gap-2 hover:text-green-600">
              Resources <FaChevronDown size={12} />
            </div>

            {showDropdown && (
              <ul className="absolute top-8 left-0 bg-white shadow-xl rounded-xl w-52 py-3">
                <Link to="/blog">
                  <li className="px-5 py-2 hover:bg-green-50">Blogs</li>
                </Link>

                <Link to="/guide">
                  <li className="px-5 py-2 hover:bg-green-50">Guides</li>
                </Link>

                <Link to="/process">
                  <li className="px-5 py-2 hover:bg-green-50">
                    Scrapping Process
                  </li>
                </Link>
              </ul>
            )}
          </li>

          <Link to="/contact"><li className="hover:text-green-600">Contact</li></Link>
        </ul>

        {/* CTA */}
        <Link to="/" className="hidden md:block">
          <button className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg">
            <FaCalculator />
            Free Quote
          </button>
        </Link>

        {/* Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-6 space-y-5 shadow-xl">
          <Link to="/" onClick={() => setIsOpen(false)}><p>Home</p></Link>
          <Link to="/about" onClick={() => setIsOpen(false)}><p>About</p></Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}><p>Blogs</p></Link>
          <Link to="/guide" onClick={() => setIsOpen(false)}><p>Guides</p></Link>
          <Link to="/process" onClick={() => setIsOpen(false)}><p>Process</p></Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}><p>Contact</p></Link>

          <button className="w-full bg-green-600 text-white py-3 rounded-full font-bold">
            Free Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React, { useState } from "react";
import { FaCalculator, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logos */}
        <div className="flex items-center space-x-4">
          <img src="/src/assets/logo.jpeg" alt="MariiNox Logo" className="h-10" />
          
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/"><li className="cursor-pointer text-green-600 font-semibold">Home</li></Link>  
          <Link to="/about"><li className="cursor-pointer hover:text-green-600">About Us</li></Link> 
          
          {/* Dropdown Example */}
          <li className="relative group cursor-pointer">
            <span className="flex items-center hover:text-green-600">
              Resources <span className="ml-1">▼</span>
            </span>
            <ul className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition">
              <Link to="/blog"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Blogs</li></Link>
              <Link to="/guide"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Guides</li></Link>
              <Link to="/process"><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Scrapping Process</li></Link>
            </ul>
          </li>

          <Link to="/contact"><li className="cursor-pointer hover:text-green-600">Contact Us</li></Link>
        </ul>

        {/* Button */}
        <div className="hidden md:block">
          <button className="flex items-center bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
            <FaCalculator className="mr-2" />
            <Link to="/">Get Free Quote</Link>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-700">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 p-6 text-gray-700 font-medium">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <li className="cursor-pointer text-green-600 font-semibold">Home</li>
            </Link>  
            <Link to="/about" onClick={() => setIsOpen(false)}>
              <li className="cursor-pointer hover:text-green-600">About Us</li>
            </Link>  
            <Link to="/blog" onClick={() => setIsOpen(false)}>
              <li className="cursor-pointer hover:text-green-600">Blogs</li>
            </Link>  
            <Link to="/guide" onClick={() => setIsOpen(false)}>
              <li className="cursor-pointer hover:text-green-600">Guides</li>
            </Link>  
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <li className="cursor-pointer hover:text-green-600">Contact Us</li>
            </Link>  

            {/* Mobile Button */}
            <button className="flex items-center justify-center bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
              <FaCalculator className="mr-2" />
              <Link to="/">Get Free Quote</Link>
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close menu on mobile after clicking
    }
  };

  return (
    <nav className=" bg-gradient-to-br from-[#7cc771] to-[#1e293b] text-white fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-[clamp(2rem,3vw,1rem)] font-bold text-white">Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          {links.map((link) => (
            <li
              key={link}
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => handleScroll(link)}
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden  bg-gradient-to-br from-[#7cc771] to-[#1e293b] px-4 pb-4 space-y-2 text-lg font-medium flex flex-col items-center text-center">
          {links.map((link) => (
            <li
              key={link}
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => handleScroll(link)}
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
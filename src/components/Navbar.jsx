import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#100a16] text-white fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto py-2 flex justify-between items-center px-4">
        <Link 
        to="home" 
        smooth={true} 
        duration={500} 
        offset={-60}   // adjust for fixed navbar
        className="text-2xl font-bold cursor-pointer"
        >RoAa</Link>


        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 justify-center flex-1">
        <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            offset={-60}
            className="hover:text-gray-400 cursor-pointer"
        >
            Home
        </Link>
        <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            offset={-60}
            className="hover:text-gray-400 cursor-pointer"
        >
            About Me
        </Link>
        <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            offset={-60}
            className="hover:text-gray-400 cursor-pointer"
        >
            Contact
        </Link>
        </div>

        {/* Mobile Menu Button (right side) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center 
                     text-sm text-gray-400 rounded-lg hover:bg-gray-700 
                     focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
  <div className="md:hidden bg-[#100a16] py-4 flex flex-col items-center space-y-4 backdrop-blur-sm">
    <Link to="home" smooth={true} duration={500} offset={-60} onClick={() => setIsOpen(false)} className="hover:text-gray-400 cursor-pointer">Home</Link>
    <Link to="about" smooth={true} duration={500} offset={-60} onClick={() => setIsOpen(false)} className="hover:text-gray-400 cursor-pointer">About Me</Link>
    <Link to="contact" smooth={true} duration={500} offset={-60} onClick={() => setIsOpen(false)} className="hover:text-gray-400 cursor-pointer">Contact</Link>
  </div>

      )}
    </nav>
  );
}

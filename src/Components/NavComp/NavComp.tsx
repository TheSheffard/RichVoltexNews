import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLinks } from "./NavFucn";



export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation().pathname;

  return (
    <nav className="fixed top-0 left-0 w-full  bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={"/"} className="text-2xl font-bold">Rich Voltex</Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {NavLinks.map((el) => (
              <Link 
                key={el.to} 
                to={el.to} 
                className={`relative text-gray-700 hover:text-black transition duration-300 ${location === el.to ? "font-bold border-b-2 border-black" : ""}`}
              >
                {el.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 absolute top-16 left-0 w-full">
          {NavLinks.map((el) => (
            <Link 
              key={el.to} 
              to={el.to} 
              className={`block py-2 text-gray-700 hover:text-black transition duration-300 ${location === el.to ? "font-bold border-l-4 border-black pl-2" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {el.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

'use client';
import { useState, useEffect} from 'react';
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";


export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
const [showNavbar, setShowNavbar] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // down
        setShowNavbar(false);
      } else {
        // up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);


  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`bg-yellow-50 shadow-md sticky top-0 z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>

      <nav className="max-w-6xl mx-auto  py-4 px-4 flex justify-between items-center">
        <img src="/logo.png" alt="Aaoji" className="w-28 h-auto" />


        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-gray-700 font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-red-600">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <FaInstagram className="text-[#e7000b] text-2xl hover:cursor-pointer" />
          <FaFacebookSquare className="text-[#e7000b] text-2xl hover:cursor-pointer" />
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <MdOutlineRestaurantMenu size={28}/> : <MdOutlineMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown*/}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} onClick={() => setIsOpen(false)} className="hover:text-red-600 block ">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mt-4 text-[#e7000b] text-2xl">
            <FaInstagram className="hover:cursor-pointer" />
            <FaFacebookSquare className="hover:cursor-pointer" />
          </div>
        </div>
      )}
    </header>
  );
}

  
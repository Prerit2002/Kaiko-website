import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/Logo.png';
import Header1 from '../assets/Header.png';
import { Link } from 'react-router-dom'; 

const navLinks = [
  { name: 'Services', href: '#' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
  { name: 'About', href: '#about' },
  { name: 'Careers', href: '#jobs' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 bg-black rounded-2xl text-white relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Tagline */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-6 text-left">
          <Link to="/">
            <img src={Logo} alt="Kaiko Studios Logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-pink-500 font-semibold text-sm">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-pink-300 transition">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="text-yellow-400 font-light leading-tight text-lg hidden md:block md:text-xl lg:text-2xl mt-2 md:mt-0">
            <div>Crafting Design</div>
            <div>Experiences</div>
          </div>
      </div>

      {/* Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full  rounded-b-2xl  md:hidden p-6 flex flex-col gap-1 text-yellow-500 font-semibold text-base bg-transparent ">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-yellow-300 transition bg-black p-3 rounded-lg flex justify-between items-center"
              onClick={() => setIsOpen(false)} // Close drawer on click
            >

              {link.name}
              <img src={Header1} alt="Kaiko Studios Logo" className="h-6 w-auto mt-2" />
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

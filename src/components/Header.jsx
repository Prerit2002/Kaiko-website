import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png";
import Header1 from "../assets/Header.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { name: "SERVICES", href: "#services", isPage: false },
  { name: "WORK", href: "#work", isPage: false },
  { name: "CONACT", href: "#contact", isPage: false },
  { name: "ABOUT", to: "/about", isPage: true },
  { name: "CAREERS", to: "/career", isPage: true },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAnchor = (hash) => {
    const targetId = hash.replace("#", "");
    if (location.pathname !== "/") {
      navigate("/"); // go to home first
      // after navigation, give DOM a moment then scroll
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <header className="w-full px-2 py-4 bg-black rounded-2xl text-white relative z-50">
      <div className="px-4 mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-6 text-left">
          <Link to="/">
            <img src={Logo} alt="Kaiko Studios Logo" className="h-15 w-auto" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-32 font-semibold text-lg">
          {navLinks.map((link) =>
            link.isPage ? (
              <Link
                key={link.name}
                to={link.to}
                className="text-pink-500 hover:text-pink-300 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchor(link.href);
                }}
                className="text-pink-500 hover:text-pink-300 transition cursor-pointer"
              >
                {link.name}
              </button>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Tagline */}
        <div className="text-yellow-400 font-light leading-tight text-lg hidden md:block md:text-xl lg:text-2xl mt-2 md:mt-0 font-clash">
          <div>Crafting Design</div>
          <div>Experiences</div>
        </div>
      </div>

      {/* Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full rounded-b-2xl md:hidden p-6 flex flex-col gap-1 text-yellow-500 font-semibold text-base bg-transparent">
          {navLinks.map((link) =>
            link.isPage ? (
              <Link
                key={link.name}
                to={link.to}
                className="hover:text-yellow-300 transition bg-black p-3 rounded-lg flex justify-between items-center text-left w-full"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <img src={Header1} alt="icon" className="h-6 w-auto mt-2" />
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchor(link.href);
                }}
                className="hover:text-yellow-300 transition bg-black p-3 rounded-lg flex justify-between items-center cursor-pointer text-left w-full"
              >
                <span>{link.name}</span>
                <img src={Header1} alt="icon" className="h-6 w-auto mt-2" />
              </button>
            )
          )}
        </div>
      )}
    </header>
  );
}

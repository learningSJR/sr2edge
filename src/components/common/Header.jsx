import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Phone,
  Megaphone,
  LogIn,
  Heart,
  ShoppingCart,
  X,
  Menu,
} from "lucide-react";

function TopBar() {
  return (
    <div className="w-full text-gray-100 bg-gray-900">
      <div className="grid items-center grid-cols-1 gap-2 px-4 py-2 mx-auto text-sm max-w-7xl sm:px-6 lg:px-8 md:grid-cols-3">
        <div className="flex items-center justify-center gap-2 md:justify-start">
          <Phone size={16} className="text-green-500" />
          <span>
            Call:{" "}
            <a href="tel:+9144444444" className="hover:underline">
              (+91)-044 - 42658359
            </a>
          </span>
        </div>

        <div className="items-center justify-center hidden gap-2 md:flex text-emerald-300">
          <Megaphone size={16} />
          <span>Winter sale discount 50% off.</span>
        </div>

        <div className="flex items-center justify-center gap-5 md:justify-end">
          <a
            href="#login"
            className="flex items-center gap-1 hover:text-emerald-300"
          >
            <LogIn size={16} /> <span>Login / Register</span>
          </a>
          <a
            href="#wish"
            className="flex items-center gap-1 hover:text-emerald-300"
          >
            <Heart size={16} /> <span>Wishlist</span>
          </a>
          <a
            href="#cart"
            className="flex items-center gap-1 hover:text-emerald-300"
          >
            <ShoppingCart size={16} /> <span>Cart</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="grid w-16 h-14 place-items-center">
            <img src="/sr2edge-web-logo.svg" alt="SR2Edge Logo" />
          </div>
          <div className="grid h-16 w-36 place-items-center">
            <img src="/sr2edge-text-logo.svg" alt="SR2Edge Logo" />
          </div>
        </a>

        {/* Desktop menu */}
        <ul className="items-center hidden gap-8 font-medium md:flex">
          <li>
            <a href="#home" className="hover:text-emerald-700">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-emerald-700">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-emerald-700">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-emerald-700">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-emerald-700">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="p-2 border border-gray-200 rounded-lg md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 md:hidden">
          <ul className="grid gap-3 px-4 py-3 mx-auto font-medium max-w-7xl sm:px-6 lg:px-8">
            {[
              ["Home", "#home"],
              ["Services", "#services"],
              ["About", "#about"],
              ["Portfolio", "#portfolio"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default function Header() {
  return (
    <>
      <TopBar />
      <NavBar />
    </>
  );
}

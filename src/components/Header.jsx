import React, { useState } from "react";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-center w-full">
      <div className="container mx-auto w-full">
        <div className="bg-orange-300 text-white px-6 py-3 my-3 rounded-lg relative shadow-md z-50 flex items-center justify-between">
          <img src="/logo.png" alt="Logo" style={{ width: "100px" }} />

          <div className="md:hidden flex justify-end">
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              color="#ffffff"
              size={20}
              label="Toggle Menu"
            />
          </div>

          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-orange-300 text-white shadow-lg z-50 mt-1 divide-y divide-gray-400">
              <ul className="py-2">
                <li className="px-4 py-3 hover:bg-orange-500 transition-colors">
                  <a href="/">Home</a>
                </li>
                <li className="px-4 py-3 hover:bg-orange-500 transition-colors">
                  <a href="/about">About</a>
                </li>
                <li className="px-4 py-3 hover:bg-orange-500 transition-colors">
                  <a href="/contact">Contact</a>
                </li>
                <li className="px-4 py-3 hover:bg-orange-500 transition-colors">
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </div>
          )}

          <nav className="hidden md:block text-center">
            <ul className="flex justify-center gap-6 text-lg font-semibold">
              <li>
                <a className="hover:text-purple-500" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-purple-500" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-purple-500" href="/contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="hover:text-purple-500" href="/blog">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

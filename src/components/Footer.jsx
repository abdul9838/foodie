import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-800 py-8 text-sm">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top Footer Section with Wrap */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
          {/* Logo */}
          <div className="text-lg font-semibold order-1">
            <Link to="/" className="hover:underline">
              Foodie
            </Link>
          </div>

          {/* Social Icons in the Middle */}
          <div className="flex space-x-4 order-2">
            <a
              href="https://www.instagram.com/abdul_ahed786/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-ahad-04850a248/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4 order-3">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/recipes" className="hover:underline">
              Recipes
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-gray-500">
          &copy; 2025 Foodie. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

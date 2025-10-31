import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-violet-800 text-white py-12 px-6 lg:px-20">
      {/* Sezione Hire Me */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-violet-600 pb-8 mb-8">
        <h3 className="text-2xl font-bold mb-4 lg:mb-0">Let's Connect there</h3>
        <button
          onClick={() =>
            (window.location.href = "mailto:monica.castro997@gmail.com")
          }
          className="flex items-center space-x-2 py-2 px-6 border border-white text-white rounded-full hover:bg-fuchsia-500 hover:scale-110 hover:shadow-[0_0_12px_#f0abfc] transition-all duration-300 ease-out"
        >
          <span>Hire me</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Colonna 1: Social + testo */}
        <div className="md:col-span-1">
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.facebook.com/tuo_profilo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white rounded-full w-8 h-8 flex items-center justify-center text-white hover:bg-fuchsia-500 hover:scale-110 hover:shadow-[0_0_12px_#f0abfc] transition-all duration-300 ease-out"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/m_joka.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white rounded-full w-8 h-8 flex items-center justify-center text-white hover:bg-fuchsia-500 hover:scale-110 hover:shadow-[0_0_12px_#f0abfc] transition-all duration-300 ease-out"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/monica-castrogiovanni-3bb605219"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-white rounded-full w-8 h-8 flex items-center justify-center text-white hover:bg-fuchsia-500 hover:scale-110 hover:shadow-[0_0_12px_#f0abfc] transition-all duration-300 ease-out"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <p className="text-sm opacity-80 leading-relaxed text-left">
            Design is more than aesthetics – it’s about creating meaningful
            experiences that inspire and engage. I believe in combining
            creativity with functionality to craft projects that leave a lasting
            impression. Whether it’s a website, an interactive interface, or a
            visual concept, every project is an opportunity to explore new ideas
            and push boundaries. Let’s connect and bring bold ideas to life
            together!
          </p>
        </div>

        {/* Colonna 2: Navigazione */}
        <div className="md:col-span-1">
          <h4 className="font-bold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <Link
                to="/"
                className="hover:text-fuchsia-500 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-fuchsia-500 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="hover:text-fuchsia-500 transition-colors duration-300"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-fuchsia-500 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Colonna 3: Contatti */}
        <div className="md:col-span-1">
          <h4 className="font-bold mb-4">Contact</h4>
          <p className="text-sm opacity-80">329/7349840</p>
          <p className="text-sm opacity-80">monica.castro997@gmail.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center pt-8 border-t border-violet-600">
        <p className="text-xs opacity-60">
          Copyright © 2025. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

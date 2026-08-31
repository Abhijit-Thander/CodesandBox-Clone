import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#ffffff] px-6 py-4 flex items-center justify-between border-b border-gray-100 font-sans text-[#161616]">
      <div className="flex items-center gap-10">
        <Link to="/" href="#" className="flex items-center gap-2">
          <svg
            className="w-6 h-6 text-[#DCFF50]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
              stroke="#161616"
              fill="#DCFF50"
            ></path>
            <polyline
              points="3.27 6.96 12 12.01 20.73 6.96"
              stroke="#161616"
            ></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12" stroke="#161616"></line>
          </svg>
          <span className="text-xl font-bold tracking-tight">CodeSandbox</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <Link href="#" className="hover:text-gray-500 transition-colors">
            Features
          </Link>
          <Link href="#" className="hover:text-gray-500 transition-colors">
            Explore
          </Link>
          <Link href="#" className="hover:text-gray-500 transition-colors">
            Teams
          </Link>
          <Link href="#" className="hover:text-gray-500 transition-colors">
            Pricing
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-6 text-sm font-semibold">
        <Link
          href="#"
          className="hidden sm:block hover:text-gray-500 border-2 border-[#DCFF50] px-5 py-2.5 rounded-md transition-colors"
        >
          Sign In
        </Link>
        <Link
          href="#"
          className="bg-[#DCFF50] text-[#161616] px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity"
        >
          Get Started for Free
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

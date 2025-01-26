// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import webmLogo from "../assets/milkyway_logo.webm";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 flex items-center justify-between bg-black text-white px-4 py-2 shadow-lg">
       {/* Logo */}
      <div className="logo-container flex items-center">
        <Link to="/">
          <video>
            {/* Primary Animated Logo */}
            <source srcSet={webmLogo} type="video/webm" />
            {/* Fallback Static Logo */}
            <img
              src="/assets/hvu_logo_fallback.png"
              alt="HVU Logo"
              className="logo-animation"
            />
          </video>
        </Link>
      </div>

      {/* Nav Links (Desktop) */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link to="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/organisation" className="hover:text-gray-300">Organisation</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300">About</Link>
        </li>
      </ul>

      {/* Auth Buttons (Desktop) */}
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/login">
        <button className="relative inline-block px-6 py-3 font-bold text-white group group border border-black rounded-lg">
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-in-out transform bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-lg blur-sm opacity-75 group-hover:opacity-90 group-hover:blur-md"></span>
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-in-out transform bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 rounded-lg group-hover:translate-x-1 group-hover:translate-y-1"></span>
          <span className="relative z-10">Login</span>
        </button>
        </Link>
        <Link to="/signup">
        <button className="relative inline-block px-6 py-3 font-bold text-white group group border border-black rounded-lg">
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-in-out transform bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 rounded-lg group-hover:translate-x-1 group-hover:translate-y-1"></span>
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-in-out transform bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-lg blur-sm opacity-75 group-hover:opacity-90 group-hover:blur-md"></span>
          <span className="relative z-10">Sign Up</span>
        </button>
        </Link>
      </div>

      {/* Mobile Menu Button (Optional) */}
      {/* e.g., Hamburger icon to toggle a small menu on mobile screens */}
    </nav>
  );
}

export default Navbar;
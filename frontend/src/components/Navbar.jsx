// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import webmLogo from "../assets/milkyway_logo.webm";
import { motion } from "framer-motion";

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/", icon: "🌌" },
    { name: "Organisation", path: "/organisation", icon: "🛸" },
    { name: "About", path: "/about", icon: "👽" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 flex items-center justify-between bg-black text-white px-6 py-2 shadow-xl backdrop-blur-xl border-a border-cyan-500/20">
      {/* Animated Logo with Particle Trail */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="logo-container flex items-center"
      >
        <Link to="/" className="flex items-center group relative">
          <div className="absolute -inset-2 bg-cyan-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-16 h-16 object-contain filter drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          >
            <source src={webmLogo} type="video/webm" />
            <img
              src="/assets/hvu_logo_fallback.png"
              alt="MVU"
              className="w-20 h-20"
            />
          </video>
         
        </Link>
      </motion.div>

      {/* Holographic Navigation Links */}
      <ul className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <motion.li 
            key={link.name}
            whileHover={{ y: -2 }}
          >
            <Link 
              to={link.path} 
              className="px-4 py-2 relative group transition-all duration-300"
            >
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 blur-lg transition-opacity" />
              <div className="flex items-center space-x-2">
                <span className="text-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  {link.icon}
                </span>
                <span className="relative z-10 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent group-hover:text-cyan-400 transition-all">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-cyan-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Quantum Auth Buttons */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/login">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-5 py-2.5 font-bold group overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-600/80 to-purple-600/80 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
            <span className="relative z-10 flex items-center space-x-2">
              <span className="text-xl">🚀</span>
              <span className="bg-gradient-to-r from-cyan-200 to-purple-200 bg-clip-text text-transparent">
                Login
              </span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </Link>
        
        <Link to="/signup">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-5 py-2.5 font-bold group overflow-hidden rounded-2xl border-2 border-cyan-500/50 hover:border-cyan-400 bg-black/30 backdrop-blur-lg"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span className="text-xl">🖍️</span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Sign Up
              </span>
            </span>
            <div className="absolute inset-0 bg-cyan-500/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100" />
          </motion.button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
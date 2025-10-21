import React from 'react';
import { NavLink } from 'react-router-dom'; // must be 'react-router-dom', not 'react-router'
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4">
      
      {/* Logo or Home Link */}
      <div className="text-xl font-bold text-primary">
        <NavLink to="/">MySite</NavLink>
      </div>

      {/* Navigation Links */}
      <div className="nav flex gap-5 text-accent">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? "text-primary font-semibold" : "")}
        >
          Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => (isActive ? "text-primary font-semibold" : "")}
        >
          About
        </NavLink>
        <NavLink 
          to="/career" 
          className={({ isActive }) => (isActive ? "text-primary font-semibold" : "")}
        >
          Career
        </NavLink>
      </div>

      {/* User / Login Button */}
      <div className="login-btn flex items-center gap-3">
        <img src={user} alt="User" className="w-8 h-8 rounded-full" />
        <button className="btn btn-primary px-6 py-2">Login</button>
      </div>
    </div>
  );
};

export default Navbar;

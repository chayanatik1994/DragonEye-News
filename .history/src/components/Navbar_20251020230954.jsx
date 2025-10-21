import React from 'react';
import { NavLink } from 'react-router';
import user  from "../assets/user.png"

// Navbar component for top navigation
const Navbar = () => {
    return (
        // Main navbar container
        <div className='flex justify-between items-center'>

            {/* Left section (can be used for logo or brand name) */}
            <div className="/">
                {/* Empty for now */}
            </div>

            {/* Center navigation links */}
            <div className="nav flex gap-5 text-accent">
                {/* Navigation links using NavLink for active route styling */}
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>

            {/* Right section - user icon and login button */}
            <div className="login-btn flex gap-5">
                {/* User profile icon */}
                <img src={user}/>
                {/* Login button */}
                <button class='btn btn-primary px-10'>Login</button>
            </div>
        </div>
    );
};

// Exporting Navbar component
export default Navbar;

import React from 'react';
import { NavLink } from 'react-router';
i
const Navbar = () => {
    return (
        <div>
         <div className="/">
          
         </div>
            <div className="nav">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/career'>Career</NavLink>
         </div>
            <div className="login-btn">
            <button class='btn btn-primary px-10'>Login</button>
         </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
         <div className="/">
           Home
         </div>
            <div className="nav">
          <NavLink to='/'>
             Home
          </NavLink>
         </div>
            <div className="login-btn">

         </div>
        </div>
    );
};

export default Navbar;
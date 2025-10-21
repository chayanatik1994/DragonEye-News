import React from 'react';
import logo from "../../assets/logo.png"
const Header = () => {
    return (
        <div className="flex justify-center flex-col ">
           <img src={logo} alt="" />
           <P>Journalism Without Fear or Favour</P>
        </div>
    );
};

export default Header;
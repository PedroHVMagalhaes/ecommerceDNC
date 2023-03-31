import React from 'react'
import dncLogo from "../../assets/logo-dnc.png";
import "./index.scss"


const Header = () => {
  return (
    //Block
    <div className="header">
        <img className='header__img' src={dncLogo} alt="dnc logo" />
        
    </div>
  );
};

export default Header;
import {Link, useLocation} from "react-router-dom";
import logo from '../../assets/shared/logo.svg';
import React, { useState } from "react";

function Navbar(props) {

    const[mobileMenu, setMobileMenu] = useState(false);

    const location = useLocation();

    const handleClick = (position) => {
        props.changeBg(position);
    }
    
    const  openMenu = () => {
        setMobileMenu(current => !current);
    }
    return (
      <header>
        <div className='main-container'>
            <img src={logo} alt='logo' className='logo'/>
            <div className='line'></div>
            <button className={mobileMenu ? "menu-btn active" : "menu-btn"} onClick={() => openMenu()}></button>
            {/* Desktop menu */}
            {!mobileMenu && (
                <div className={'nav-wrapper nav-text desktop'}>
                    <Link className={location.pathname === '/'?'nav-item active':'nav-item'} to='/' onClick={() => handleClick("home")}><span>00</span>Home</Link>
                    <Link className={location.pathname === '/destinations'?'nav-item active':'nav-item'} to='/destinations' onClick={() => handleClick("destination")}><span>01</span>Destination</Link>
                    <Link className={location.pathname === '/crew'?'nav-item active':'nav-item'} to='/crew' onClick={() => handleClick("crew")}><span>02</span>Crew</Link>
                    <Link className={location.pathname === '/technology'?'nav-item active':'nav-item'} to='/technology' onClick={() => handleClick("technology")}><span>03</span>technology</Link>
                </div>
            )}

            {/* Mobile menu */}
            {mobileMenu && (
                <div className={'nav-wrapper nav-text mobile'}>
                    <Link className={location.pathname === '/'?'nav-item active':'nav-item'} to='/' onClick={() => handleClick("home")}><span>00</span>Home</Link>
                    <Link className={location.pathname === '/destinations'?'nav-item active':'nav-item'} to='/destinations' onClick={() => handleClick("destination")}><span>01</span>Destination</Link>
                    <Link className={location.pathname === '/crew'?'nav-item active':'nav-item'} to='/crew' onClick={() => handleClick("crew")}><span>02</span>Crew</Link>
                    <Link className={location.pathname === '/technology'?'nav-item active':'nav-item'} to='/technology' onClick={() => handleClick("technology")}><span>03</span>technology</Link>
                </div>
            )}

        </div>
      </header>
    );
}
  
export default Navbar;
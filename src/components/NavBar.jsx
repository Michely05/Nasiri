import React, { useState } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const handleMenuToggle = () => {
        setMenuVisible(!isMenuVisible);
    };

    const handleNavLinkClick = () => {
        // Close the menu when clicking on a link
        setMenuVisible(false);
    };

    return (
        <div className='navBar'>
            <nav className={`menu ${isMenuVisible ? 'show' : 'hide'}`}>
                <ul className='menuList'>
                    <li className='route'><NavLink to="/" className='textRoute' activeClassName='active' onClick={handleNavLinkClick}>HOME</NavLink></li>
                    <li className='route'><NavLink to="/biography" className='textRoute' activeClassName='active' onClick={handleNavLinkClick}>BIOGRAPHY</NavLink></li>
                    <li className='route'><NavLink to="/events"  className='textRoute' activeClassName='active' onClick={handleNavLinkClick}>EVENTS</NavLink></li>
                    <li className='route'><NavLink to="/music" className='textRoute' activeClassName='active' onClick={handleNavLinkClick}>MUSIC</NavLink></li>
                    <li className='route'><NavLink to="/video" className='textRoute' activeClassName='active' onClick={handleNavLinkClick}>VIDEO</NavLink></li>
                    <li className='route'><NavLink to="/contact" className='textRoute' activeClassName='active' onClick={handleNavLinkClick}>CONTACT</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

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

    const showSideBar = () =>{
        const sideBar = document.querySelector('.menuList')
        sideBar.style.display = 'flex'
    }

    const closeSideBar= () =>{
        const sideBar = document.querySelector('.menuList')
        sideBar.style.display = 'none'
    }

    return (
        <div className='navBar'>

            <button className='menuBtn' onClick={showSideBar}><svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="40"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" fill='white' /></svg>
            </button>

            <nav className={`menu ${isMenuVisible ? 'show' : 'hide'}`}>
                <ul className='menuList'>
                    <li onClick={closeSideBar} className='closeBtn'><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" fill='white'/></svg></li>
                    <li className='route'><NavLink to="/" className='textRoute'activeclassname='active' onClick={handleNavLinkClick}>HOME</NavLink></li>
                    <li className='route'><NavLink to="/biography" className='textRoute'activeclassname='active' onClick={handleNavLinkClick}>BIOGRAPHY</NavLink></li>
                    <li className='route'><NavLink to="/events"  className='textRoute'activeclassname='active' onClick={handleNavLinkClick}>EVENTS</NavLink></li>
                    <li className='route'><NavLink to="/music" className='textRoute'activeclassname='active' onClick={handleNavLinkClick}>MUSIC</NavLink></li>
                    <li className='route'><NavLink to="/video" className='textRoute'activeclassname='active' onClick={handleNavLinkClick}>VIDEO</NavLink></li>
                    <li className='route'><NavLink to="/contact" className='textRoute'activeclassname='active' onClick={handleNavLinkClick}>CONTACT</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}
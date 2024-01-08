import { NavLink } from "react-router-dom"
import './NavBar.css'
export default function NavBar(){
    return(
        <nav className="navContainer">
        <ul>
            <li><NavLink to='/'>HOME</NavLink></li>
            <li><NavLink to='/biography'>BIOGRAPHY</NavLink></li>
            <li><NavLink to='/events' >EVENTS</NavLink></li>
            <li><NavLink to='/music' >MUSIC</NavLink></li>
            <li><NavLink to='/video' >VIDEO</NavLink></li>
            <li><NavLink to='/contact' >CONTACT</NavLink></li>
        </ul>
        </nav>
    )
}
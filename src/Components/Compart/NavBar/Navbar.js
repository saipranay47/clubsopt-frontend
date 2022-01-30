import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import "./NavbarElement.css"
function Navbar() {
    return (
        <header>
        <div className="logo">
        <Link to ="/Homepage">
        <span className="logopart1">Club<span className="logopart2">Spot</span>
        </span>
        </Link>
        </div>
        <nav>
            <ul className="nav_links">
                <li><Link to = "/Club">Club</Link></li>
                <li><Link to = "/Registration">Registration</Link></li>
                <li><Link to = "/Event">Event</Link></li>
                <li><Link to = "/Profile">Profile</Link></li>
            </ul>
        </nav>
        <a className = "but" href="/Login"><button className="cta">Login</button></a>
        </header>
    )
}

export default Navbar;

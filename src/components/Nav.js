import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Nav.css'

const Nav = ()=> {

    const navstyle={
        color: 'black'
    }

    return(
        <nav>
            <Link to='/dashboard' style={navstyle}>
            <h3 className='Mirror-logo'>MIRЯOR</h3>
            </Link>
            <ul className="nav-links">
                <Link to="/calendar" style={navstyle}>
                    <li>Calendar</li>
                </Link>
                <Link to="/entries" style={navstyle}>
                    <li>Entries</li>
                </Link>
                <Link to="/highlights" style={navstyle}>
                    <li>Highlights</li>
                </Link>
                <Link to="/entryform" style={navstyle}>
                    <li>New Entry</li>
                </Link>
                <Link to="/login" style={navstyle}>
                    <li>Sign Out</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;
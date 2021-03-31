import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Nav.css'

const Nav = ()=> {

    const navstyle={
        color: 'black'
    }

    return(
        <nav className="nav-bar">
            <Link to='/dashboard' style={navstyle}>
            <h3 className='mirror-logo'>Mirror</h3>
            </Link>
            <ul className="nav-links">
                <Link to="/entries" style={navstyle}>
                    <li>Entries</li>
                </Link>
                <Link to="/highlights" style={navstyle}>
                    <li>Highlights</li>
                </Link>
                <Link to="/entryform" style={navstyle}>
                    <li>New Entry</li>
                </Link>
                <Link to="/" style={navstyle}>
                    <li>Sign Out</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;
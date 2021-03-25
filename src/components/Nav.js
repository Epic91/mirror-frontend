import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ()=> {

    const navstyle={
        color: 'white'
    }

    return(
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/" style={navstyle}>
                    <li>Home</li>
                </Link>
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
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ()=> {
    return(
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/calendar">
                    <li>Calendar</li>
                </Link>
                <Link to="/entries">
                    <li>Entries</li>
                </Link>
                <Link to="/highlights">
                    <li>Highlights</li>
                </Link>
                <Link to="entries">
                    <li>New Entry</li>
                </Link>
                <Link to="/login">
                    <li>Sign Out</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;
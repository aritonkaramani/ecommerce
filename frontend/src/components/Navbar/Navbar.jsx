import React from 'react'
import './navbar.scss';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="wrapper">
            {/* Logo */}
            <div className="logo">Mockshop</div>
            <input type="text" className="searchbar" />
            <div className="links">
                <ul>
                    <li>
                        <Link to="/cart">
                        Log In
                        </Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
            <div className="burger"></div>
        </div>
    )
}

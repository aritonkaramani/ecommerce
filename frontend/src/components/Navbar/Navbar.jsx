import React from 'react'
import './navbar.scss';

export default function Navbar() {
    return (
        <div className="wrapper">
            {/* Logo */}
            <div className="logo">Mockshop</div>
            <input type="text" className="searchbar" />
            <div className="links">
                <ul>
                    <li>Log In</li>
                    <li>Cart</li>
                </ul>
            </div>
            <div className="burger"></div>
        </div>
    )
}

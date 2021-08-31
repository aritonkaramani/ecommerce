import React from 'react'
import './navbar.scss';
import {Link} from 'react-router-dom';

export default function Navbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"wrapper " +(menuOpen && "active")}>
            <div className="logo">
                <Link to="/">
                    Mockshop
                </Link>
            </div>
            <input type="text" className="searchbar" />
            <div className="links">
                <ul>
                    <li>
                        <Link to="/">
                            Shop
                        </Link>
                    </li>
                    <li>
                         <Link to="/cart" className="cartIcon">
                            <i className="fas fa-shopping-cart"></i>
                            Cart
                            <span className="cartlogo_badge">0</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="burger" onClick={()=> setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>
    )
}

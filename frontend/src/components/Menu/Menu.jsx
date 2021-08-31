import React from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " +(menuOpen && "active")}>
            <ul>
                <li>
                    <Link to="/" className="home" onClick={() => setMenuOpen(false)}>
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to="/" className="home" onClick={() => setMenuOpen(false)}>
                        Cart
                    </Link>
                </li>

            </ul>
        </div>
    )
}

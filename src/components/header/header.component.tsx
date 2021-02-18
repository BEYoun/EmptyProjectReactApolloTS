import React from 'react';
import { NavLink } from "react-router-dom";

import './header.component.css';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
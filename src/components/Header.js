import React from 'react';
import { NavLink } from "react-router-dom";
const Header = props => (
    <header className='black mb5 pt5'>
        <h1 className='ttu f3 tracked-mega anton tc mt0 mb3'>Mi Radio</h1>
        <ul className='list flex justifiy-center p10'>
            <li className='mh2'><NavLink className='nav-link link biryani-black f6 ttu gray' exact to='/'>Whats new</NavLink></li>
            <li className='mh2'><NavLink className='nav-link link biryani-black f6 ttu gray' exact to='/archive'>Archive</NavLink></li>
            <li className='mh2'><NavLink className='nav-link link biryani-black f6 ttu gray' exact to='/about'>About</NavLink></li>
        </ul>
    </header>
)

export default Header;


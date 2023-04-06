import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'   
import ActiveLink from '../Post/ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
            <ActiveLink to="/friends">Friends</ActiveLink>
            <ActiveLink to="/posts">posts</ActiveLink>
        </nav>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
            <>
                <nav className='navbar'>
                    <Link to = "/">Home</Link>
                    <Link to = "/dogs">Dogs</Link>
                    <Link to = "/cart">My cart</Link>
                </nav>
            </>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        // handle logout in state
    };

    return (
        <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/createapi">Create API</Link>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default Navbar;

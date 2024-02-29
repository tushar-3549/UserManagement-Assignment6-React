import React from 'react';
import './Nav.css';

const Nav = ({ handleSearch, handleSort }) => {
    return (
        <nav>
            <div className='nav-first'>
                <div className='nav-left'>
                    <input type="search" className="search-input" placeholder="Search..." onChange={handleSearch} />
                </div>
                <div className="nav-right">
                    <select onChange={handleSort}>
                        <option value="name">Sort by name</option>
                        <option value="email">Sort by email</option>
                        <option value="company">Sort by company name</option>
                    </select>
                </div>
            </div>
        </nav>
    );
};

export default Nav;

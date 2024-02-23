import React from 'react';

const DesktopNavbar = () => {
    return (
        <nav className="desktop-navbar">
            <div className="nav-links">
            <div className="title">
            <img src="/icons/Logo Green.png"></img>
            <a href="/home">Culinary Compass</a>
            </div>
                <a href="/home">Home</a>
                <a href="/recipe">Recipe</a>
                <a href="/restaurant">Restaurant</a>
                <a href="/profile">Profile</a>
            </div>
        </nav>
    );
};

export default DesktopNavbar;

import React from 'react';
import Link from 'next/link';

const DesktopNavbar = () => {
    return (
        <nav className="desktop-navbar">
            <div className="nav-links">
                <div className="title">
                    <img src="/icons/Logo Green.png" alt="Logo" />
                    <Link href="/home">Culinary Compass</Link>
                </div>
                <Link href="/home">Home</Link>
                <Link href="/recipes">Recipe</Link>
                <Link href="/restaurants">Restaurants</Link>
                <Link href="/profile">Profile</Link>
            </div>
        </nav>
    );
};

export default DesktopNavbar;

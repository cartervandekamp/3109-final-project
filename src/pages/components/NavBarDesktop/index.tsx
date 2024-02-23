import React from 'react';
import Link from 'next/link';
import styles from './NavBarDesktop.module.css'; 

const DesktopNavbar = () => {
    return (
        <nav className={styles.desktopNavbar}>
            <div className={styles.navLinks}>
                <div className={styles.title}>
                    <img src="/icons/Logo Green.png" alt="Logo" />
                    <Link href="/">Culinary Compass</Link>
                </div>
                <Link href="/">Home</Link>
                <Link href="/recipes">Recipe</Link>
                <Link href="/restaurants">Restaurants</Link>
                <Link href="/info">Info</Link>
            </div>
        </nav>
    );
};

export default DesktopNavbar;

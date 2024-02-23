import React from 'react';
import Link from 'next/link';
import styles from './NavBarDesktop.module.css'; 

const DesktopNavbar = () => {
    return (
        <div className={styles.desktopNavbar}>
            <div className={styles.content}>
            <div className={styles.logo}>
                <img src="/icons/Logo Green.png" alt="Logo" />
                <Link href="/">Culinary Compass</Link>
            </div>
            <div className={styles.navLinks}>
            <Link href="/">Home</Link>
            <Link href="/recipes">Recipe</Link>
            <Link href="/restaurants">Restaurants</Link>
            <Link href="/info">Info</Link>
        </div>
        </div>
    </div>
    );
};

export default DesktopNavbar;

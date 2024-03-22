import React from 'react';
import Link from 'next/link';
import styles from './NavbarDesktop.module.css'; 

const NavbarDesktop = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Link href="/"><img src="/icons/Logo Green.png" alt="Logo" /></Link>
                    {/* <Link href="/">Culinary Compass</Link> */}
                </div>
                <ul className={styles.navLinks}>
                    <Link href="/">Home</Link>
                    <Link href="/recipes">Recipes</Link>
                    <Link href="/restaurants">Restaurants</Link>
                    <Link href="/info">Info</Link>
                </ul>
            </div>
        </div>
    );
};

export default NavbarDesktop;

import React from 'react';
import Link from 'next/link';
import styles from './NavbarMobile.module.css';
import Image from 'next/image';

interface NavbarMobileProps {
    activePage: string;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({ activePage }) => {
    const getIconPath = (page: string) => {
        return activePage === page ? `${page}IconActive.svg` : `${page}IconInactive.svg`;
    };

    const getTextColor = (page: string) => {
        return activePage === page ? styles.activeText : styles.inactiveText;
    };

    return (
        <div className={styles.navbar}>
            <Link href="/" className={styles.navLinks}>
                <Image src={`/icons/${getIconPath('index')}`} alt="Home" width={40} height={40} />
                <div className={getTextColor('index')}>Home</div>
            </Link>
            <Link href="/recipes" className={styles.navLinks}>
                <Image src={`/icons/${getIconPath('recipes')}`} alt="Recipes" width={40} height={40} />
                <div className={getTextColor('recipes')}>Recipes</div>
            </Link>
            <Link href="/restaurants" className={styles.navLinks}>
                <Image src={`/icons/${getIconPath('restaurants')}`} alt="Restaurants" width={40} height={40} />
                <div className={getTextColor('restaurants')}>Restaurants</div>
            </Link>
            <Link href="/profile" className={styles.navLinks}>
                <Image src={`/icons/${getIconPath('profile')}`} alt="Profile" width={40} height={40} />
                <div className={getTextColor('profile')}>Profile</div>
            </Link>
        </div>
    );
};

export default NavbarMobile;

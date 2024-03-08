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
                <Image src={`/icons/${getIconPath('index')}`} alt="Home" width={35} height={35} />
                <div className={getTextColor('index')}>Home</div>
            </Link>
            <Link href="/recipes" className={styles.navLinks}>
                <Image src={`/icons/${getIconPath('recipes')}`} alt="Recipes" width={35} height={35} />
                <div className={getTextColor('recipes')}>Recipes</div>
            </Link>
            <Link href="/restaurants" className={styles.navLinks}>
                <Image src={`/icons/${getIconPath('restaurants')}`} alt="Restaurants" width={35} height={35} />
                <div className={getTextColor('restaurants')}>Restaurants</div>
            </Link>
            <Link href="/info" className={styles.navLinks}>
                <Image src={`/icons/${getIconPath('info')}`} alt="Info" width={35} height={35} />
                <div className={getTextColor('info')}>Info</div>
            </Link>
        </div>
    );
};

export default NavbarMobile;

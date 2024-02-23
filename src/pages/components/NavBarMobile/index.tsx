import React from 'react';
import styles from './NavBarMobile.module.css'; 

const MobileNavbar = () => {
  return (
    <nav className="mobile-navbar">
      <a href="/home">
        <img src="HomeIconInactive.svg" alt="Home" />
      </a>
      <a href="/recipe">
        <img src="RecipeIconInactive.svg" alt="Recipe" />
      </a>
      <a href="/restaurant">
        <img src="RestaurantIconInactive.svg" alt="Restaurant" />
      </a>
      <a href="/info">
        <img src="ProfileIconInactive.svg" alt="Info" />
      </a>
    </nav>
  );
};

export default MobileNavbar;

import React, { useState } from 'react';
import axios from 'axios';
import RestaurantCard from './components/RestaurantCard';
import styles from '../styles/restaurants.module.css';
import NavbarMobile from './components/NavbarMobile';
import NavbarDesktop from './components/NavbarDesktop';

const RestaurantsPage = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const response = await axios.get(`/api/searchRestaurants?query=${query}`);
      setRestaurants(response.data.results);
    } catch (error) {
      console.error('Error searching restaurants:', error);
    }
  };

  return (
    <>
    <div className={styles.nav}>
      <NavbarMobile activePage="restaurants" />
      <NavbarDesktop />
    </div>
    <main className={styles.main}>
      <div className={styles.primaryContainer}>
        <div className={styles.titleContainer}>
          <h2>Welcome,</h2>
          <h1>Find a restaurant near you</h1>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            handleSearch(formData.get('query') as string);
          }}
        >
        <div className={styles.searchContainer}>
          <input type="text" name="query" placeholder="Search restaurants..." className={styles.search}/>
          <button type="submit" className={styles.searchButton}>Search</button>
        </div>
      </form>
        <div className={styles.restaurantContainer}>
          {restaurants.map((restaurant: IRestaurant, index: number) => (
            <RestaurantCard
              key={index}
              restaurant={restaurant}
            />
          ))}
        </div>
      </div>
    </main>
    </>
  );
};

export default RestaurantsPage;

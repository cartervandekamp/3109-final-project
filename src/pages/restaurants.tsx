import React, { useState } from 'react';
import axios from 'axios';
import RestaurantCard from './components/RestaurantCard';
import styles from '../styles/restaurants.module.css';

const RestaurantsPage = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const YELP_API_KEY = 'YOUR_YELP_API_KEY'; 

  const handleSearch = async () => {
    try {
      const response = await axios.get<any>(
        'https://api.yelp.com/v3/businesses/search',
        {
          headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
            'Content-Type': 'application/json'
          },
          params: {
            term: searchTerm,
            latitude: 49.2513,
            longitude: 123.0035,
          }
        }
      );
      setRestaurants(response.data.businesses);
    } catch (error) {
      console.error('Error searching restaurants:', error);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.primaryContainer}>
      <div className={styles.titleContainer}>
          <h2>Hey there,</h2>
          <h1>What's on the menu today?</h1>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <input
            type="text"
            placeholder="Search for restaurants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.search}
          />
          <button type="submit">Search</button>
        </form>
        <div className={styles.restaurantContainer}>
          {restaurants.map((restaurant: IRestaurant, index: number) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default RestaurantsPage;

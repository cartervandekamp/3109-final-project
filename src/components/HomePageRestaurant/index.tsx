import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RestaurantCard from '@/components/RestaurantCard';
import styles from './HomePageRestaurant.module.css';

const HomePageRestaurant = () => {
  const [restaurants, setRestaurants] = useState<any[]>([]);

  useEffect(() => {
    const fetchFeaturedRestaurants = async () => {
      try {
        // Perform a predetermined search query (e.g., "pasta") for featured restaurants
        const response = await axios.get(`/api/searchRestaurants?query=restaurant`);
        setRestaurants(response.data.results);
      } catch (error) {
        console.error('Error fetching featured restaurants:', error);
      }
    };

    fetchFeaturedRestaurants();
  }, []);

  return (
    <div className={styles.restaurantContainer}>
      {restaurants.map((restaurant: any, index: number) => (
        <RestaurantCard key={index} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default HomePageRestaurant;

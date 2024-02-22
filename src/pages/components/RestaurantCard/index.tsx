import React from 'react';
import styles from './RestaurantCard.module.css'; 

interface RestaurantCardProps {
  restaurant: IRestaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const { name, vicinity, icon } = restaurant;
  
  return (
    <div className={styles.card}>
      <p className={styles.name}>{name}</p>
      <p className={styles.calories}>{vicinity}</p>
      <img className={styles.image} src={icon} alt={name} />
    </div>
  );
};

export default RestaurantCard;
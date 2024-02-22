
import React from 'react';
import styles from './RestaurantCard.module.css';

interface RestaurantCardProps {
  restaurant: IRestaurant;
}

const RestaurantCard = ({ restaurant }:RestaurantCardProps ) => {
  const { name, image_url, url } = restaurant;

  return (
    <div className={styles.card}>
      <img className={styles.image} src={image_url} alt={name} />
      <p className={styles.name}>{name}</p>
      <a className={styles.link} href={url} target="_blank" rel="noopener noreferrer">
        View Restaurant
      </a>
    </div>
  );
};

export default RestaurantCard;

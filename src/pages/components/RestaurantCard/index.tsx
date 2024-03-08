import React, { useState, useEffect } from 'react';
import styles from './RestaurantCard.module.css'; 

interface RestaurantCardProps {
  restaurant: IRestaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const { name, vicinity } = restaurant;
  const [mapImage, setMapImage] = useState<string | null>(null);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;

  useEffect(() => {
    const fetchMapImage = async () => {
      try {
        const mapsImageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(vicinity)}&zoom=15&size=300x300&maptype=roadmap&markers=color:red%7Clabel:%7C${encodeURIComponent(vicinity)}&key=${apiKey}`;

        const response = await fetch(mapsImageUrl);
        if (response.ok) {
          const blob = await response.blob();
          const imageUrl = URL.createObjectURL(blob);
          setMapImage(imageUrl);
        } else {
          console.error('Failed to fetch map image:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching map image:', error);
      }
    };

    fetchMapImage();

    return () => {
      if (mapImage) {
        URL.revokeObjectURL(mapImage);
      }
    };
  }, [vicinity]);

  const handleDirections = () => {
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(vicinity)}`;
    window.open(mapsUrl, '_blank');
  };
  
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {mapImage && <img src={mapImage} alt={`Map of ${name}`} className={styles.mapImage} />}
      </div>
      <div className={styles.content}>
        <p className={styles.name}>{name}</p>
        <p className={styles.address}>{vicinity}</p>
        <p className={styles.directions} onClick={handleDirections}>Directions</p>
      </div>
    </div>
  );
};

export default RestaurantCard;

import React from 'react';
import styles from './RecipeCard.module.css'; 

interface RecipeCardProps {
  recipe: IRecipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const { label, image, calories, url } = recipe;
  
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={label} />
      <div className={styles.content}>
        <p className={styles.name}>{label}</p>
        <p className={styles.calories}>Calories: {Math.round(calories)}</p>
        <a className={styles.link} href={url} target="_blank" rel="noopener noreferrer">
          View Recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;



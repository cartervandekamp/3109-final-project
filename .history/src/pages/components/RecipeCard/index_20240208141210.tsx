import React from 'react';

interface RecipeCardProps {
  recipe: IRecipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const { label, image, calories, url } = recipe;
  
  return (
    <div>
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <p>Calories: {Math.round(calories)}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Recipe Link
      </a>
    </div>
  );
};

export default RecipeCard;



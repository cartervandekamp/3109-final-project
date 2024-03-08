import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '@/components/RecipeCard';
import styles from './HomePageRecipe.module.css';

const HomePageRecipe = () => {
  const [recipes, setRecipes] = useState<any[]>([]);

  const APP_ID = "d1cb94c1";
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`https://api.edamam.com/search?q=random&app_id=${APP_ID}&app_key=${apiKey}&to=10`);
        setRecipes(response.data.hits);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className={styles.recipeContainer}>
      {recipes.map((recipe: any, index: number) => (
        <RecipeCard key={index} recipe={recipe.recipe} />
      ))}
    </div>
  );
};

export default HomePageRecipe;

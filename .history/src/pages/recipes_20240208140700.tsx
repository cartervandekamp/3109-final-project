// pages/recipes.tsx
import React, { useState } from 'react';
import axios from 'axios';
import RecipeCard from './components/RecipeCard';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<any[]>([]); 

  const handleSearch = async (query: string) => {
    const APP_ID = "d1cb94c1";
    const apiKey = process.env.NEXT_PUBLIC_EDAMAM_API_KEY;
    const recipeURL = process.env.NEXT_PUBLIC_EDAMAM_API_URL;
    try {
      const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${apiKey}&to=12`);
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error searching recipes:', error);
    }
  };

  return (
    <div>
      <h1>Edamam Recipe Search</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          handleSearch(formData.get('query') as string);
        }}
      >
        <input type="text" name="query" placeholder="Search recipes..." />
        <button type="submit">Search</button>
      </form>
      <div>
        {recipes.map((recipe: any, index: number) => ( 
          <RecipeCard key={index} recipe={recipe.recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;

// pages/recipes.tsx
import React, { useState } from 'react';
import axios from 'axios';
import RecipeCard from './components/RecipeCard';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<any[]>([]); 

  const handleSearch = async (query: string) => {
    const apiKey = process.env.NEXT_PUBLIC_EDAMAM_API_KEY;
    const recipeURL = process.env.NEXT_PUBLIC_EDAMAM_API_URL;
    try {
      const response = await axios.get(`${recipeURL}?q=${encodeURIComponent(query)}&app_id=YOUR_APP_ID&app_key=${apiKey}`);
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
        {recipes.map((recipe: any, index: number) => ( // Adjust type as needed
          <RecipeCard key={index} recipe={recipe.recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;

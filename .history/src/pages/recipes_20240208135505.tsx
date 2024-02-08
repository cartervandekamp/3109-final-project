// pages/recipes.tsx
import React, { useState } from 'react';
import axios from 'axios';
import RecipeCard from './components/RecipeCard';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const response = await axios.get<Recipe[]>(`/api/recipes?query=${encodeURIComponent(query)}`);
      setRecipes(response.data);
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
        {recipes.map((recipe: Recipe, index: number) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;

import React, { useState } from 'react';
import axios from 'axios';
import RecipeCard from './components/RecipeCard';
import styles from '../styles/recipes.module.css'; 
import NavbarMobile from './components/NavbarMobile';
import NavbarDesktop from './components/NavbarDesktop';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<any[]>([]); 

  const handleSearch = async (query: string) => {
    const APP_ID = "d1cb94c1";
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    try {
      const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${apiKey}&to=12`);
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error searching recipes:', error);
    }
  };

  return (
    <>
    <NavbarMobile activePage="recipes" />
    <NavbarDesktop />
    <main className={styles.main}>
      <div className={styles.primaryContainer}>
        <div className={styles.titleContainer}>
          <h2>Hey there,</h2>
          <h1>What's on the menu today?</h1>
        </div>
        <form
          className={styles.searchForm}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            handleSearch(formData.get('query') as string);
          }}
        >
          <div className={styles.searchContainer}>
            <input type="text" name="query" placeholder="Search recipes..." className={styles.search}/>
            <button type="submit" className={styles.searchButton}>Search</button>
          </div>
        </form>
        <div className={styles.recipeContainer}>
          {recipes.map((recipe: any, index: number) => ( 
            <RecipeCard key={index} recipe={recipe.recipe} />
          ))}
        </div>
      </div>
    </main>
    </>
  );
};

export default RecipesPage;

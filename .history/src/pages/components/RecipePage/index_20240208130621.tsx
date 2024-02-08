import React, { useState, useEffect } from "react";
import RecipeCard from "../RecipeCard";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [pinnedRecipes, setPinnedRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showAddRecipeForm, setShowAddRecipeForm] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    calories: "",
    link: ""
  });
  const [customRecipes, setCustomRecipes] = useState([]);

  const fetchData = async () => {
    try {
      const APP_ID = "d1cb94c1";
      const APP_KEY = "d2ef0c2d4777921b87af4b254f1423a5";

      const response = await fetch(
        `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&to=12`
      );
      const data = await response.json();

      const relevantCustomRecipes = customRecipes.filter((recipe) =>
        recipe.label.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setRecipes([...relevantCustomRecipes, ...data.hits]);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const pinRecipe = (recipe) => {
    const timestamp = new Date().getTime();
    const updatedPinnedRecipes = [
      { ...(recipe.recipe || recipe), timestamp },
      ...pinnedRecipes
    ].sort((a, b) => b.timestamp - a.timestamp);

    setPinnedRecipes(updatedPinnedRecipes);
  };

  const unpinRecipe = (recipe) => {
    const updatedPinnedRecipes = pinnedRecipes.filter(
      (pinnedRecipe) => pinnedRecipe !== recipe
    );
    setPinnedRecipes(updatedPinnedRecipes);
  };

  const handleSearch = () => {
    fetchData();
    setShowResults(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleAddRecipe = () => {
    setShowAddRecipeForm(true);
  };

  const handleNewRecipeChange = (e) => {
    const { name, value } = e.target;

    if (name === "calories" && isNaN(value)) {
      return;
    }

    setNewRecipe({ ...newRecipe, [name]: value });
  };

  const handleSaveRecipe = () => {
    const placeholderImageUrl =
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

    const link =
      newRecipe.link.startsWith("http://") ||
      newRecipe.link.startsWith("https://")
        ? newRecipe.link
        : `https://${newRecipe.link}`;

    const updatedCustomRecipes = [
      ...customRecipes,
      {
        label: newRecipe.name,
        calories: parseFloat(newRecipe.calories),
        url: link,
        image: placeholderImageUrl
      }
    ];

    setCustomRecipes(updatedCustomRecipes);
    setShowAddRecipeForm(false);
    setNewRecipe({ name: "", calories: "", link: "" });
  };

  return (
    <div>
      <div className="top-container">
        <h1>Dinner Planner</h1>
        <p>
          Search for the recipes you want, pin recipes to your Cook Book, and
          craft tonight's perfect meal.
        </p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="search-box"
          />
          <button onClick={handleAddRecipe} className="add-recipe-button">
            Add Recipe
          </button>
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
      </div>

      {showAddRecipeForm && (
        <div className="add-recipe-form">
          <input
            type="text"
            placeholder="Recipe Name"
            name="name"
            value={newRecipe.name}
            onChange={handleNewRecipeChange}
          />
          <input
            type="text"
            placeholder="Calories"
            name="calories"
            value={newRecipe.calories}
            onChange={handleNewRecipeChange}
          />
          <input
            type="text"
            placeholder="Link to Recipe"
            name="link"
            value={newRecipe.link}
            onChange={handleNewRecipeChange}
          />
          <button onClick={handleSaveRecipe}>Save Recipe</button>
        </div>
      )}

      <div>
        <h3>Cook Book</h3>
        <div className="pinned-recipes">
          {pinnedRecipes.map((recipe) => (
            <div className="pinned-recipe-card" key={recipe.label}>
              <p>{recipe.label}</p>
              <p>{`Calories: ${Math.round(recipe.calories)}`}</p>
              <div className="card-buttons">
                <a
                  href={recipe.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-recipe"
                >
                  View Recipe
                </a>
                <button onClick={() => unpinRecipe(recipe)}>Unpin</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showResults && (
        <div>
          <h2>All Recipes</h2>
          <div className="recipe-container">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.recipe ? recipe.recipe.label : recipe.label}
                recipe={recipe.recipe || recipe}
                onPin={() => pinRecipe(recipe)}
                onUnpin={() => unpinRecipe(recipe)}
                isPinned={pinnedRecipes.some(
                  (pinnedRecipe) =>
                    pinnedRecipe.uri ===
                    (recipe.recipe ? recipe.recipe.uri : recipe.uri)
                )}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
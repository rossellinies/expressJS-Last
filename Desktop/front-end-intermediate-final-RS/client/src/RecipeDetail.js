import React from "react";
import { Link, useParams } from "react-router-dom";

function RecipeDetail(props) {
  const { recipeId } = useParams();
  const currRecipe = props.recipes.filter((recipe) => recipe._id === recipeId);
  const thisRecipe = { ...currRecipe[0] };

  return (
    <div>
      <img src={`/img/${thisRecipe.image}`} alt={thisRecipe.title} />
      <h1>{thisRecipe.title}</h1>
      <h3>Written by: {thisRecipe.author}</h3>
      <p>{thisRecipe.description}</p>
      <h4>Recipe Ingredients:</h4>
      <p>{thisRecipe.ingredients}</p>
      <h4>Follow Directions:</h4>
      <p>{thisRecipe.directions}</p>
      <h4>Nutrition Facts:</h4>
      <p>{thisRecipe.nutrition}</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default RecipeDetail;

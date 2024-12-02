import { useState } from "react";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";

const Main = () => {
  const [showRecipe, setShowRecipe] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const newIngredient = formData.get("ingredient").trim();
    newIngredient &&
      setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
    formEl.reset();
  };

  const handleRecipeButton = async () => {
    const recipeGenerated = await getRecipeFromMistral(ingredients);
    setShowRecipe(recipeGenerated);
  };

  return (
    <main className="main-section font-inter">
      <form
        onSubmit={handleFormSubmit}
        className="md:px-0 sm:px-5 md:my-12 md:mx-0 sm:my-10 sm:mx-6 my-8 mx-4 flex justify-center items-center md:gap-4 gap-2 "
      >
        <input
          className="md:w-1/2 w-full shadow border border-gray-300 md:p-4 sm:p-3 p-2 rounded-lg md:text-base sm:text-sm text-xs outline-none focus:ring-amber-600 focus:ring-2 focus:ring-inset"
          placeholder="eg: oregano"
          type="text"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button className="lg:w-1/6 md:w-1/4 sm:w-1/6 w-1/4 font-inter font-medium bg-black text-white hover:drop-shadow-2xl hover:shadow-gray-600 hover:scale-95 delay-75 transition ease-out duration-150 md:text-base sm:text-sm text-xs md:p-4 sm:p-3 p-2 rounded-lg ">
          <p className="md:block hidden">+ Add ingredient</p>
          <p className="md:hidden ">Enter</p>
        </button>
      </form>
      {ingredients.length !== 0 && (
        <IngredientsList
          handleRecipeButton={handleRecipeButton}
          ingredients={ingredients}
        />
      )}
      {showRecipe && <Recipe  recipe={showRecipe} />}
    </main>
  );
};

export default Main;

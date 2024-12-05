import { useState } from "react";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";

const Main = () => {
  const [showRecipe, setShowRecipe] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    const recipeGenerated = await getRecipeFromMistral(ingredients);
    setShowRecipe(recipeGenerated);
    setIsLoading(false);
  };

  return (
    <main className="main-section font-inter">
      <form
        onSubmit={handleFormSubmit}
        className="md:px-0 sm:px-5 md:my-12 md:mx-0 sm:my-6 sm:mx-6 my-4 mx-4 flex justify-center items-center md:gap-4 gap-2 "
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
          setIngredients={setIngredients}
        />
      )}
      {isLoading ? (
        <div className="md:mx-[240px] sm:mx-[100px] mx-[50px] my-10 font-semibold flex sm:flex-row flex-col justify-center items-center gap-2 ">
          <p className="text-amber-700 lg:text-xl md:text-lg sm:text-base text-sm">
            Chef Mistral is preparing a recipe
          </p>
          <div className="flex justify-center items-center">
            <div className="flex gap-1 mt-1">
              <div className="w-2 h-2 rounded-full bg-amber-700 animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-amber-700 animate-bounce [animation-delay:-.3s]" />
              <div className="w-2 h-2 rounded-full bg-amber-700 animate-bounce [animation-delay:-.5s]" />
            </div>
          </div>
        </div>
      ) : (
        showRecipe && <Recipe recipe={showRecipe} />
      )}
    </main>
  );
};

export default Main;

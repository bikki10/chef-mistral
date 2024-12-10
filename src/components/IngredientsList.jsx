/* eslint-disable react/prop-types */
import { RxCross2 } from "react-icons/rx";


const IngredientsList = ({
  ingredients,
  setIngredients,
  handleRecipeButton,
  refs,
}) => {
  const handleRemoveButton = (itemToRemove) => {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((item) => item !== itemToRemove)
    );
  };

  const ingredientsListItems = ingredients.map((item) => (
    <li
      className="flex justify-between shadow p-4 rounded md:ml-[5px] md:mr-[20px]"
      key={item}
    >
      {item}{" "}
      <button
        onClick={() => handleRemoveButton(item)}
        className="py-1 px-2 text-gray-600 hover:text-red-500 rounded md:text-xl"
      >
        <RxCross2 />
      </button>
    </li>
  ));

  return (
    <section>
      <div className="lg:mx-[250px] md:mx-[100px] sm:mx-[52px] mx-[16px] flex flex-col gap-4">
        {ingredients.length !== 0 && (
          <h1 className="text-lg sm:text-xl md:text-3xl font-semibold">
            Ingredients on hand:
          </h1>
        )}
        <ul className="md:ml-4 ml-[5px] text-[#475467] md:text-lg sm:text-base text-sm sm:space-y-2 space-y-1 flex flex-col justify-center">
          {ingredientsListItems}
        </ul>
      </div>
      {
        <div
          ref={refs}
          className="bg-[#F0EFEB] transition duration-150 delay-100 ease-in-out gap-4 flex flex-col justify-center md:gap-1 md:items-center my-4 sm:my-6 md:my-8 md:px-8 md:py-8 px-4 py-4 sm:py-6 lg:mx-[270px] md:mx-[100px] sm:mx-[60px] mx-[20px] rounded-lg"
        >
          <p className="md:text-lg text-base font-medium">
            Ready for a recipe?
          </p>
          <div className="flex md:flex-row flex-col md:justify-center md:items-end gap-4">
            <p className="text-[#6B7280] md:text-base text-sm">
              {ingredients.length >= 3
                ? ` Generate a recipe from your list of ingredients.`
                : `Add at-least 3 ingredients to start.`}
            </p>
            <button
              disabled={ingredients.length < 3 ? true : false}
              onClick={handleRecipeButton}
              className={`py-2 px-4 text-white md:text-base text-sm ${
                ingredients.length >= 3
                  ? "bg-amber-600 hover:drop-shadow-2xl hover:shadow-gray-600 hover:scale-95 delay-75 transition ease-out duration-150"
                  : "bg-neutral-300"
              } rounded-md`}
            >
              Get a recipe
            </button>
          </div>
        </div>
      }
    </section>
  );
};

export default IngredientsList;

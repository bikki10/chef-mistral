/* eslint-disable react/prop-types */

const IngredientsList = ({ingredients, handleRecipeButton}) => {
  const ingredientsListItems = ingredients.map((item) => (
    <li key={item}>{item}</li>
  ));
  return (
    <section>
      <div className="lg:mx-[250px] md:mx-[100px] sm:mx-[52px] mx-[16px] flex flex-col gap-4">
        <h1 className="text-lg sm:text-xl md:text-3xl font-semibold">
          Ingredients on hand:
        </h1>
        <ul className="ml-4 list-disc text-[#475467] md:text-lg sm:text-base text-sm md:space-y-4 sm:space-y-2 space-y-1">
          {ingredientsListItems}
        </ul>
      </div>
      {ingredients.length >= 4 && (
        <div className="bg-[#F0EFEB] transition duration-150 delay-100 ease-in-out gap-4 md:gap-0 flex flex-col justify-center md:items-center my-4 sm:my-6 md:my-8 md:px-8 md:py-8 px-4 py-4 sm:py-6 lg:mx-[270px] md:mx-[100px] sm:mx-[60px] mx-[20px] rounded-lg">
          <p className="md:text-lg text-base font-medium">
            Ready for a recipe?
          </p>
          <div className="flex md:flex-row flex-col md:justify-center md:items-end gap-4">
            <p className="text-[#6B7280] md:text-base text-sm">
              Generate a recipe from your list of ingredients.
            </p>
            <button
              onClick={handleRecipeButton}
              className="py-2 px-4 text-white md:text-base text-sm bg-[#D17557] rounded-md"
            >
              Get a recipe
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default IngredientsList;

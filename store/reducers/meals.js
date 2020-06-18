import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favouriteMeals.findIndex(
        meal => meal.id === mealId
      );

      if (existingIndex >= 0) {
        const updatedFavMeal = [...state.favouriteMeals];
        updatedFavMeal.splice(existingIndex, 1);
        return { ...state, favouriteMeals: updatedFavMeal };
      } else {
        meals = state.favouriteMeals.find(meal => mealid === mealId);
        return { ...state, favouriteMeals: state.favouriteMeals.concat(meals) };
      }

    default:
      return state;
  }
};
export default mealsReducer;

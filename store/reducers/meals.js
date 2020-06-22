import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE, SET_FILTERS } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favouriteMeals.findIndex(meal => {
        return meal.id === action.mealId;
      });

      if (existingIndex >= 0) {
        const updatedFavMeal = [...state.favouriteMeals];
        updatedFavMeal.splice(existingIndex, 1);
        return { ...state, favouriteMeals: updatedFavMeal };
      } else {
        meals = state.meals.find(meal => meal.id === action.mealId);
        return { ...state, favouriteMeals: state.favouriteMeals.concat(meals) };
      }

    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updatedFilteredMeals };

    default:
      return state;
  }
};
export default mealsReducer;

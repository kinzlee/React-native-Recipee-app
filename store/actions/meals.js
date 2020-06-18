export const TOGGLE_FAVOURITE = "TOGGLE_FAVOUTRITE";

export const toggleFavourite = id => {
  return { type: TOGGLE_FAVOURITE, mealId: id };
};

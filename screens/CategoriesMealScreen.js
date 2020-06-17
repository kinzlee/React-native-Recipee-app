import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";

const CategoriesMealScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;
  // const selectedCategory = CATEGORIES.find(catgry => catgry.id === categoryId);

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const selectedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );
  return <MealList listData={selectedMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CategoriesMealScreen;

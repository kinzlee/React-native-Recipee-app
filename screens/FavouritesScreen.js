import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

const FavouritesScreen = ({ navigation }) => {
  const favMeals = useSelector(state => state.meals.favouriteMeals);
  // const favMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={favMeals} navigation={navigation} />;
};

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

export default FavouritesScreen;

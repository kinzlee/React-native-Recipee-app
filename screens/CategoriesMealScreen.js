import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummy-data";
import CustomText from "../components/CustomText";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";

const CategoriesMealScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;
  // const selectedCategory = CATEGORIES.find(catgry => catgry.id === categoryId);

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const selectedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (selectedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <CustomText>No meals left, please check your filters?</CustomText>
      </View>
    );
  }

  return <MealList listData={selectedMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CategoriesMealScreen;

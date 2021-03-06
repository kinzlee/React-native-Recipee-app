import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem.js";
import { useSelector } from "react-redux";

const MealList = ({ listData, navigation }) => {
  const favouriteMeals = useSelector(state => state.meals.favouriteMeals);
  const renderMealItem = itemData => {
    const isFavourite = favouriteMeals.find(
      meal => meal.id === itemData.item.id
    );
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() => {
          navigation.navigate("mealsDetail", {
            mealId: itemData.item.id,
            headerTitle: itemData.item.title,
            isFav: isFavourite
          });
        }}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity.toUpperCase()}
        image={itemData.item.imageUrl}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 13
  }
});
export default MealList;

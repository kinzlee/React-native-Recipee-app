import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem.js";

const MealList = ({ listData, navigation }) => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() => {
          navigation.navigate("mealsDetail", {
            mealId: itemData.item.id,
            headerTitle: itemData.item.title
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
        style={{ width: "100%", paddingHorizontal: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  }
});
export default MealList;

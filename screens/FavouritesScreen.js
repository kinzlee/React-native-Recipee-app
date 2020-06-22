import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import CustomText from "../components/CustomText";

const FavouritesScreen = ({ navigation }) => {
  const favMeals = useSelector(state => state.meals.favouriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <CustomText>
          No favourite meals found. Pls add your favourite meals
        </CustomText>
      </View>
    );
  }

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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FavouritesScreen;

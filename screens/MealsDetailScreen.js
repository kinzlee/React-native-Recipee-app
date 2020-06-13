import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  Image
} from "react-native";
import { MEALS } from "../data/dummy-data";
import CustomText from "../components/CustomText";

const MealsDetailScreen = ({
  affordability,
  duration,
  complexity,
  navigation,
  route
}) => {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <CustomText>{selectedMeal.duration} minutes</CustomText>
        <CustomText>{selectedMeal.complexity.toUpperCase()}</CustomText>
        <CustomText>{selectedMeal.affordability.toUpperCase()}</CustomText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      <Text>List Of Ingredients...</Text>
      <Text style={styles.title}>Steps</Text>
      <Text>List Of Steps</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: 220
  },
  details: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default MealsDetailScreen;

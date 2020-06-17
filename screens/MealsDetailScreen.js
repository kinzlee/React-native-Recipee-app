import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  Image
} from "react-native";
// import { MEALS } from "../data/dummy-data"
import { useSelector } from "react-redux";
import CustomText from "../components/CustomText";

const ListItem = ({ children }) => {
  return (
    <View style={styles.ListItem}>
      <CustomText>{children}</CustomText>
    </View>
  );
};

const MealsDetailScreen = ({
  affordability,
  duration,
  complexity,
  navigation,
  route
}) => {
  const { mealId } = route.params;
  const availableMeals = useSelector(state => state.meals.meals);
  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <CustomText>{selectedMeal.duration} minutes</CustomText>
        <CustomText>{selectedMeal.complexity.toUpperCase()}</CustomText>
        <CustomText>{selectedMeal.affordability.toUpperCase()}</CustomText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
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
    justifyContent: "space-around"
  },
  ListItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    elevation: 1,
    padding: 10
  }
});

export default MealsDetailScreen;

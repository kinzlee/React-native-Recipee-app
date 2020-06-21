import React, { useEffect, useCallback } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  Image
} from "react-native";
// import { MEALS } from "../data/dummy-data"
import { useSelector, useDispatch } from "react-redux";
import { CommonActions } from "@react-navigation/native";
import CustomText from "../components/CustomText";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { toggleFavourite } from "../store/actions/meals";

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
  const availableMeals = useSelector(state => state.meals.meals);
  const { mealId } = route.params;
  const mealFav = useSelector(state =>
    state.meals.favouriteMeals.some(meal => meal.id === mealId)
  );

  useEffect(() => {
    navigation.setParams({ isFav: mealFav });
  }, [mealFav]);
  const selectedMeal = availableMeals.find(meal => meal.id === mealId);
  const dispatch = useDispatch();
  const favStore = useCallback(() => {
    dispatch(toggleFavourite(mealId));
  }, [dispatch, mealId]);
  // dispatch();

  useEffect(() => {
    navigation.setParams({ fav: favStore });
  }, [favStore]);

  const fava = route.params.fav;
  const favSwitch = route.params.isFav;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({}) => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            iconName={favSwitch ? "ios-star" : "ios-star-outline"}
            onPress={() => {
              fava();
            }}
          />
        </HeaderButtons>
      )
    });
  }, [navigation, route]);

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

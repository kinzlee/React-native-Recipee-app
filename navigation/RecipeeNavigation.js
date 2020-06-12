import * as React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealScreen from "../screens/CategoriesMealScreen";
import MealsDetailScreen from "../screens/MealsDetailScreen";
import Colors from "../constants/Colors";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import FavouritesScreen from "../screens/FavouritesScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { grey } from "color-name";

const defaultNavigationOption = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primartyColor : ""
  },
  headerTintColor: Platform.OS === "android" ? "#ffff" : Colors.primartyColor,
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

const headerON = ({ route }) => {
  return route.options.title === "favourites" ? true : "false";
};

const Stack = createStackNavigator();

const FavStack = () => {
  return (
    <Stack.Navigator
      // headerMode="none"/
      screenOptions={defaultNavigationOption}
    >
      <Stack.Screen
        name="favourites"
        component={FavouritesScreen}
        options={{
          title: "favourites"
        }}
        // options={}
      />
      <Stack.Screen
        name="mealsDetail"
        component={MealsDetailScreen}
        options={{ title: "Meals Detail" }}
      />
    </Stack.Navigator>
  );
};

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavigationOption}>
      <Stack.Screen
        name={"meals"}
        component={CategoriesScreen}
        options={{
          // headerShown: false,
          title: "Categories"
        }}
      />
      <Stack.Screen
        name="categoriesMeal"
        component={CategoriesMealScreen}
        options={({ route }) => {
          const { categoryId } = route.params;
          const selectedCategory = CATEGORIES.find(
            catgry => catgry.id === categoryId
          );

          return {
            title: selectedCategory.title
          };
        }}
      />
      <Stack.Screen
        name="mealsDetail"
        component={MealsDetailScreen}
        options={({ route }) => {
          const { mealId } = route.params;
          const selectedMeal = MEALS.find(meal => meal.id === mealId);
          return {
            title: selectedMeal.title,
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Favourite"
                  iconName="ios-star"
                  onPress={() => {
                    console.log("this works correctly");
                  }}
                />
              </HeaderButtons>
            )
          };
        }}
      />
    </Stack.Navigator>
  );
};

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const MyTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        shifting={true}
        initialRouteName="meals"
        activeColor="#fff"
        inactiveColor="grey"
        barStyle={{ backgroundColor: Colors.primartyColor }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            let color;
            const activeTintColor = "#fff";
            const inactiveTintColor = "grey";
            if (route.name === "meals") {
              iconName = focused ? "ios-restaurant" : "ios-restaurant";
              size = 24;
              color = focused ? activeTintColor : inactiveTintColor;
            } else if (route.name === "favourites") {
              iconName = focused ? "ios-star" : "ios-star";
              size = 24;
              color = focused ? activeTintColor : inactiveTintColor;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
      >
        <Tab.Screen
          name="meals"
          component={MyStack}
          options={{
            headerMode: "screen",
            title: "meals",
            tabBarIcon: ({ color }) => (
              <Ionicons size={24} color={color} name="ios-restaurant" />
            ),
            tabBarColor: Colors.primartyColor
          }}
        />
        <Tab.Screen
          name="favourites"
          component={FavStack}
          options={{
            headerMode: "screen",
            title: "favourites",
            tabBarIcon: ({ color }) => (
              <Ionicons size={24} color={color} name="ios-star" />
            ),
            tabBarColor: Colors.secondaryColor
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MyTabs;

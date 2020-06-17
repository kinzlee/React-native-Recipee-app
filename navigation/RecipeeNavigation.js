import React, { useState, useEffect, useCallback } from "react";
import { Platform, Text } from "react-native";
import {
  NavigationContainer,
  DrawerActions,
  CommonActions
} from "@react-navigation/native";
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
import FiltersScreen from "../screens/FiltersScreen";
import { useSelector } from "react-redux";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import {SaveFilters} from '../screens/FiltersScreen';
import { SaveFilters } from "../screens/FiltersScreen";
import { grey } from "color-name";
// import MyTabs from "./RecipeeBottomNavigation";
// import MyTabs from "./RecipeeBottomNavigation";

<FiltersScreen
// hook = {useEffect(() => {
//   navigation.dispatch(CommonActions.setParams({ save: SaveFilters }));
// })}
/>;

const defaultNavigationOption = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primartyColor : ""
  },
  headerTintColor: Platform.OS === "android" ? "#ffff" : Colors.primartyColor,
  headerTitleStyle: {
    fontFamily: "Open-Sans-Bold"
  },
  headerBackTitleStyle: {
    fontFamily: "Open-Sans-Bold"
  }
};

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const MyTabs = () => {
  return (
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
          tabBarColor: Colors.primartyColor,
          tabBarLabel:
            Platform.OS === "android" ? (
              <Text style={{ fontFamily: "Open-Sans-Bold" }}>Meals</Text>
            ) : (
              "Meals"
            )
        }}
      />
      <Tab.Screen
        name="favourites"
        component={FavStack}
        options={{
          // headerMode: "screen",
          title: "favourites",
          tabBarIcon: ({ color }) => (
            <Ionicons size={24} color={color} name="ios-star" />
          ),
          tabBarColor: Colors.secondaryColor,
          tabBarLabel:
            Platform.OS === "android" ? (
              <Text style={{ fontFamily: "Open-Sans-Bold" }}>Favourites</Text>
            ) : (
              "Favourites"
            )
        }}
      />
    </Tab.Navigator>
  );
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
        options={({ navigation }) => {
          return {
            title: "Filters",
            headerLeft: ({}) => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName="ios-menu"
                  onPress={() => {
                    navigation.dispatch(DrawerActions.toggleDrawer());
                  }}
                />
              </HeaderButtons>
            )
            // headerLeftContainerStyle: (iconName = "ios-menu")
          };
        }}
      />
      <Stack.Screen
        name="mealsDetail"
        component={MealsDetailScreen}
        options={({ route, navigation }) => {
          const { headerTitle } = route.params;
          // const { mealId } = route.params;
          // const availableMeals = useSelector(state => state.meals.meals);
          // const selectedMeal = availableMeals.find(
          //   header => header.title === headerTitle
          // );
          return {
            title: headerTitle,
            headerLeft: ({}) => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName="ios-menu"
                  onPress={() => {
                    navigation.dispatch(DrawerActions.toggleDrawer());
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

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavigationOption}>
      <Stack.Screen
        name={"meals"}
        component={CategoriesScreen}
        options={({ navigation }) => {
          return {
            title: "Meal Categories",
            headerLeft: ({}) => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName="ios-menu"
                  onPress={() => {
                    navigation.dispatch(DrawerActions.openDrawer());
                  }}
                />
              </HeaderButtons>
            )
          };
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
          const { headerTitle } = route.params;

          return {
            title: headerTitle,
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

const FiltersNav = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavigationOption}>
      <Stack.Screen
        name="filters"
        component={FiltersScreen}
        options={({ navigation, route, save }) => {
          //   const {navigation} = props;
          //  appliedFilters = {
          //     glutenFree: isGlutenFree,
          //     lactoseFree: isLactoseFree,
          //     Vegetarian: isVegetarian,
          //     vegan: isVegan
          //   };
          //   console.log(appliedFilters);

          return {
            title: "Filters",

            headerLeft: ({}) => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName="ios-menu"
                  onPress={() => {
                    navigation.dispatch(DrawerActions.toggleDrawer());
                  }}
                />
              </HeaderButtons>
            )

            // headerRight: ({}) => (
            //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
            //     <Item
            //       title="Save"
            //       iconName="ios-save"
            //       onPress={() => {
            //         route.params.save;
            //       }}
            //     />
            //   </HeaderButtons>
            // )

            // headerLeftContainerStyle: (iconName = "ios-menu")
          };
        }}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: Colors.secondaryColor,
          labelStyle: {
            fontFamily: "Open-Sans-Bold"
          }
          // activeBackgroundColor: Colors.primartyColor
        }}
      >
        <Drawer.Screen
          name="MainStck"
          component={MyTabs}
          options={{
            drawerLabel: "Meals"
          }}
        />
        <Drawer.Screen
          name="filters"
          component={FiltersNav}
          options={{
            drawerLabel: "Filters"
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MyDrawer;

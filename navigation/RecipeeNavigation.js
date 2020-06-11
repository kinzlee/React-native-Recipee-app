import * as React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealScreen from '../screens/CategoriesMealScreen';
import MealsDetailScreen from '../screens/MealsDetailScreen';
import Colors from '../constants/Colors';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import FavouritesScreen from '../screens/FavouritesScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { grey } from 'color-name';


const Stack = createStackNavigator();
const MyStack = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primartyColor : ''
            },
            headerTintColor: Platform.OS === 'android' ? '#ffff' : Colors.primartyColor,
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        }}
        >
            <Stack.Screen name="categories" 
            component={MyTabs} 
            options = {{
                title: 'Meal Category'
            }}
            />
            <Stack.Screen name="categoriesMeal"
             component={CategoriesMealScreen} 
             options={({route}) => {
                const {categoryId} = route.params;
                const selectedCategory = CATEGORIES.find(catgry => catgry.id === categoryId);
                return {
                    title: selectedCategory.title
                }
             }}
             />
            <Stack.Screen name="mealsDetail" 
            component={MealsDetailScreen}
            options={({route}) => {
                const {mealId} = route.params;
                const selectedMeal = MEALS.find(meal => meal.id === mealId);
                return {
                    title: selectedMeal.title,
                    headerRight:() => ( <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item 
                        title="Favourite"
                        iconName="ios-star"
                        onPress={() => {
                            console.log('this works correctly')
                        }}
                        />
                    </HeaderButtons>
                    ),
                }
            }}
            />
        </Stack.Navigator>
        </NavigationContainer>
    );
};

const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();




MyTabs = () => {
    return (
    
        <Tab.Navigator
         screenOptions={({route}) => ({
            tabBarIcon: ({focused, size}) => {
                let iconName;
                let color
                const activeTintColor = Colors.secondaryColor;
                const inactiveTintColor = 'grey'
                if(route.name === 'meals') {
                iconName = focused ? 'ios-restaurant' : 'ios-restaurant';
                size = 24;
                color = focused ? activeTintColor: inactiveTintColor;

                } else if(route.name === "favourites") { 
                    iconName = focused ? 'ios-star' : 'ios-star';
                    size = 24;
                color = focused ? activeTintColor  : inactiveTintColor;
                }

                return<Ionicons  name ={iconName} size={size} color={color} />;
            },
        })}
        taBarOptions={{
            activeTintColor: Colors.secondaryColor,
            inactiveTintColor: 'grey'
        }}
        >
            <Tab.Screen name="meals" component={CategoriesScreen} />
            <Tab.Screen name="favourites" component={FavouritesScreen} />
        </Tab.Navigator>
    );
}


export default MyStack













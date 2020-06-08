import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealScreen from '../screens/CategoriesMealScreen';
import MealsDetailScreen from '../screens/MealsDetailScreen';


const Stack = createStackNavigator();

MyStack = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="categories" component={CategoriesScreen} />
            <Stack.Screen name="categoriesMeal" component={CategoriesMealScreen} />
            <Stack.Screen name="mealsDetail" component={MealsDetailScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack














import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealScreen from '../screens/CategoriesMealScreen';
import MealsDetailScreen from '../screens/MealsDetailScreen';
import Colors from '../constants/Colors';
import {CATEGORIES} from '../data/dummy-data';


const Stack = createStackNavigator();

MyStack = () => {

    const styleHeading
    return (
        <NavigationContainer>
        <Stack.Navigator>
            ScreenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primartyColor : ''
                },
                headerTintColor: Platform.OS === 'android' ? '#ffff' : Colors.primartyColor,
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
            }}
            <Stack.Screen name="categories" 
            component={CategoriesScreen} 
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
            <Stack.Screen name="mealsDetail" component={MealsDetailScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack














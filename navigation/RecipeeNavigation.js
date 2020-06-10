import * as React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealScreen from '../screens/CategoriesMealScreen';
import MealsDetailScreen from '../screens/MealsDetailScreen';
import Colors from '../constants/Colors';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';


const Stack = createStackNavigator();
MyStack = () => {
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

export default MyStack














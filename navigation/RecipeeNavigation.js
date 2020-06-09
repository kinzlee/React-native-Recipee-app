import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealScreen from '../screens/CategoriesMealScreen';
import MealsDetailScreen from '../screens/MealsDetailScreen';
import Colors from '../constants/Colors';


const Stack = createStackNavigator();

MyStack = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="categories" 
            component={CategoriesScreen} 
            options = {{
                title: 'Meal Category',
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primartyColor : ''
                },
                headerTintColor: Platform.OS === 'android' ? '#ffff' : Colors.primartyColor,
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
            }}
            />
            <Stack.Screen name="categoriesMeal" component={CategoriesMealScreen} />
            <Stack.Screen name="mealsDetail" component={MealsDetailScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack














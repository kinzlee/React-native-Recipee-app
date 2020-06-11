import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';


const CategoriesMealScreen = ({route, navigation}) => {
    const renderMealItem = (itemData) => {
        return (
            <MealItem title={itemData.item.title} 
            onSelectMeal={() => {
                navigation.navigate('mealsDetail', {
                    mealId: itemData.item.id
                });
            }}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity.toUpperCase()}
            image={itemData.item.imageUrl}
            />
        );
    } 
    const {categoryId} = route.params;
    // const selectedCategory = CATEGORIES.find(catgry => catgry.id === categoryId);
    const selectedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);
    return (
    <View style={styles.screen}>
        <FlatList 
        data={selectedMeals} 
        renderItem={renderMealItem}
        style={{width: '100%', paddingHorizontal:10}}
        /> 
    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CategoriesMealScreen;
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {MEALS} from '../data/dummy-data';

const MealsDetailScreen = ({navigation, route}) => {
    const {mealId} = route.params;
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return (
    <View style={styles.screen}>
        <Text> {selectedMeal.title} </Text>
        <Button title="Go Back To Categories" onPress={()=>navigation.popToTop()} />
    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealsDetailScreen;
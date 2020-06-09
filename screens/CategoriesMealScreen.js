import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';


const CategoriesMealScreen = ({route, navigation}) => {
    const {categoryId} = route.params;
    const selectedCategory = CATEGORIES.find(catgry => catgry.id === categoryId);
    return (
    <View style={styles.screen}>
        <Text>categogries  Meals screen </Text>
        <Text>{selectedCategory.title}</Text>
        <Button title="Go To Details" onPress={() => navigation.navigate('mealsDetail')} />
        <Button title="Go Back" onPress={() => navigation.goBack()} />
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
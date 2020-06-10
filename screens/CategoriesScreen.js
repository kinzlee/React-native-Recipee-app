import React from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform} from 'react-native';
import { CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGrid from '../components/CategoryGrid';


const CategoriesScreen = ({navigation}) => {
    const renderGridItem = (itemData) => {
        return (
        <CategoryGrid 
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
            navigation.navigate('categoriesMeal', {
                categoryId: itemData.item.id,
            });
        }}
        />
            );
    }
    return(
    <FlatList 
    data={CATEGORIES}
    renderItem={renderGridItem}
    numColumns={2}
    />
    );
};

    

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
   
});

export default CategoriesScreen;
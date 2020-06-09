import React from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform} from 'react-native';
import { CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';


const CategoriesScreen = ({navigation}) => {
    const renderGridItem = (itemData) => {
        return (
        <TouchableOpacity 
        style={styles.gridItem}
        onPress={() =>{
            navigation.navigate('categoriesMeal', {
                categoryId: itemData.item.id,
            });
        }}
        >
            <View style={styles.gridItem}>
                <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
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
    gridItem: {
        flex: 1,
        margin: 15, 
        height: 150
    }
});

export default CategoriesScreen;
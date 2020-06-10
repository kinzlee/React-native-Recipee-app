import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';

const CategoryGrid = ({title, onSelect, color}) => {
    let TouchableComp = TouchableOpacity;
    if(Platform.OS === "android"  && Platform.Version >=21) {
        TouchableComp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
    <TouchableComp
        style={{flex: 1}}
        onPress={onSelect}
        >
            <View style={{...styles.container, ...{backgroundColor: color}}}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableComp>
        </View>
        );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15, 
        height: 150,
        borderBottomEndRadius: 12
    },
    container: {
        flex: 1,
        borderBottomEndRadius: 12,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 5,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'Open-Sans-Bold',
        fontSize: 20,
        alignItems: 'center'
    }
});

export default CategoryGrid;
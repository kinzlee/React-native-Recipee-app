import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MealsDetailScreen = () => {
    return (
    <View style={styles.screen}>
        <Text> Meals Detail screen</Text>
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
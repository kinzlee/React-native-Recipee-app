import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const MealsDetailScreen = ({navigation}) => {
    return (
    <View style={styles.screen}>
        <Text> Meals Detail screen</Text>
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
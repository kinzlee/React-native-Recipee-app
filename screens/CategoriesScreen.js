import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const CategoriesScreen = ({navigation}) => {

    return(
    <View style={styles.screen}>
        <Text>categogries screen </Text>
        <Button title="go to Meals" onPress={() =>{
           navigation.navigate('categoriesMeal')
        }} />
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

export default CategoriesScreen;
import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import Colors from "../constants/Colors";

const FiltersScreen = () => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Filters Screen</Text>
      <View style={styles.filterContainer}>
        <Text>Gluten-free</Text>
        <Switch
          trackColor={{ false: Colors.secondaryColor }}
          trackColor={{ true: Colors.primartyColor }}
          thumbColor={Colors.primartyColor}
          value={isGlutenFree}
          onValueChange={newValue => setIsGlutenFree(newValue)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
    // justifyContent: "center"
  },
  title: {
    fontFamily: "Open-Sans-Bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%"
  }
});

export default FiltersScreen;

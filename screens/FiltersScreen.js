import React, { useState } from "react";
import { Platform, View, Text, StyleSheet, Switch } from "react-native";
import Colors from "../constants/Colors";

const FilterSwitch = ({ label, state, onChange }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        trackColor={{ false: Colors.secondaryColor }}
        trackColor={{ true: Colors.primartyColor }}
        thumbColor={Platform.OS === "android" ? Colors.primartyColor : ""}
        value={state}
        onValueChange={onChange}
      />
    </View>
  );
};

const FiltersScreen = () => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegitarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label={"Gluten-Free"}
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label={"Lactose-Free"}
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label={"Vegetarian"}
        state={isVegetarian}
        onChange={newValue => setIsVegitarian(newValue)}
      />
      <FilterSwitch
        label={"Vagan"}
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />

      {/* <Text style={styles.title}>Filters Screen</Text> */}
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
    width: "80%",
    marginVertical: 10
  }
});

export default FiltersScreen;

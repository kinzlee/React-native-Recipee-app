import React, { useCallback, useState, useEffect } from "react";
import { Platform, View, Text, StyleSheet, Switch } from "react-native";
import Colors from "../constants/Colors";
import { DrawerActions, CommonActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

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

const FiltersScreen = ({ navigation, route }) => {
  //   const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegitarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  // const SaveFilters = useCallback(() => {
  //   const appliedFilters = {
  //     glutenFree: isGlutenFree,
  //     lactoseFree: isLactoseFree,
  //     Vegetarian: isVegetarian,
  //     vegan: isVegan
  //   };
  //   console.log(appliedFilters);
  // }, [isGlutenFree, isLactoseFree, isVegetarian, isVegan]);

  // useEffect(() => {
  //   navigation.dispatch(CommonActions.setParams({ save: SaveFilters }));
  // }, [SaveFilters, navigation]);

  // const { save } = route.params;

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({

  //     headerRight: ({}) => (
  //       <HeaderButtons HeaderButtonComponent={HeaderButton}>
  //         <Item
  //           title="Save"
  //           iconName="ios-save"
  //           onPress={console.log(route.params.save)}
  //         />
  //       </HeaderButtons>
  //     )
  //   });
  // }, [navigation]);

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

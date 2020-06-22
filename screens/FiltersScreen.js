import React, { useCallback, useState } from "react";
import { Platform, View, Text, StyleSheet, Switch } from "react-native";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/meals";

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
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegitarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  const dispatch = useDispatch();

  const SaveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      Vegetarian: isVegetarian,
      vegan: isVegan
    };
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({}) => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Save"
            iconName="ios-save"
            onPress={() => {
              SaveFilters();
            }}
          />
        </HeaderButtons>
      )
    });
  }, [navigation, SaveFilters]);

  return (
    <View style={styles.screen}>
      <View style={styles.btnContainer}>
        <Text style={styles.title}>Available Filters / SortBy </Text>
        <View style={styles.btnStyle}></View>
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
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
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  btnStyle: {
    padding: 24
  },
  btnText: {
    marginRight: 5
  }
});

export default FiltersScreen;

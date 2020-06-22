import React, { useCallback, useState, useEffect } from "react";
import {
  Platform,
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity
} from "react-native";
import Colors from "../constants/Colors";
import { DrawerActions, CommonActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useDispatch } from "react-redux";
// import { SaveFilters } from "../store/actions";
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
  //   const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegitarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  const dispatch = useDispatch();

  const SaveFilters = () => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      Vegetarian: isVegetarian,
      vegan: isVegan
    };
    dispatch(setFilters(appliedFilters));
  };

  // useEffect(() => {
  //   navigation.setParams({ save: SaveFilters });
  // }, [SaveFilters]);

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
        <View style={styles.btnStyle}>
          {/* <TouchableOpacity onPress={SaveFilters}>
            <Ionicons size={24} color={Colors.primartyColor} name="ios-save" />
            <Text style={styles.btnText}>save</Text>
          </TouchableOpacity> */}
        </View>
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
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  btnStyle: {
    padding: 24
  },
  btnText: {
    // textAlign: "center",
    marginRight: 5
  }
});

export default FiltersScreen;

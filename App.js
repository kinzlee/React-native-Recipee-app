import React, { useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import RecipeeNavigation from "./navigation/RecipeeNavigation";
import MyStack from "./navigation/RecipeeNavigation";
// import MyTabs from "./navigation/RecipeeBottomNavigation";
import { combineReducers, createStore } from "redux";
import mealsReducer from "./store/reducers/meals";
import { Provider } from "react-redux";
import { useScreens } from "react-native-screens";

const rootReducer = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "Open-Sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "Open-Sans-Bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    // <RecipeeNavigation />
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
}

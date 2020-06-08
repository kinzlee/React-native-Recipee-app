import React, {useState} from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import RecipeeNavigation from './navigation/RecipeeNavigation';
import  MyStack  from './navigation/RecipeeNavigation';

const fetchFonts = () => {
  return Font.loadAsync({
    'Open-Sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'Open-Sans-Bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return <AppLoading 
    startAsync={fetchFonts}
    onFinish={() => setFontLoaded(true)}
    />
  }

  return (
    // <RecipeeNavigation />
    <MyStack />
  );
}


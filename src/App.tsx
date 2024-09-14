/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { CalculatorScreen } from './presentation/screens/calculatorScreen';
import { styles } from "./config/themes/app-themes"

import {
  StatusBar,
  Text,
  View,
} from 'react-native';



function App() {

  return (
    <View style={styles.background}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <CalculatorScreen />
    </View>
  );
}


export default App;

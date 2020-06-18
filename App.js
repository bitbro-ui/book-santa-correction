import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loginscreen from './screens/loginscreen';
import {Apptabnavigator} from './components/apptabnavigator'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'


export default function App() {
  return (
    <appcontainer/>
  );
}
const switchnavigator = createSwitchNavigator({
  Loginscreen:{screen:Loginscreen},
  BottomTab:{screen:Apptabnavigator}
})

const appcontainer = createAppContainer(switchnavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
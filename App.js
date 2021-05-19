import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {AppTabNavigator} from './components/AppTabNavigator';
import SettingScreen from './screens/SettingScreen';
import CustomSidebarMenu from './components/CustomSidebarMenu';
import { Settings } from 'react-native';

export default function App() {
  return (
    <View>
     <AppContainer/>
    </View>
  )
}

const AppNavigator = createSwitchNavigator({
  WelcomeScreen: {screen:WelcomeScreen},
  Drawer : {screen:AppDrawerNavigator}

 });
  const AppContainer=createAppContainer(AppNavigator)
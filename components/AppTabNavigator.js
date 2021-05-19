import React from 'react';
import {Image}from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ExchangeScreen from '../screens/ExchangeScreen';
import HomeScreen from '../screens/HomeScreen';



export const AppTabNvigator = createBottomTabNavigator({
    Exchange:{
        screen:ExchangeScreen,
        navigationOptions:{

        }
    },
    Home:{
        screen:HomeScreen,
        navigationOptions:{

        }
    }
});
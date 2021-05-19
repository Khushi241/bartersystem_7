import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import ExchangeScreen from '../screens/ExchangeScreen';
import HomeScreen from '../screens/HomeScreen';
import UserDetailScreen from '../screens/UserDetailScreen';

export const AppStackNavigator=createStackNavigator({
    ExchangeList:{
        screen:ExchangeScreen
    },
    UserDetailList:{
        screen:UserDetailScreen
    }
},
{initialRouteName:'ExchangeList'}

)
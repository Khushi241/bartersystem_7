import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSidebarMenu from './customSidebarMenu';
import SettingScreen from '../screens/settingScreen';

export const AppDrawerNavigator=createDrawerNavigator({
    Home:{
        screen:AppTabNavigator,
    },
    Setting:{
        screen:SettingScreen,
    }
},
{
    contentComponent:CustomSidebarMenu
},
{
    initialRouteName:'Home'
}

)
/*
//multiple screen drawer to Tab to stack
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{headerShown:0}}/>
      <Stack.Screen name="Settings" component={SettingsScreen} options={{title:""}}/>
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
*/



// Navigation from tab to Stack to Drawer
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProfileScreen from './ProfileScreen';
import DrawerNavigation from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return(
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Profile" component={ProfileScreen} initialParams={{itemID:2212247,itemName:"AyoushKumar"}} options={{headerShown:0}}/>
        <Stack.Screen name="Details" component={DrawerNavigation} options={{title:""}}/>
      </Stack.Navigator>
  )
}

export default HomeStack;





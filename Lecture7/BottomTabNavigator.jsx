
/*
//multiple screen drawer to Tab to stack
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{headerShown:0}} />
      <Tab.Screen name="Profile" component={ProfileScreen} initialParams={{Name:"Haseeb"}} options={{headerShown:0}}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
*/




//Navigation from Tab to Stack to Drawer
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import DetailScreen from './DetailScreen';
import nextscreen from './SettingsScreen';

const Drawer = createDrawerNavigator();

const draweruse = () => {
  return(
      <Drawer.Navigator initialRouteName="Details" screenOptions={{drawerPosition:"right"}}>
        <Drawer.Screen name="Details" component={DetailScreen}/>
        <Drawer.Screen name="Settings" component={nextscreen}/>
      </Drawer.Navigator>
  )
}


export default draweruse;



/*
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from "./screens/ProfileScreen";
import DetailScreen from './screens/DetailScreen';

const Drawer = createDrawerNavigator();

const Lecture = () => {
    return(
            <NavigationContainer>
               <Drawer.Navigator initialRouteName="Home">
               <Drawer.Screen name="Home" component={HomeScreen}/>
               <Drawer.Screen name="Profile" component={ProfileScreen}/>
               <Drawer.Screen name="Detail" component={DetailScreen} initialParams={{itemId : 2212247 , itemName:"Ayoush"}}/> 
               </Drawer.Navigator>
           </NavigationContainer>
    );
};

export default Lecture;
*/









/*
//Stack Navigation

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen name='Home' component={HomeScreen} options={{ title : 'Welcome'}}/>
                <Stack.Screen name='Profile' component={ProfileScreen}/>
                <Stack.Screen name='Detail' component={DetailScreen}/>

            </Stack.Navigator>
        </NavigationContainer>

    );
    // return(
    //     <NavigationContainer>
    //        <StackNavigation />
    //     </NavigationContainer>

    // );
}

export default App;
*/








/*
// Tab Navigator
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailScreen from './screens/DetailScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Profile" component={ProfileScreen}/>
                <Tab.Screen name="Detail" component={DetailScreen} initialParams={{ itemId: 1, itemName: "Default Item" }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
*/








/*
// Drawer Navigation

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailScreen from './screens/DetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
    return(
        <NavigationContainer>
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Detail" component={DetailScreen} initialParams={{ itemId: 1, itemName: 'Default from Drawer' }} />
        
      </Drawer.Navigator>
        </NavigationContainer>
    );

};

export default App;
*/





/*
//multiple screen drawer to Tab to stack
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import DetailScreen from './DetailScreen';

const Drawer = createDrawerNavigator();

const Lecture7 = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MainTabs">
        <Drawer.Screen name="MainTabs" component={BottomTabNavigator} options={{ title: 'Dashboard'}} />
        <Drawer.Screen name="Detail" component={DetailScreen} initialParams={{itemId:2212247,itemName:"Ayoush"}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Lecture7;
*/




//Navigation from Tab to Stack to Drawer
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './HomeScreen';
import HomeStack from './HomeStackNavigator';

const Tab = createBottomTabNavigator();

const Lecture = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Profile" component={HomeStack} options={{headerShown:0}}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
}

export default Lecture;

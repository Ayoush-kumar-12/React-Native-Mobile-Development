import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//navigationcontainer just use to control/manage navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddTaskScreen from './screens/AddTaskScreen';
import LoginScreen from './screens/LoginScreen';



// create stack navigation
const Stack = createNativeStackNavigator();

//App component and this start from login screen 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"WELCOME IN HOME SCREEN"}}/>
        <Stack.Screen name="TaskScreen" component={AddTaskScreen} options={{title:"WELCOME IN TASK SCREEN"}} />
        <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




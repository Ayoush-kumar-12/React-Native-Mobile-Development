/*
import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <View>
        <Text style={styling.label}>  Hi  </Text>

        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />

      </View>
    );
  };
  

export default HomeScreen;

const styling = StyleSheet.create({
    label:{
        fontSize:20,
        backgroundColor:'yellow',
        alignSelf:'center'
    }
})
*/




/*
//multiple screen drawer to Tab to stack
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🏠 Home Screen</Text>
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 }
});
*/









//Navigation from Tab to Stack to Drawer
import React from "react";
import {View,Text,StyleSheet,Alert,Button} from 'react-native';

const Home = () => {
  return(
      <View style={draw.label}>
        <Text>Hello This is Home Screen</Text>
        <Button title="Click" onPress={() => alert('Hello Ayoush')}/>
      </View>
  )
}

export default Home;

const draw = StyleSheet.create({
  label:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})



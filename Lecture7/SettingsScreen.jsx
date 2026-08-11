/*
//multiple screen drawer to Tab to stack
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>⚙️ Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 }
});
*/





//Navigation from Tab to Stack to Drawer
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Setting = () => {
  return(
     <View style={color.label}>
      <Text>welcome in Settings Screen</Text>
     </View>
  )
}

export default Setting;

const color = StyleSheet.create({
  label:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
  }
})

/*
import React from 'react';
import { Text,View,Button , StyleSheet} from 'react-native';

const ProfileScreen = ({navigation}) => {

        return(
            <View style={styles.container}>
                <Text>Profile Screen</Text>
                
                <Button title={"Go to Detail screen"}
                onPress={() => navigation.navigate('Detail', { itemId: 10, itemName: "Haseeb" })}
                />
            </View>
        );
};

// Styles
const styles = StyleSheet.create({
    container: {
        alignItems:'center',
    },
});

export default ProfileScreen;
*/







/*
//multiple screen drawer to Tab to stack
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = ({route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👤 Profile Screen</Text>
      <Text>Hello I am Mr {route.params.Name}</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 }
});
*/






//Navigation from Tab to Stack to Drawer
import React,{useState} from "react";
import {View,Text,StyleSheet,Button, TouchableOpacity} from 'react-native';

const ProfileScreen = ({route,navigation}) => {
  const [play,setplay] = useState(0);

  return(
      <>
      <View style={{borderBottomWidth:1}}><Text style={{fontSize:20,padding:10,margin:7,alignSelf:'center'}}>Profile</Text></View>

      <View style={coloring.label}>
        <Text>Welcome in ProfileScreen</Text>
        <Text>ROLL-NO: {route.params.itemID}</Text>
        <Text>NAME:    {route.params.itemName}</Text>
        <Button title="Click" onPress={() => (setplay(play+1))}/>
        <Text>Count: {play}</Text>

        <TouchableOpacity onPress={() => (navigation.navigate('Details'))}  style={coloring.buttonstyle}>
          <Text style={{padding:10,color:'white'}}> Go To Details Screen</Text>
        </TouchableOpacity>
      </View>

      </>
  )
}

export default ProfileScreen;

const coloring = StyleSheet.create({
  label:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  },
  buttonstyle:{
    borderRadius:50,
    backgroundColor:'blue',
    
  }
})

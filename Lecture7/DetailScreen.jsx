/*
import React from 'react';
import { View, Text, StyleSheet,Button} from 'react-native';

const DetailScreen = ({ route }) => {
    const { itemId, itemName } = route.params;

    return (
        <View style={styles.container}>
            <Text>Detail Screen</Text>
            <Text>Item ID: {route.params.itemId}</Text>
            <Text>Item Name: {itemName}</Text>
        </View>
    );
};

const styles =  StyleSheet.create({
    container : {
        flex : 1,
        justifyContent:'center',
        alignItems : 'center'
    }
    }
);

export default DetailScreen;
*/











/*
//multiple screen drawer to Tab to stack
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📄 Detail Screen</Text>
      <Text>Item ID: {route.params.itemId}</Text>
      <Text>Item Name: {route.params.itemName}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 }
});
*/





//Navigation from Tab to Stack to Drawer
import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput, Button} from 'react-native';

const Detailsshow = () => {
  const [name,setname] = useState('');

  return(
     <View style={color.label}>

      <Text>Hello</Text>

      <TextInput  style={color.input} placeholder='Name ?' onChangeText={setname}/>

      
      {name!=='' && <Text>How are you Mr.{name}</Text>}

     </View>
  )
}

export default Detailsshow;

const color = StyleSheet.create({
  label:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
  },
  input:{
    borderWidth:1,
    padding:5,
    margin:7,
    borderRadius:50,

  }
})

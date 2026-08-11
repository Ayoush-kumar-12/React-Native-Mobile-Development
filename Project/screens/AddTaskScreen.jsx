import React, { useState } from 'react';
import { Text,View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function AddTaskScreen({ route, navigation }) {
  const { addTask } = route.params;  //previous screen function route.params pass
  const [taskText, setTaskText] = useState('');


  // handleadd function that handle logic if we type nothing or type just spaces
  // then remove spaces and check userinput is not empty
  const handleAdd = () => {
    if (taskText.trim() !== '') {
      addTask(taskText);
      navigation.goBack();
    }
  };

  return (
    <View>

      <Text style={styles.textlabel}>Make your good habits part of your daily routine.</Text>

      <TextInput
        placeholder="Enter task"
        value={taskText}
        onChangeText={setTaskText}
        style={styles.label}
      />

     <TouchableOpacity style={styles.button}
       onPress={handleAdd}
      >
      <Text style={styles.buttontext}>ADD</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  textlabel:{
    fontSize:15,
    textAlign:'center',
    fontWeight:'bold',
    color:'blue'
  },

  label:{
  fontSize:18,
  textAlign:'center',
  fontWeight:'bold',
  borderRadius:50,
  borderColor:'black',
  borderWidth:1,
  margin:10,
}, 

button:{
     backgroundColor:'blue',
     borderWidth:1,
     borderRadius:50,
     alignItems:'center',
     margin:50
},

buttontext:{
  fontWeight:'bold',
  fontSize:25,
  color:'white',
},
});

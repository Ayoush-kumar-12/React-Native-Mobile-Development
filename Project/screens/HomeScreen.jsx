import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity ,ScrollView} from 'react-native';

export default function HomeScreen({ navigation }) {

  // we use array to store multiple values
  const [tasks, setTasks] = useState([]);


  //addtask function: we use spread operater here to store new data with existing
  //...tasks is spread operator
  // we use array of object to store value and object always need id
  // object always need id to store value also id help object in crud operations
  // Date.now.tostring return bigint in milliseconds that is always unique

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now().toString(), text: newTask }]);
  };


  // so we give here id means delete object that have related id
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };


  // help flatlist to print
  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.text}</Text>
      <TouchableOpacity style={styles.deleteBtn} onPress={() => deleteTask(item.id)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );


  // we use scrollview
  return (
    <ScrollView>
      
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.empty_label}>No tasks yet!</Text>}
        renderItem={renderItem}
      />
      
       <TouchableOpacity style={styles.button}
       onPress={() => navigation.navigate('TaskScreen',{addTask})}
       >
          <Text style={styles.buttontext}>ADD TASK</Text>
       </TouchableOpacity>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  empty_label:{
     fontSize:25,
     marginTop:200,
     alignSelf:'center',
     fontWeight:'bold',
     color:'blue'
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

  taskContainer: {
    flexDirection: 'row',
    margin:8,
    padding:12,
    borderRadius:50,
    borderColor:'black',
    borderWidth:1,
  },

  taskText: {
    fontSize: 20,
     flex: 1,
  },
  deleteBtn: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius:50
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold'
  },
});

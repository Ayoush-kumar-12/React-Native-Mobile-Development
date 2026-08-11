import { View, Text, Button,StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './CounterSlice';                    // class code
//import { decreament, increament, reset } from './CounterSlice';               // my code


/*
//my code
const ChildRedux = () => {
  const currentstate = useSelector((state) => state.manager.count);
  const dispatch = useDispatch();

  return (
    <View>
      <Text> Current Value: {currentstate}</Text>

      <Button title='increament' onPress={() => dispatch(increament())}/>

        <Text style={{margin:7}}></Text>

      <Button title='decrement' onPress={() => dispatch(decreament())}/>

        <Text style={{margin:7}}></Text>

      <Button title='Reset' onPress={() => dispatch(reset())}/>
    </View>
  )
}

export default ChildRedux
*/









//class code
export default function CounterScreen() {
  const count = useSelector((state) => state.manager.count);  //fetch count values from store

  const dispatch = useDispatch();   //to use actions we have to use 'useDispatch'

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>
      
      <Button title="Increment" onPress={() => dispatch(increment())} /> 
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

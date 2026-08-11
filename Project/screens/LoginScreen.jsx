import { View, Text , StyleSheet,TextInput, TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import { useState } from 'react'


//login screen
const LoginScreen = ( {navigation} ) => {
  //usestate to store data
  const [username,setusername] = useState('');
  const [password,setpassword] = useState('');


  //handle login functional compoenet handle the logic of login
  //if password correct navigate to home screen
  const handleLogin = () => {
     if(username==="admin" && password==="123admin"){
       navigation.navigate('Home');
     }else{
       Alert.alert('In Correct', 'Username or Password not matching!');
     }
  }


  return (
    <View>
      <Text style={styling.login}> Login Screen </Text>

      <TextInput 
      placeholder='Enter Your Username Here'
      style={styling.label}
      value={username}
      onChangeText={setusername}
      />

      <TextInput 
      placeholder='Enter Your Password Here'
      style={styling.label}
      value={password}
      onChangeText={setpassword}
      />

      <TouchableOpacity
       onPress={handleLogin}
       style={styling.button}
      >
      
      <Text style={styling.buttontext}>Submit</Text>

      </TouchableOpacity>

    </View>
  )
}

export default LoginScreen;

const styling = StyleSheet.create({
login:{
   fontSize:30,
   fontWeight:'bold',
   color:'blue',
   marginTop:150,
   textAlign:'center'
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
  backgroundColor:'lightblue',
  borderWidth:1,
  borderRadius:50,
  alignItems:'center',
  
},
buttontext:{
  fontWeight:'bold',
  fontSize:25,
  color:'blue'
}
});
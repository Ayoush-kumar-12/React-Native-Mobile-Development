import React, { useState } from 'react';
import { View, TextInput, Button, Text , StyleSheet} from 'react-native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateInputs = () => {
    if (!email.includes("@gmail.com")) {
      setError('Email Should use @gmail.com');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    setError('');
    alert('Registration Successful!');
  };

  return (
    <View style={color.container}>
      <TextInput placeholder="Email" onChangeText={setEmail} style={color.label}/>
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} style={color.label}/>
    
      <Button title="Register" onPress={validateInputs} />

      {error ? <Text style={{color:'red',fontSize:15}}>{error}</Text> : null}
    </View>
  );
};

export default RegisterScreen;

const color = StyleSheet.create({
    label:{
       borderRadius:50,
       borderWidth:2,
       padding:7,
       margin:7
    },
    container:{
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#0071f3ff'
    }
})



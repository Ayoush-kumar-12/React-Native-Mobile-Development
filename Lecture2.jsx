import React,{useState} from "react";
import {View,Text,TextInput,StyleSheet,ScrollView,Image,TouchableOpacity,Button} from 'react-native';



/*
//Display Msg
const App = () => {

const [text,settext] = useState('');
const [message,setmessage] = useState('');

const handlepress = () => {setmessage(text)}


return(
<ScrollView>


<Image 
source={{uri : 'https://files.crazygames.com/assets/2022/PNG/Variant_Dark.png'}}
style={styles.display}
/>


<TextInput placeholder='Enter Here'
style={styles.textinput}
value={text}
onChangeText={settext}
/>


<TouchableOpacity 
onPress={handlepress}
style={styles.textbutton}
>Enter</TouchableOpacity>


{ message ? 
<Text style={styles.msgdisplay}>{message}</Text> :
null}


</ScrollView>
  )
}


const styles = StyleSheet.create({

textbutton:{
margin:10,
borderRadius:50,
backgroundColor:'lightblue',
textAlign:'center',
width:'95%',
padding:7,
borderWidth:2
},

  textinput:{
  margin:10,
  borderRadius:50,
  padding:7,
  width:'95%',
  textAlign:'center',
  borderWidth:2
  },

  display:{
  width:'95%',
  margin:20,
  height:200,
  },

  msgdisplay:{
    margin:7,
    fontSize:50,
    textAlign:'center',
    color:'red'
  },
});

export default App;
*/











/*
const Tables = () => {
  const [msg,setmsg] = useState();
  const [arr,setarr] = useState();

  const Tab = () => {
    const items = [];

    if(msg==='') return;

    for(let i=1;i<=10;i++){
      items.push(<Text>{msg + ' * '+i+' = '}{i*msg}</Text>)
    }
     
    setarr(items);
  }


  return(
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        
      <Text style={{margin:10,padding:5,borderWidth:1,borderRadius:50,color:'white',backgroundColor:'black'}}>Which table you want to print</Text>

      <TextInput placeholder='Enter here:   '
       style={{padding:5,borderWidth:1,borderRadius:50,textAlign:'center'}}
       value={msg}
       onChangeText={setmsg}
      />
      
      <TouchableOpacity style={{backgroundColor:'blue',margin:10,padding:7,color:'white',textAlgin:'center',borderRadius:50}}
        onPress={Tab}>Click here</TouchableOpacity>


      { arr ? arr : null }

    </View>
  );
};


export default Tables;
*/









/*
const App = () => {
  const[text,setText] = useState('');


  return (
    <ScrollView style= {styles.container}>

      <View style={styles.header}><Text style={styles.title}> Hello World! </Text></View>

    
    <Image source={{ uri : 'https://reactnative.dev/img/tiny_logo.png'}}
    style ={styles.image}
    />

     
    <Image source={require('../../assets/images/favicon.png')}
    style ={styles.image}
    />

    <Text style={styles.label}>Please Enter Your Name</Text>

    <TextInput
    style= {styles.input}
    placeholder='Enter Name'
    value={text}
    onChangeText={(newText) => setText(newText)}/>

    <Text style={styles.resultText}>Hello, {text}</Text>

    <Button
    title='Press Me!'
    onPress={() => alert('Button Pressed!')}
    />

    <Text style={{fontSize : 38}}>Large Text font </Text>
    <Text style={{fontSize : 38}}>Large Text font </Text>
    <Text style={{fontSize : 38}}>Large Text font </Text>
    <Text style={{fontSize : 38}}>Large Text font </Text>
     
     <Image source={{ uri : 'https://reactnative.dev/img/tiny_logo.png'}}
    style ={styles.image}
    />

    <Text style={{fontSize : 38}}>Large Text font </Text>
    <Text style={{fontSize : 38}}>Large Text font </Text>
    <Text style={{fontSize : 38}}>Large Text font </Text>
    <Text style={{fontSize : 38}}>Large Text font </Text>
     
     
     <Image source={{ uri : 'https://www.freeiconspng.com/uploads/cartoon-png-transparent-15.png'}}
    style ={styles.image}
    />

  </ScrollView>
  
  )
}

export default App;

const styles = StyleSheet.create({
  container : {
    flex : 1, 
  },
  header : {
  backgroundColor :'blue', 
  padding : 15,
  marginBottom :15,
  borderRadius :50
  },
  title :  {
    fontSize : 18,
    color :'white',
    textAlign:'center'
  },
  image : { width : 100, height : 100, alignSelf :'center',marginBottom :15},
  label : {fontSize :18, textAlign:'center'},
  input : {
    padding :8, 
    borderRadius :50,
    borderWidth : 3, 
    marginBottom :5,
    textAlign:'center'
  },
  resultText : {fontFamily : 'bold', fontSize :20}
})
*/








/*
//my practice
const App = () =>{
 const [text,settext] = useState('');

return(
  <ScrollView style={styles.home}>

    <View style={styles.welcome}>
      <Text style={styles.welcomemsg}>hello World!</Text>
    </View>

    <Image source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
    style={styles.image}
    />
    
    <Image source={require('../../assets/images/favicon.png')}
    style={styles.image}
    />

    <Text style={styles.label}>Please Enter Your Name:</Text>

    <TextInput placeholder='Enter'
    value={text}
    onChangeText={(newText) => {settext(newText)}}
    style={styles.input}
    />
    
    <Text style={styles.result}>Hello! {text}</Text>

    <Button 
      title='click'
      onPress={()=>{alert('button Pressed')}}
    />

  </ScrollView>
);
};

const styles = StyleSheet.create({

  home:{flex:1,backgroundColor:'#aab8'},

  welcome:{
    borderRadius:50,
    backgroundColor:'blue',
    marginBottom:10,
    padding:9
  },

  welcomemsg:{
    fontSize:20,
    textAlign:'center',
    color:'white'
  },

  image:{width:100,height:100,alignSelf:'center',marginBottom:7},

  label:{fontSize:20,textAlign:'center',fontWeight:'bold'},

  input:{
    borderWidth:2,
    borderRadius:50,
    padding:7,
    margin:5,
    textAlign:'center'
  },

  result:{
    fontFamily:'bold',
    fontSize:20,
    margin:7,
    textAlign:'center'
  },
});

export default App;
*/
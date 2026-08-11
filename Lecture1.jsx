import React from "react";
import {View,Text,StyleSheet,Image} from 'react-native';




//use this syntax if only one return 
const App = () => (<View><Text>any thing</Text></View>)
export default App;





/*
//if their is multiple returns 
let App = () => {
  return(
    <>
    <View>
     <Text>i am fine ayoush</Text>
    </View>
   
    <View>
      <Text>king khan</Text>
    </View>
    </>
  )
}
export default App;  
*/



/*
//newline use
let App = () => {
  let a = "i am here to see you";
  let newline = <br></br>;

  return(
      <View>
        <Text>{a}{newline}{a}</Text>
      </View>
  )

}

export default App;
*/




/*
const App = () => {
  return(
    <View style={{backgroundColor:'black',flex:1,justifyContent:'center',alignItems:'center'}}>

      <Text style={{
       color:'red',backgroundColor:'white',
       padding:10,fontFamily:'monospace'
      }}>
      A Perfect Image
      </Text>

    </View>
  )
}
export default App;
*/




/*
const App = () => {
  return (
     <View>
      
      <Text>i am ayoush</Text>

     <Image source={{uri : 'https://static.vecteezy.com/system/resources/previews/020/000/372/non_2x/car-cartoon-porsche-3d-render-free-png.png'}}
     style={{width:250,height:250}}
     />
    
    </View>
  )
}
export default App;
*/




/*
// if no parameter pass then return -1
// because if we give parameter it override
const add = ({a=-2,b=1}={a,b}) => a+b;
const subtract = ({a=1,b=2}={a,b}) => a-b;
const mul = ({a,b}) => a*b;


 const Table = ({a}) => {
  const item = [];
  for(let i=1;i<=10;i++){
    item.push(<Text>{a+' * '+i+' = '}{ mul({a:i,b:a}) }</Text>);
  }
  return <View>{item}</View>;
 };

 // not screen shows because i am calling component like a function
 // export default Table({a:5});

 // use Table ({a:6}) to show table on screen

export default Table;
*/




/*
const App = ({name='Ayoush'}) => {
  return(
    <View>
      <Text>Hello {name}</Text>
      <Text>{add({a:15,b:15})}</Text>
      <Text>{subtract({})}</Text>
      <Text>{mul({a:15,b:2})}</Text>
      <Text>{Table({a:5})}</Text>
    </View>
  );
};

export default App;
*/






/*
const App= () => {
  const [text, setText]= useState('');
  return (
    <View>
      <Text>Hello : {text}</Text>
      <Button title="Change Name" onPress={() => setText("Szabistian")} />
    </View>
  );
};

export default App
*/
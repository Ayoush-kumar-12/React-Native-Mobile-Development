import React,{createContext,useContext,useState} from 'react';
import {View,Text,Button} from 'react-native';
//import  Provider  from './ThemeProvider';  //use for context Api
import HomeScreen from './HomeScreen';
import { Provider } from 'react-redux';      //use for Redux Toolkit
import Storage from './Storage';
import ChildRedux from './ChildRedux';



/*
const Lecture10 = () => {
  return (
      <Provider>
      <HomeScreen />
    </Provider>
  );
}

export default Lecture10;
*/





/*
// Create Context
export const ScreenContext = createContext();

const Child = () => {
   // use context
   const {theme,toggle} = useContext(ScreenContext);

    return(
        <View style={{backgroundColor:theme ? 'black' : 'white',flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:theme ? 'white' : 'black'}}> Current Theme: {theme ? 'Dark' : 'white'}</Text>

            <Button title='Toggle' onPress={toggle}/>
        </View>
    )
}


const Parent = () =>{
   const [theme,settheme] = useState(0);  //0 == white and 1 == dark

   const toggle = () =>{
    settheme(!theme);
   }

    return(
        <ScreenContext.Provider value={{theme,toggle}}>
            <Child />
        </ScreenContext.Provider>
    )
}

export default Parent;
*/







/*
// mycode
const Lecture10 = () => {
  return (
    <Provider store={Storage}>
       <ChildRedux />
    </Provider>
  )
}

export default Lecture10
*/











// class code
import store from './Storage';
import CounterScreen from './ChildRedux';

const App = () => {
  return (

    //using Redux 
    // Provider - > A wrapper component from react-redux
    //Makes the Redux store available to all nested components
     <Provider store={store}>
          <CounterScreen />
        </Provider>
  );
};

export default App; 

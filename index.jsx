import { View,Text,TextInput, Button, TouchableOpacity,Image,Alert,StyleSheet,ScrollView} from 'react-native';
import React,{useState,useEffect,useContext, Component} from 'react';


/*
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={{flex : 1, justifycontent : 'center', alignItems : 'center'}}>
      <Text>Count: {count}</Text>
      <Button 
	title="Increase" 
	onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Counter;
*/



/*
const LectureFive = () => {
  const [seconds, setSeconds] = useState(0);

  const name  =(firstname,lastname) => {
    return firstname + ' ' + lastname
  } 

  useEffect(
   ()=>{

    const interval = setInterval(
    ()=>{setSeconds((newtext) => {return(newtext+1)})}
    ,1000);

    return(() => clearInterval(interval));
   }

  ,[]);


  return (
    <View>
      <Text>Seconds elapsed: {seconds}</Text>
      <Text>{name("haseeb","shaikh")}</Text>
    </View>
  );
};
export default LectureFive;
*/




/*
//please practice this if allah want
// Step 1: Create ThemeContext
const ThemeContext = React.createContext();

const App = () => {
  // Step 2: Create state for theme
  const [theme, setTheme] = useState('light');

  // Step 3: Toggle function
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    // Step 4: Provide theme and toggle function
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <View style={styles.container}>
        <ThemedComponent />
      </View>
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  // Step 5: Use the theme
  const { theme, toggleTheme } = useContext(ThemeContext);

  const backgroundColor = theme === 'dark' ? '#333' : '#FFF';
  const textColor = theme === 'dark' ? '#FFF' : '#000';

  return (
    <View style={[styles.box, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>
        Current Theme: {theme}
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    flex:1,
    padding: 30,
    
  },
  text: {
    fontSize: 18,
    marginBottom: 15
  }
});

export default App;

*/




/*
const themecontext = React.createContext();

const App = () => {

  const [theme,settheme] = useState('light');

  const toggle = () =>{
     settheme(theme => (theme==='light' ? 'dark' : 'light'));
  };

   return(
         <themecontext.Provider value={{theme,toggle}}>
          <View style={styles.box}>
           <Themetoggle />
           </View>
         </themecontext.Provider>
   )
};


const Themetoggle = () =>{
  const {theme,toggle} = React.useContext(themecontext);

  const backgroundColor = (theme==='light' ? '#aab3' : '#777');
  const textColor = (theme==='light' ? '#777' : '#000');

  return(
    <View style={[{backgroundColor},styles.box]}>

      <Text style={{color:textColor}}>Current theme {theme}</Text>

      <Button title='Toggle' onPress={toggle}></Button>

    </View>
  );
};


const styles = StyleSheet.create({
 container:{
   flex:1,
 },

 box:{
  flex:1,
 }
});

export default App;
*/







/*
//Navigation from Tab to Stack to Drawer
import { registerRootComponent } from 'expo';
import lecture7 from './Lecture7/Lecture7';
registerRootComponent(lecture7);
*/






/*
import { registerRootComponent } from 'expo';
import lecture6 from './Lecture6/Lecture6';
import registerscreen from './Lecture6/RegisterScreen';
registerRootComponent(registerscreen);
*/





import { registerRootComponent } from 'expo';
import welcomescreen from './Screens/WelcomeScreen';
import signup from './Screens/Signup';
import signin from './Screens/Signin';
import App from './Screens/App'
import verify from './Screens/Verify'
import ForgetPassword from './Screens/ForgetScreen';
registerRootComponent(App);





/*
import { registerRootComponent } from 'expo';
import lecture2 from './Lecture2';
registerRootComponent(lecture2);
*/





/*
import { registerRootComponent } from 'expo';
import lecture3 from './Lecture3/Lecture3';
registerRootComponent(lecture3);
*/



/*
import { registerRootComponent } from 'expo';
import lecture5 from './Lecture5/Lecture5';
registerRootComponent(lecture5);
//not full work done
*/




/*
import { registerRootComponent } from 'expo';
import lecture10 from './Lecture10&11/Lecture10';
registerRootComponent(lecture10);
*/




/*
import {registerRootComponent} from 'expo';
import lecture12 from './Lecture12/Lecture12';
registerRootComponent(lecture12);
*/
import React, { useContext,useState,createContext,Component} from 'react';
import { View, Text, Button } from 'react-native';





/*
// Step 1: Create a Context
const ThemeContext = React.createContext();

const ChildComponent = () => {
  // Step 3: Use the Context
  const {theme,toggle} = useContext(ThemeContext);

  return (
    <View style={{ backgroundColor: theme === 'dark' ? 'red' : 'yellow',flex:2 }}>
      <Text style={{ color: theme === 'dark' ? 'black' : 'green' }}>
        Current Theme: {theme}
      </Text>

      <Button title='Click' onPress={toggle}/>
    </View>
  );
};



const ChildComponentTwo = () => {
  // Step 3: Use the Context
  const {theme} = useContext(ThemeContext);

  return (
    <View style={{ backgroundColor: theme === 'dark' ? 'yellow' : 'red',flex:2 }}>
      <Text style={{ color: theme === 'dark' ? 'green' : 'black' }}>
        Current Theme: {theme}
      </Text>

    </View>
  );
};



const LectureFive = () => {
  const [theme,settheme] = useState('dark');

  const toggle = () => {
    if(theme==='dark') settheme('notdark');
    else settheme('dark');
  }

  return (
    // Step 2: Provide the Context
    <ThemeContext.Provider value={{theme,toggle}} style={{flex:1}}>
      <ChildComponent />
      <ChildComponentTwo/>
      
    </ThemeContext.Provider>
  );
};

export default LectureFive;
*/












/*
//step 1. create context
const ThemeContext = createContext();


// step 3. usecontext
const FirstChild = () => {
   const {theme} = useContext(ThemeContext);

   return(
       <View style={{backgroundColor:theme==='dark' ? 'yellow' : 'red',flex:2}}>

        <Text style={{color:theme==='dark' ? 'green' : 'black'}}>
            Current Theme: {theme}
        </Text>

       
       </View>
   )
}


// step 3. usecontext
const SecondChild = () => {
   const {theme} = useContext(ThemeContext);

   return(
       <View style={{backgroundColor:theme==='dark' ? 'red' : 'yellow',flex:2}}>

        <Text style={{color:theme==='dark' ? 'black' : 'green'}}>
            Current Theme: {theme}
        </Text>

       
       </View>
   )
}


//step 2 provide
class Parent extends Component{
    state = {
        theme:'dark'
    }

    toggle = () => {
      if(this.state.theme==='dark') this.setState({theme:'notdark'});
      else this.setState({theme:'dark'});
    }

    
    componentDidMount(){
        this.interval = setInterval(this.toggle,10000);
    }

    render(){
    return(
       <ThemeContext.Provider value={{theme:this.state.theme,toggle:this.toggle}}>
           <FirstChild />
           <SecondChild />
       </ThemeContext.Provider>
    )
  }
}

export default Parent;
*/
import {View,Text,Button,TextInput,StyleSheet} from 'react-native';
import React,{Component,useState} from 'react';




/*
//functional component printing from lecture 3
const Greeting = ({name,age}) => {
    return(
        <View>
            <Text>Hello, {name} !</Text>
            <Text>Age, {age}</Text>
        </View>
    );
};

export default Greeting;
*/




/*
//class component
class Greeting extends Component{
    render(){
        return(
        <View>
            <Text>Hello {this.props.name}</Text>
            <Text>Age {this.props.age}</Text>
        </View>
        )
    };
};

export default Greeting;
*/




/*
class Tableuse extends Component{
   state = {
        tab : '',
        arr : []
   }

   handle = () => {
     let storage = [];

     if(this.state.tab==='0' || this.state.tab.length===0) return;

     for(let i=1;i<=10;i++){
        storage.push(<Text key={i}>{this.state.tab + ' * '+ i + ' = '} {i*this.state.tab}</Text>)
     }
     
     this.setState({arr:storage});
  }


   render(){
          return(
                <View>
                        <TextInput placeholder='Enter The Number Here :' onChangeText={(text) => (this.setState({tab:text}))}/>

                        <Button title='Click' onPress={this.handle}/>

                        {this.state.arr ? this.state.arr : null}
                </View>
          )
   }
}

export default Tableuse;
*/





/*
//class code my practice
class Timer extends Component{ 
 state = {seconds:0}

 componentDidMount(){
 this.interval = setInterval(()=>{this.setState({seconds:this.state.seconds+1});},1000); //every 1000 milliseconds program runs
 };

componentWillUnmount(){
  clearInterval(this.interval);
}

  render(){
    return(
     <View>
       <Text>Seconds: {this.state.seconds}</Text>
     </View>
    );
  };
};

export default Timer;
*/



/*
class Timing extends Component{
  state = {seconds : 0};

  start = () => { this.interval = setInterval(() => {this.setState({seconds:this.state.seconds+1})},1000); }

  stop = () => { clearInterval(this.interval); }

  render(){
    return(
       <View>
        <Text>Seconds : {this.state.seconds}</Text>

        <Button title='Start' onPress={this.start}/>

        <Button title='stop' onPress={this.stop}/>
       </View>
    )
  }
}

export default Timing;
*/





/*
//my practice works
class Timer extends Component{
  constructor(props){
    super(props);
    this.state = {seconds:0,isrunning:false};
  }

  start = () =>{
    if(!this.state.isrunning){

      this.interval = setInterval(() => {this.setState({seconds:this.state.seconds+1})},1000)

      this.setState({isrunning:true});

    }
  }

  stop = () =>{
    if(this.state.isrunning){
      clearInterval(this.interval);
      this.setState({isrunning:false});
    }
  }

  reset = () => {
    this.setState({seconds:0});
  }


  render(){
    return(
      <View>

        <Text style={{margin:10}}>Seconds: {this.state.seconds}</Text>

        <Button title='Start' onPress={this.start}/>
   
        <Text style={{margin:5}}></Text>

        <Button title='Stop' onPress={this.stop}/>

        <Text style={{margin:5}}></Text>

        <Button title='Reset' onPress={this.reset}/>

      </View>
    );
  };
};


export default Timer;
*/

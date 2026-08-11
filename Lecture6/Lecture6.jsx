import React from 'react'
import {View,Text, FlatList, SectionList,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import RegisterScreen from './RegisterScreen';





/*
const LectureSix = () => {
    const information = [
        { Rollno: '1', name: 'Abdul'  },
        { Rollno: '2', name: 'Haseeb' },
        { Rollno: '3', name: 'Shaikh' },
      ];
        
    return(
        <View>
            <FlatList
            data={information}
            keyExtractor={item => item.Rollno}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            />
        </View>
    );
}

export default LectureSix;
*/








/*
const LectureSix = () => {

    const data = [
        {id:'1',name:'ayoush'},
        {id:'2',name:'kumar'},
        {id:'3',name:'akshay'},
        {id:'4',name:'deeraj'},
        {id:'5',name:'manoj'}
    ];


    return(

        <View>

         <FlatList 
           data={data}
           keyExtractor={(item) => {item.id}}
           renderItem={ ({item}) => (<View> <Text>ID:{item.id}   NAME:{item.name}</Text></View>)}
         />

         </View>
    );
};
export default LectureSix;
*/









/*
const List = () => {

    const Student = [
        {rollno:2212247 , name:'ayoush'},
        {rollno:2212248 , name:'muztafa'},
        {rollno:2212249 , name:'sibtain'},
        {rollno:2212250 , name:'sandesh'},
        {rollno:2212251 , name:'Avinash'},
    ]

    return(
        <View>
            <FlatList 
               data={Student}
               keyExtractor={(item) => (item.rollno)}
               renderItem={({item}) => ( <View><Text>{item.rollno}  {item.name}</Text></View> )}
            />
        </View>
    )
}
export default List;

*/






/*
const groupinformation = [
  { title: 'Fruits', data: ['Apple', 'Banana','Mango','orange'] },
  { title: 'Vegetables', data: ['Carrot', 'Lettuce','patato','tamato'] },
];

const LectureSix = () => (
  <SectionList
    sections={groupinformation}
    keyExtractor={(item,index) => item.title + index}
    renderItem={({ item }) => <Text style={styles.itemText}>{item}</Text>}
    renderSectionHeader={({ section }) => (
        <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{section.title}</Text>
        </View>
    )}
  />
);
const styles = StyleSheet.create({
    sectionHeader: {
            backgroundColor : '#4CAF50',
            padding : 10,
            borderRadius : 50
        },
    sectionHeaderText : {
        fontSize : 18,
        fontWeight : 'bold',
        color : 'white',
        alignSelf:'center'
    },
    itemText : {
        fontSize : 14,
        padding : 10,
        backgroundColor : '#f9f9f9',
        marginTop : 5
    }

    }
);


const App =() => {
  return(
    <View>
      <LectureSix />
    </View>
  
  );
};

export default App;
*/









/*
const sectionlist = [
  {title:'Vegetable',data:[{ID:'*',name:'carrot'} , {ID:'*',name:'pinable'} , {ID:'*',name:'paneer'}]},
  {title:'Courses',data:[{ID:'1',name:'math'} , {ID:'2',name:'english'} , {ID:'3',name:'sindhi'}]},
  {title:'University',data:[{ID:'a',name:'fast'} , {ID:'b',name:'nust'} , {ID:'c',name:'comsats'}]}
]


const App = () => {
  return(
       <View>

            <SectionList 
            sections={sectionlist}
            keyExtractor={(item,index) => (item.title+index)}
            renderSectionHeader={ ({section}) => (<View style={color.header}><Text style={color.headertext}>{section.title}</Text></View>)}
            renderItem={({item}) => (<View><Text>{item.ID}  {item.name}</Text></View>)}
            />

       </View>
  )
}


export default App;


const color = StyleSheet.create({
  header:{
     borderRadius:50,
     padding:10,
     backgroundColor:'green',
     alignItems:'center',
     margin:7
  },
  headertext:{
     fontSize:15,
     color:'white',
     fontWeight:'bold'
  }
})
*/








/*
const LectureSix = () => {
    return(
        <View style={{flex:1}}>
            <RegisterScreen />
        </View>
    );
}

export default LectureSix;
*/

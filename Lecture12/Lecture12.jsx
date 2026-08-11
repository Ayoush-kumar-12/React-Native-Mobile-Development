import React, { useEffect, useState } from "react";
import {View,StyleSheet,Text,ActivityIndicator,Dimensions,ScrollView,TextInput,TouchableOpacity,KeyboardAvoidingView,Platform, Button} from "react-native";
import axios from 'axios';
import { FlatList } from "react-native-gesture-handler";


/*
	//-----------------------Get Api Request---------------------
	
const { width } = Dimensions.get('window');

const ApiCallingScreen = () => {
        //Fetching Api with Get call
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            //const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');            // wait until reply not comes from server
            const json = await response.json();                                                     //wait until not convert to javascript objects
            setTimeout(() => {setData(json); setLoading(false)}, 1000); // 2 second delay
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
       };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="red" />
            <Text style={styles.loadingText}>Fetching Post...</Text>
          </View>
        );
      }
    
      return (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Get Api Details</Text>
          <View style={styles.card}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>{data.name}</Text>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{data.email}</Text>
            <Text style={styles.footer}>User ID: {data.userId}</Text>
          </View>
        </ScrollView>
      );
    };
    

    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F5F7FA',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      card: {
        width: width - 100,
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
      },
      label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#007BFF',
        marginTop: 10,
      },
      value: {
        fontSize: 16,color: '#555',marginBottom: 10,
      },
      footer: {
        marginTop: 20,textAlign: 'right',
        color: '#888',fontStyle: 'italic',
      },
      loaderContainer: {
        flex: 1,justifyContent: 'center',
        alignItems: 'center',
      },
      loadingText: {
        marginTop: 10,fontSize: 16,color: 'blue',
      },
    });
    
    // export default ApiCallingScreen; 
*/







/*
// my code
    const ApiCall = () => {
      const[data,setdata] = useState([]);
      const[load,setload] = useState(true);


      const fetahData = async () => {
        try {
        const getdata = await fetch('https://jsonplaceholder.typicode.com/users');
        const response = await getdata.json();
        setTimeout(() => {setdata(response); setload(false)},3000);
        } catch (error) {
          console.error('Error Occured',error);
          setload(false);
        }
      }

      
      useEffect(() => {fetahData()},[]);

      if(load){
        return(
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large" color="red"/>
            <Text style={{fontSize:15,color:'blue'}}>Fetching Data...</Text>
          </View>
        )
      }
   

      const {width} = Dimensions.get('window');


      const renderItem = ({ item }) => {
       return (
      <View style={{backgroundColor:'lightgreen',borderRadius:20,margin:20,alignItems:'center',width:width - 100}}>
      <Text style={{color:'blue',fontWeight:'bold',fontSize:20}}>Name</Text>
      <Text >{item.name}</Text>
      <Text style={{color:'blue',fontWeight:'bold',fontSize:20}}>Email</Text>
      <Text >{item.email}</Text>
      <Text style={{color:'red',fontWeight:'bold',fontSize:20}}>User ID: {item.id}</Text>
      </View>
      );
      };


      return(
         <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
                 <Text>Get Api Data</Text>
            <FlatList 
              data={data}
              keyExtractor={(item) => (item.id)}
              renderItem={renderItem}
          />
         </ScrollView>
      )
    }

    export default ApiCall;
    */
















/*

//	----------------------Post Api Request(using Fetch)----------------

const ApiCallingScreen = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const postData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 2,
        }),
      });
      const json = await res.json();
      setTimeout(() => {
        setResponse(json);
        setLoading(false);
      }, 2000); // Delay for loader visibility
    } catch (error) {
      console.error("Error posting data:", error);
      setLoading(false);
    }
  };

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>📮 POST Request Example</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Enter Body"
          value={body}
          onChangeText={setBody}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={postData} disabled={loading}>
          <Text style={styles.buttonText}>{loading ? "Submitting..." : "Submit"}</Text>
        </TouchableOpacity>

        {loading && <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 20 }} />}

        {response && !loading && (
          <View style={styles.responseBox}>
            <Text style={styles.responseTitle}>✅ Response Received</Text>
            <Text><Text style={styles.label}>ID:</Text> {response.id}</Text>
            <Text><Text style={styles.label}>Title:</Text> {response.title}</Text>
            <Text><Text style={styles.label}>Body:</Text> {response.body}</Text>
          </View>
        )}
      </ScrollView>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8f9fa",
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#343a40",
  },
  input: {
    width: "100%",
    borderColor: "#ced4da",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#fff",
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  responseBox: {
    marginTop: 30,
    backgroundColor: "#e9ecef",
    padding: 20,
    borderRadius: 10,
  },
  responseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#28a745",
  },
  label: {
    fontWeight: "bold",
  },
});

export default ApiCallingScreen;
*/




/*
// my code using post
const ApiCallScreen = () => {
  const [id,setid] = useState();
  const [title,settitle] = useState('');
  const [body,setbody] = useState('');
  const [form,setform] = useState(null);
  const [load,setload] = useState(false);


  const postData = async () => {
       setload(true);

       try {
          const response = await fetch('http://localhost:3000/users',{
            method:"POST",  //Tell we are sending data
            headers:{
              "Content-Type":"application/json"      //Tell content format
            },
            body:JSON.stringify({                  //convert object data to string 
              id:id,
              title:title,
              body:body
            })
          });


          const datastorage = await response.json();

          setTimeout(() => {setform(datastorage), setload(false)} , 3000);
          
       } catch (error) {
          console.log("Error ",error);
          setload(false);
       }
  }

   return(
        <ScrollView contentContainerStyle={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                   <Text style={{textAlign:'center',fontSize:20}}>Api Post Data</Text>

                   <TextInput placeholder="Enter ID" value={id} onChangeText={setid}/>
                   <Text style={{margin:5}}></Text>

                   <TextInput placeholder="Enter Title" value={title} onChangeText={settitle}/>
                   <Text style={{margin:5}}></Text>

                   <TextInput placeholder="Enter Body" value={body} onChangeText={setbody}/>
                   <Text style={{margin:5}}></Text>

                   <Button title="Submit" onPress={postData}/>

                   {load && <ActivityIndicator size="large" color="red"><Text style={{color:'blue'}}>Fetching Data...</Text></ActivityIndicator>}

                   {form && !load &&
                      <View>
                      <Text style={{color:'green'}}> Response Received</Text>
                      <Text>id {form.id}</Text>
                      <Text>title {form.title}</Text>
                      <Text>body {form.body}</Text>
                      </View>
                   }
            </View>
        </ScrollView>
   )
}

export default ApiCallScreen;
*/






/*
const ApiCallScreen = () => {
  const [form,setform] = useState({});
  const [load,setload] = useState(true);


  const postData = async () => {
       try {
          const response = await fetch('http://localhost:3000/users/22122');
          const datastorage = await response.json();

          setTimeout(() => {setform(datastorage), setload(false)} , 3000);
          
       } catch (error) {
          console.log("Error ",error);
          setload(false);
       }
  }


  useEffect(() => {postData()},[]);

  if(load){
    return(
      <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
          <ActivityIndicator size="large" color="red" />
          <Text style={{color:'blue'}}>Fetching Data...</Text>
      </View>
    )
  }

   return(
        <ScrollView contentContainerStyle={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                   <Text style={{textAlign:'center',fontSize:20}}>Api Get Data</Text>

                      <Text>id {form.id}</Text>
                      <Text>title {form.title}</Text>
                      <Text>body {form.body}</Text>
                   
            </View>
        </ScrollView>
   )
}

export default ApiCallScreen;
*/











/*
// get Api using axios
const ApiCallingScreen = () => {
        //Fetching Api with Get call
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/users')
                    setTimeout(() => {
                        // setData(json);
                        setData(response.data);
                        setLoading(false);
          }, 2000); // 2 second delay
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#007BFF" />
            <Text style={styles.loadingText}>Fetching Post...</Text>
          </View>
        );
      }
    

const renderItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Title</Text>
      <Text style={styles.value}>{item.title}</Text>
      <Text style={styles.label}>Body</Text>
      <Text style={styles.value}>{item.body}</Text>
      <Text style={styles.footer}>User ID: {item.id}</Text>
    </View>
  );
};
      


      return (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Get Api Details</Text>
          <FlatList 
              data={data}
              keyExtractor={(item) => (item.id)}
              renderItem={renderItem}
          />
        </ScrollView>
      );
    };
    
    const { width } = Dimensions.get('window');
    
    const styles = StyleSheet.create({
      container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F5F7FA',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
      },
      card: {
        backgroundColor: 'white',
        width: width - 40,
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
      },
      label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#007BFF',
        marginTop: 10,
      },
      value: {
        fontSize: 16,color: '#555',marginBottom: 10,
      },
      footer: {
        marginTop: 20,textAlign: 'right',
        color: '#888',fontStyle: 'italic',
      },
      loaderContainer: {
        flex: 1,justifyContent: 'center',
        alignItems: 'center',
      },
      loadingText: {
        marginTop: 10,fontSize: 16,color: '#666',
      },
    });
    
    export default ApiCallingScreen;
    */
    
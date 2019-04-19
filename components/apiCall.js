import React, { Component } from 'react'
import { View, Text, ScrollView,TouchableOpacity, StyleSheet, Modal } from 'react-native'

class ApiCallComponent extends Component {
   state = {
      data: [],
      dialogVisible: false,
      dialogItem: {}
   }
   componentDidMount = () => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         
       //  console.log(typeof(responseJson));
       //  console.log(responseJson);

         this.setState({
            data: responseJson
         });
      })
      .catch((error) => {
         console.error(error);
      });
   }


   onPress = (item)=> {
      console.log(JSON.stringify(item,undefined, 2));
      this.setState({dialogItem: item});
      this.setState({dialogVisible: true});
      alert(item.body);
   }

   render() {
      return (
       
           <View style={styles.container} >
                <ScrollView>
                     <View style={styles.headerContainer}>
                        <View style={styles.headerTopContainer}>
                           <Text style={styles.headerText}> All Post </Text>
                        </View>
                        <View style={styles.headerBottomContainer}>
                           <Text style={[styles.headerSubText]}> Click on post to see details </Text>
                        </View>
                     </View>

                     <View style={styles.contentContainer}>
                           {
                              this.state.data.map((item,index)=>(
                              <TouchableOpacity
                                    key={item.id}
                                    onPress={()=>this.onPress(item)}   
                                    style = {styles.blockContainer}
                              > 
                                    <Text style = {styles.color} >{item.title}</Text> 
                              </TouchableOpacity>
                              ))
                           }
                     </View>
                           
                           
                   </ScrollView> 
           </View>  
       
      )
   }
}

const styles = StyleSheet.create ({
   container:{
      flex: 1,
      backgroundColor: '#7f8c8d',
      paddingTop: 5
   },
   headerContainer:{
      height:40,
      backgroundColor: '#27ae60',
   },
   headerTopContainer:{
      height:20,
      backgroundColor: '#27ae60',
   },
   headerBottomContainer:{
      height:15,
      backgroundColor: '#27ae60',
      paddingBottom: 5,
   },
   contentContainer:{
      marginTop: 5,
   },
   blockContainer: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
    },
    headerText:{
      textAlign: 'center',
      textAlignVertical: "bottom",
      fontSize: 10,
      width: '100%',
      height: '100%', 
      color: 'white',
      fontWeight: 'bold',
    },
    headerSubText:{
      textAlign: 'center',
      textAlignVertical: "auto",
      width: '100%',
      height: '100%', 
      color: 'white',
      fontSize: 8
    },
    text: {
       color: '#4f603c'
    }
   
  })

export default ApiCallComponent
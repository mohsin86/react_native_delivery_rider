import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {MenuButton} from '../route/MenuButton';

class HomeComponent extends Component {
    render() {
        return (
          <View style = {styles.container}>
            <View style = {styles.redbox}>
               <Text style={styles.textCenter}>1</Text> 
            </View>
            <View style = {styles.bluebox}>
                <Text style={styles.textCenter}>2</Text>
            </View>
            
            <View style = {styles.blackbox}>
                <Text style={styles.textCenter}>3</Text>
            </View>
            <View style = {styles.InputBox}>
                <Text style={styles.textCenter}>4</Text>
            </View>
           
       </View>
        );
      }
}

const styles = StyleSheet.create ({
  container: {
     flex:1,
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'flex-start',
     backgroundColor: 'grey',
     height: 600
  },
  redbox: {
     width: 50,
     height: 50,
     backgroundColor: 'powderblue'
  },
  bluebox: {
    width: 70,
    height: 70,
     backgroundColor: 'skyblue'
  },
  blackbox: {
    width: 100,
    height: 50,
     backgroundColor: 'steelblue'
  },
  InputBox:{
    width: 300,
    height: 60,
     backgroundColor: '#0984e3'
  },
  textCenter:{
    textAlign: 'center',
    textAlignVertical: "center",
    color: 'white',
    fontSize: 12,
    width: '100%',
    height: '100%',
  }
})
  

export default HomeComponent;
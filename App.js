import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListComponent from './components/listView';
//import AppNavigator from './screen/homeScreen';
// import DrawerNavigator from './route/navigation';

//import { createAppContainer } from "react-navigation";
// /mnt/office/www/react_native_rider/android/app/src/main/java/com/react_native_rider/MainActivity.java


// const AppContainer = createAppContainer(AppNavigator);

 class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       {/*  <HomeComponent type="HomePage" /> */}
        <ListComponent type="ListView" />
        {/* <TextInputComponent/> */}
        {/* <ApiCallComponent/> */}
        {/* <Animations/> */}
        {/* <DrawerNavigator/> */}
        {/* <AppContainer /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default App;
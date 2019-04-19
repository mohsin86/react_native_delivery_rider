import React from 'react';
import {StyleSheet, Button} from 'react-native';




class MenuButton extends Component {
    render() {
      return (
        <Button/>
      );
    }
  }

  const styles = StyleSheet.create({
    menuIcon:{
      zIndex:9,
      position:'absolute',  
      top:40,
      left:20,
    }
  });

  export default MenuButton ;
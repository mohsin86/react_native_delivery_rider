import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


class ListComponent extends Component {
   constructor(props){
      super(props);
  
      this.state = {
         TouchCount: 0,
         empName:[
            {
                id: 0,
                name: 'Ben',
             },
             {
                id: 1,
                name: 'Susan',
             },
             {
                id: 2,
                name: 'Robert',
             },
             {
                id: 3,
                name: 'Mary',
             }
        ],
        
      };
    }

    
    onPressItems(item){
         this.setState({
            TouchCount: this.state.TouchCount + 1
         }); 
         console.log(`${item.name} is clicked, clicked time: ${this.state.TouchCount}`);
         console.log('button press');
    }

    render() {
       let clickTimes = this.state.TouchCount;
        return (
           <View>
               {
                   this.state.empName.map((item,index)=>(
                        <TouchableOpacity
                        key={item.id}
                        style = {styles.container}
                        onPress={ ()=> this.onPressItems(item)}
                        >
                          <Text style={styles.text}> {item.name} Total Touches: { clickTimes }  </Text>  
                        </TouchableOpacity> 
                    )) 

               }
           </View>
        );
      }
}

const styles = StyleSheet.create ({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
  },
  text: {
     color: '#4f603c'
  }
 
})
  

export default ListComponent;
import React from 'react';
import {Platform, Dimensions} from 'react-native';

import { createDrawerNavigator, createAppContainer } from "react-navigation";

import HomeComponent from '../components/home';
import ListComponent from '../components/listView';
import TextInputComponent from '../components/textInput';
import ApiCallComponent from '../components/apiCall';
import Animations from '../components/animated';


const WIDTH = Dimensions.get('window').width;

const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen: HomeComponent
    },
    // Post:{
    //     screen: ApiCallComponent
    // },
    // Animations:{
    //     screen: Animations
    // },
    // ListView:{
    //     screen: ListComponent
    // },
    // Login:{
    //     screen: TextInputComponent
    // },
});

export default createAppContainer(DrawerNavigator);
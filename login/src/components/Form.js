import ReactDOM from 'react-dom';
import * as React from 'react';
import { Image, Platform, StyleSheet, TextInput,Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import styles from '../constants/styles';
import stylesx from '../constants/stylesx';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

export default class Form extends React.Component{
    render(){
        return(
        <View>
            <View style ={{padding:10}}>

            </View>
            <Input placeholder = "Username"
            style={{borderColor:'black',borderWidth:20, padding:10, marginLeft:10, width:10}}
            leftIcon={
                <Icon
                name='user'
                size={24}
                color='black'
                />
            }
         />
        </View>
        );
    }
}
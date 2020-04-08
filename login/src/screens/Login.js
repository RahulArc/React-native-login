import ReactDOM from 'react-dom';

import * as React from 'react';
import { Image, Platform, StyleSheet, TextInput,Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import styles from '../constants/styles';
import stylesx from '../constants/stylesx';
import Input from '../components/Input';

import {Keyboard,TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import {Button} from 'react-native-elements';
import style from '../components/styleForm';

export default class Login extends React.Component{    

    constructor(props){
        super(props);
        this.state = {  username:"",
                        password:""
        };
    }
   
   
    render(){
        return (        
            
            <View style={stylesx.container}>
               
                <View style = {stylesx.backgroundContainer}>
                    <Image source = {require('../../assets/images/greyl.jpg')} resizeMode = 'cover' style = {Platform.OS === 'web'?stylesx.backdrop :styles.backgroundImage  } />
                </View>
                
                    <View style={[Platform.OS ==='web'?styles.form :stylesx.form, stylesx.boxWithShadow,stylesx.overlay]}>
                         
                         {/* <Text style={[stylesx.headline]}>
                            Vault
                        </Text>   */}
                        <Image source = {require('../../assets/images/vault.jpg')}  style = {{width:140,height:100, marginLeft:105, marginTop:5}} />
                                               
                        <Input />
                        
                       
                    </View>            

                <View style={{padding:10}}></View>
               
                {/* <View style = {Platform.OS==='web'?styles.overlay: stylesx.overlay}>
                    <Text style = {stylesx.headline}>It should appear in front of the Background Image</Text>
                    
                </View> */}
            
            </View>
           
        );
    }
   
   
}




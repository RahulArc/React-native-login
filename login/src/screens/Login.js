import ReactDOM from 'react-dom';
import * as React from 'react';
import { Image, Platform, StyleSheet, TextInput,Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import styles from '../constants/styles';
import stylesx from '../constants/stylesx';
import Form from '../components/Form';

export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {timestamp : null,
                      styling: styles
        };
    }

    render(){
        return (        
            
            <View style={stylesx.container}>
               
                <View style = {stylesx.backgroundContainer}>
                    <Image source = {require('../../assets/images/whitel.jpg')} resizeMode = 'cover' style = {Platform.OS === 'web'?stylesx.backdrop :styles.backgroundImage  } />
                </View>
                
                    <View style={[Platform.OS ==='web'?styles.form :stylesx.form, stylesx.boxWithShadow,stylesx.overlay]}>
                        <Text style={[stylesx.headline]}>
                            Vault
                        </Text>
                        
                       <Form />
                    </View>
                
            
                {/* <View style = {Platform.OS==='web'?styles.overlay: stylesx.overlay}>
                    <Text style = {stylesx.headline}>It should appear in front of the Background Image</Text>
                    
                </View> */}
                <View style = {Platform.OS==='web'?styles.overlay: stylesx.overlay}>
                    <Text style = {stylesx.headline}>It should appear in front of the Background Image</Text>
                    
                </View>
            
            </View>
           
        );
    }
}




import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import {Keyboard,TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//import styleForm from './styleForm';



export default class Inputs extends Component {
   state = {
      username: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ username: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (username, pass) => {
      alert('username: ' + username + ' password: ' + pass)
   }
   render() {
      return (
         
     <KeyboardAvoidingView style={styleForm.containerView} behavior = "padding">
       
         <View style = {styleForm.containerView}>
            <View style={{padding:5}}></View>
            
            <TextInput style = {styleForm.loginFormTextInput}
               underlineColorAndroid = "transparent"
               placeholder = "Username"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>

               <View style={{padding:5}}></View>
            
            <TextInput style = {styleForm.loginFormTextInput}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               secureTextEntry={true}
               onChangeText = {this.handlePassword}/>

               <View style={{padding:5}}></View>

            <TouchableOpacity
               style = {styleForm.submitButton}
               onPress = {
                  () => this.login(this.state.username, this.state.password)
               }>
               <Text style = {[styleForm.submitButtonText]}> Submit </Text>
            </TouchableOpacity>

            <View style={{paddingTop:0}}>
               <Text style={{color: '#000', textAlign:'center', paddingLeft:15, paddingRight:15}}>
                  By logging in to this system, you have read and fully understood and agree
                  to the 
                   <Text style={{color:'violet', paddingLeft:3,paddingRight:3}}>
                      Terms and Conditions  
                   </Text>
                     of the Online Services Application Form
              </Text>
            </View>
            
         </View>
         
      </KeyboardAvoidingView>
      )
   }
}




const styleForm = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center'
   },
   containerView: {
      flex: 1,
    },
    loginScreenContainer: {
      flex: 1,
    },
    logoText: {
      fontSize: 40,
      fontWeight: "800",
      marginTop: 150,
      marginBottom: 30,
      textAlign: 'center',
    },
    loginFormView: {
      flex: 1
    },
    loginFormTextInput: {
      height: 50,
      fontSize: 15,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#eaeaea',
      backgroundColor: '#fafafa',
      padding: 5,
      marginLeft: 15,
      marginRight: 15,
      marginTop: 5,
      marginBottom: 5,
      
    },
    
    loginButton: {
      backgroundColor: '#3897f1',
      borderRadius: 5,
      height: 45,
      marginTop: 10,
    },
    fbLoginButton: {
      height: 45,
      marginTop: 10,
      backgroundColor: 'transparent',
    },
})


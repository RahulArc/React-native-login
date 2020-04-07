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
            <View style={{padding:20}}></View>
            
            <TextInput style = {styleForm.loginFormTextInput}
               underlineColorAndroid = "transparent"
               placeholder = "Username"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>

               <View style={{padding:10}}></View>
            
            <TextInput style = {styleForm.loginFormTextInput}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               secureTextEntry={true}
               onChangeText = {this.handlePassword}/>

               <View style={{padding:10}}></View>

            <TouchableOpacity
               style = {styleForm.submitButton}
               onPress = {
                  () => this.login(this.state.username, this.state.password)
               }>
               <Text style = {styleForm.submitButtonText}> Submit </Text>
            </TouchableOpacity>

            <View style={{paddingTop:0}}>
               <Text style={{color: 'grey', textAlign:'center'}}>
                    Terms and Conditions
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
      padding: 10,
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

{/* <KeyboardAvoidingView style={style.containerView} behavior = "padding">
                            
                            <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
                
                                <View style={style.loginScreenContainer}>
                                    <View style={{padding:10}}>                            
                                    </View>
                                    <View style={style.loginFormView}>
                                        <TextInput 
                                            placeholder="Username" 
                                            placeholderTextColor = "#c4c3cb" 
                                            style={style.loginFormTextInput} 
                                            autoCapitalize = "none"
                                            editable={true}
                                            onChangeText={this.handleUsername}
                                        />

                                        <View style={{padding:10}}>                            
                                        </View>

                                        <TextInput 
                                            placeholder="Password" 
                                            placeholderTextColor="#c4c3cb" 
                                            stye = {style.loginPassword} 
                                            autoCapitalize = "none"
                                            secureTextEntry={true} 
                                            editable={true}
                                            onChangeText = {this.handlePassword}
                                        />

                                        <View style={{padding:10}}>                            
                                        </View>

                                        <Button 
                                            buttonStyle={style.loginButton}
                                            onPress={
                                                ()=>
                                                this.onLoginPress(this.state.username,this.state.password)
                                            }
                                            title="Login"
                                        />
                                        
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                
                            </KeyboardAvoidingView> */}
import ReactDOM from 'react-dom';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import styles from '../constants/styles';

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
                <Image source = {require('../../assets/images/whitel.jpg')} resizeMode = 'cover' style = {Platform.OS === 'web'?stylesx.backdrop :this.state.styling.backgroundImage  } />
            </View>
            <View style = {Platform.OS==='web'?styles.overlay: stylesx.overlay}>
                <Text style = {stylesx.headline}>It should appear in front of the Background Image</Text>
                {/* <Image style = {stylesx.logo} source = {require('../../assets/images/whitel.jpg')} /> */}
            </View>
            </View>
           
            //    <View>
            //    <ScrollView>
            //      <Image source ={require('../../assets/images/whitel.jpg')} style = {stylesx.backgroundImage}>          
            //      </Image>                
            //    </ScrollView> 
            //    <View>
            //         <Text>First part and </Text>
            //         <Text>second part</Text>
            //     </View>           
               
            //  </View>
        );
    }
}



var stylesx = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  overlay: {
    padding: 10 ,
    marginTop: 20,
    opacity: 0.6,
    backgroundColor: '#ffff'
  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: 160,
    height: 52
  },
  backdrop: {
    flex:1,
    flexDirection: 'column'
  },
  headline: {
   
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white'
  }
});
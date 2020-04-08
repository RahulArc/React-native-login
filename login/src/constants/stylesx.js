import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

var stylesx = StyleSheet.create({
    form :{
        flex: 1,
        backgroundColor : '#ffff',
        marginTop: 20,
        opacity: 0.8,
        width: 350,
        height: 50

    },
    boxWithShadow: {
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,

    },
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
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  overlay: {
    padding: 10 ,
    marginTop: 20,
    opacity: 0.9,
    backgroundColor: '#fff'
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
    backgroundColor: '#0B1459',
    color: 'white',
    padding:10
  },
  textInput: {
   color: 'black',
   borderColor: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#CCCCCC',
    height: 50,
    fontSize: 25,
    paddingLeft: 10,
    paddingRight: 10,
    padding:10,
    textAlign: 'center'
  },
  inputContainer: {
    paddingTop: 15
  }
});

export default stylesx;
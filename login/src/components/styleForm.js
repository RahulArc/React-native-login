  
const React = require("react-native");

const { StyleSheet } = React;

export default {

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
  height: 43,
  fontSize: 14,
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
loginPassword: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 2,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  padding: 10,
  marginLeft: 25,
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
};
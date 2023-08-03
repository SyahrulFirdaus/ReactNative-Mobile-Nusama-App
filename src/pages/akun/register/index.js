import React, { useState } from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { ImageHeaderLogin } from '../../../assets';
import { WARNA_UTAMA } from '../../../utils/constant';

import ComponentTextInputEmailRegister from './ComponentTextInputEmailRegister';
import ComponentTextInputUserNameRegister from './ComponentTextInputUserNameRegister';
import ComponentTextInputPasswordRegister from './ComponentTextInputPasswordRegister';
import ComponentTextInputTelephoneRegister from './ComponentTextInputTelephoneRegister';


const Register = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [UserName, setUserName] = useState('')
  const [Telephone, setTelephone] = useState('')
  return (
    <View style={styles.page}>
      <ImageBackground source={ImageHeaderLogin} style={styles.ImageHeaderLogin}></ImageBackground>

      <View style={styles.hello}>
          <Text style={styles.login}>REGISTER</Text>
          <ComponentTextInputEmailRegister state={email} set={setEmail} />
          <ComponentTextInputUserNameRegister state={UserName} set={setUserName} />
          <ComponentTextInputPasswordRegister state={password} set={setPassword} secureTextEntry={true} />
          <ComponentTextInputTelephoneRegister state={Telephone} set={setTelephone} />
          

          <TouchableOpacity style={styles.buttonlogin} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.textlogin}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Akun')}>
            <Text style={styles.register}>Login</Text>
          </TouchableOpacity>
          
      </View>
        
    </View>

  )
}

export default Register
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const styles = StyleSheet.create({

  
  ImageHeaderLogin : { 
    width: windowWidth,
    marginTop: 28,
    height: windowHeight * 0.40
  },

  hello:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowHeight*0.11,
  
  },
  login:{
    fontSize: 17,
    color: '#000000',
    marginTop: -70,
    marginHorizontal: 135,
    fontWeight: 'bold'
  },
  UserName:{
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  page: {
    backgroundColor: '#D8D9CF',
    flex: 1
  },
  
  inputpassword:{
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    borderRadius: 15,
    height : 40,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    
    elevation: 9,
  
  },
  register: {
    marginTop: 20,
    color: WARNA_UTAMA
  },
  buttonlogin: {
  backgroundColor: WARNA_UTAMA,
  paddingVertical: 10,
  width: 310,
  borderRadius: 15,
  marginTop: 20
  },
  textlogin: {
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center'
  }
})
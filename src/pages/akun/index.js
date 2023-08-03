import React, { useState } from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { ImageHeaderLogin, ImageLogin } from '../../assets'
import Icon from 'react-native-vector-icons/FontAwesome5';
import ComponentTextInputEmail from './login/ComponentTextInputEmailLogin';
import ComponentTextInputPassword from './login/ComponentTextInputPasswordLogin';
import { WARNA_UTAMA } from '../../utils/constant';


const Akun = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.page}>
      <ImageBackground source={ImageHeaderLogin} style={styles.ImageHeaderLogin}></ImageBackground>

      <View style={styles.hello}>
          <Text style={styles.login}>LOGIN</Text>

          <ComponentTextInputEmail state={email} set={setEmail} />
          <ComponentTextInputPassword state={password} set={setPassword} secureTextEntry={true}  />
    

          <TouchableOpacity style={styles.buttonlogin} onPress={() => navigation.navigate('Akun')}>
            <Text style={styles.textlogin}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.register}>Register</Text>
          </TouchableOpacity>
          
      </View>
        
    </View>

  )
}

export default Akun
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
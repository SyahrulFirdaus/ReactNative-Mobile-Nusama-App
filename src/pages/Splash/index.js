import React, {useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'

import {logo, screen} from '../../assets'

const Splash = ({navigation}) => {
  useEffect(()=>{
    setTimeout( () =>{
      navigation.replace('MainApp');
    }, 3000)
  }, [navigation]);

  return (
   <ImageBackground source={screen} style={styles.background}>
    
   </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }

})
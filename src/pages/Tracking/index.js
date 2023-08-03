import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity,TextInput } from 'react-native'
import { ImageTracking, Tracking1 } from '../../assets'
import React, { useState } from 'react'
import { WARNA_UTAMA} from '../../utils/constant'


const Tracking = ({navigation}) => {
  const [Quote, setQuote] = useState('')
  return (
    <View>
      <ImageBackground source={ImageTracking} style={styles.header}></ImageBackground>
      
        <View style={styles.TrackingQuote}>
        <TextInput Quote={Quote} placeholder="Input Your Quote" onChangeText={text=> setQuote(text)} ></TextInput>
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('TrackingQuote')}>
          <View style={styles.tracking}>
          <Text style={styles.TextTracking}>Tracking</Text>
      </View>

      </TouchableOpacity>

      <View style={styles.imgTracking1}>
      <ImageBackground source={Tracking1} style={styles.Tracking1} ></ImageBackground>
      </View>
      
      
    </View>
  )
}

export default Tracking
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const styles = StyleSheet.create({

  imgTracking1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50
  },

  Tracking1: {
    width: windowWidth * 0.60,
    height: windowHeight * 0.30
  },
  header: {
    width: windowWidth,
    marginTop: 28,
    height: windowHeight * 0.20
  },
  tracking : {
    backgroundColor : WARNA_UTAMA,
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 15
  },
  TextTracking: {
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#ffffff'
    
  },
  TrackingQuote :{
    backgroundColor: '#ffffff',
    paddingVertical: 7,
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: -7,
    paddingLeft: 10,
  },
 
})
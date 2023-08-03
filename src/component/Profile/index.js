import { StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView, Touchable, TouchableOpacity, Linking } from 'react-native'
import { ImagesProfile, Nusama } from '../../assets'
import React, { useState } from 'react'
import { WARNA_PUTIH, WARNA_UTAMA} from '../../utils/constant'



const Profile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={ImagesProfile} style={styles.header}>
      {/* <Text style={styles.TextHeader}>#Realisasikan Idemu Bersama Nusama 3D</Text> */}
      <View style={styles.bgNusama}>
      <ImageBackground source={Nusama} style={styles.Nusama} ></ImageBackground>
      </View>
      <Text style={styles.titleNusama}>NUSAMA 3D</Text>
      </ImageBackground>

      <Text style={styles.TitleProfile}>Wujudkan Ide Anda dengan Teknologi 3D Printing</Text>
      <Text style={styles.ContentProfile}>Dapatkan penawaran jasa 3D Printing anda hari ini. 3D Printing sesuai permintaan untuk rapid prototyping dan produksi  
        dengan  teknologi 3D printing FDM, SLA, SLS,  dan MJF. Pengerjaan tercepat 2-5 hari kerja.</Text>
      
      
    <View style={styles.Hubungi}>
        <Text style={styles.LabelHubungi}>Hubungi Kami</Text>
    <View style={styles.IconKontak}>

    <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://instagram.com/nusama3d?igshid=YmMyMTA2M2Y=')}}>
    <ProfileComponent title="instagram" type="hubungi"/>
    </TouchableOpacity>

    <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://instagram.com/nusama3d?igshid=YmMyMTA2M2Y=')}}>
    <ProfileComponent title="whatsapp" type="hubungi"/>
    </TouchableOpacity>

    <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://instagram.com/nusama3d?igshid=YmMyMTA2M2Y=')}}>
    <ProfileComponent title="twitter" type="hubungi"/>
    </TouchableOpacity>

    <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://instagram.com/nusama3d?igshid=YmMyMTA2M2Y=')}}>
    <ProfileComponent title="facebook" type="hubungi"/>
    </TouchableOpacity>
    
    </View>
    <View style={styles.Available} >
      <Text style={styles.LabelAvailable}>Order Available On</Text>
      <View style={styles.IconAvailable}>

      <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://instagram.com/nusama3d?igshid=YmMyMTA2M2Y=')}}>
      <ProfileComponent title="shopee" type="hubungi"/>
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://instagram.com/nusama3d?igshid=YmMyMTA2M2Y=')}}>
      <ProfileComponent title="bukalapak" type="hubungi"/>
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://instagram.com/nusama3d?igshid=YmMyMTA2M2Y=')}}>
      <ProfileComponent title="tokopedia" type="hubungi"/>
      </TouchableOpacity>

      

      </View>
      
    </View>
    

    </View>
    
    
    
        
    </ScrollView>  
    </View>
  )
}

export default Profile
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({

    page : {
        flex: 1,
        backgroundColor: WARNA_PUTIH
    },

  Hubungi: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    marginBottom: 20
  },

  LabelHubungi: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  Available: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    marginBottom: 20
  },

  LabelAvailable: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  Nusama:{
    height: 120,
    width:120
  },
  titleNusama:{
    fontWeight: 'bold',
    color: WARNA_PUTIH,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20
    
  },
  bgNusama:{
    backgroundColor: WARNA_PUTIH,
    marginHorizontal: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 60
  },
  header: {
    width: windowWidth ,
    marginTop: 28,
    height: windowHeight * 0.40
  },
  TitleProfile: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
    paddingLeft: 20,
    paddingRight: 20
},
ContentProfile:{
    paddingLeft:20,
    paddingRight: 20,
    textAlign: 'justify',
    marginTop: -10
},
IconKontak: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
},
IconAvailable: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 10,
  flexWrap: 'wrap',
}
 
})
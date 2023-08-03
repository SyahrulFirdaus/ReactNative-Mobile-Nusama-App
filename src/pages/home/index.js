import { StyleSheet, Text, View, StatusBar, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ImageHeader } from '../../assets'
import { ButtonIcon, Pesanan3D, PesananAktif } from '../../component'
import { WARNA_ABU, WARNA_KREM, WARNA_UTAMA } from '../../utils/constant'


const Home = ({navigation}) => {
  return (
    
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false }>

      <ImageBackground source={ImageHeader} style={styles.header}>
        
        <View style={styles.hello}>
          <Text style={styles.selamat}>Selamat Datang,</Text>
          <Text style={styles.UserName}>Syahrul Firdaus </Text>
        </View>

      </ImageBackground>
      <Pesanan3D/>
      <View style={styles.layanan}>
        <Text style={styles.label}>Layanan Kami</Text>
        <View style={styles.Iconlayanan}>

        <TouchableOpacity onPress={() => navigation.navigate('Gallery')}>
        <ButtonIcon title="Machine"   type="layanan"/>
        </TouchableOpacity>
         

        
        <TouchableOpacity onPress={() => navigation.navigate('Materials')}>
          <ButtonIcon title="Materials"     type="layanan" />
        </TouchableOpacity> 

    
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <ButtonIcon title="Profile"      type="layanan"/> 
        </TouchableOpacity>
        
        <TouchableOpacity>
        <ButtonIcon title="Offer" type="layanan"/> 
        </TouchableOpacity>
        
        </View>
      </View>
      <View style={styles.pesananAktif}>
        <Text style={styles.labelPesananAktif}>Pesanan Aktif</Text>
        <PesananAktif title="Quote 13092101" status="On Process" />
        <PesananAktif title="Quote 13092102" status="On Process" />
        <PesananAktif title="Quote 13092103" status="Done" />
        <PesananAktif title="Quote 13092105" status="Done" />

      </View>
      </ScrollView>
      </View>
  )
  
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const styles = StyleSheet.create({

  page: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    width: windowWidth,
    marginTop: 28,
    height: windowHeight * 0.25
  },
  hello:{
    marginTop: windowHeight*0.11,
    marginLeft: 23,
  },
  selamat:{
    fontSize: 17,
    color: '#ffffff',
  },
  UserName:{
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  layanan: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  Iconlayanan:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap'
  },
  pesananAktif: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingHorizontal: 30,
    backgroundColor: WARNA_ABU,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  labelPesananAktif: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})
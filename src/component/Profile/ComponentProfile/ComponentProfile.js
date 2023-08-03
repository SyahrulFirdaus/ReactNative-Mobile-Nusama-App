import { StyleSheet, Text, View, Dimensions, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { WARNA_PUTIH, WARNA_UTAMA } from '../../../utils/constant'
import { Instagram, Whatsapp, Twitter, Facebook, Shopee, Bukalapak, Tokopedia } from '../../../assets'



const ProfileComponent = ({title, type}) => {

    const Icon =() => {
        if(title === "instagram") return <Instagram />

        if(title === "whatsapp") return <Whatsapp />

        if(title === "twitter") return <Twitter />

        if(title === "facebook") return <Facebook />
        
        if(title === "shopee") return <Shopee />

        if(title === "bukalapak") return <Bukalapak />

        if(title === "tokopedia") return <Tokopedia />

        return <Instagram />
    }
  return (
    <View>

    <View style={styles.Cover}>
    <View style={styles.button(type)}>
        <Icon/>
    </View>
    </View>
    </View>
  )
}

export default ProfileComponent
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const styles = StyleSheet.create({

    
    button: (type) => ({
        backgroundColor: '#EFF5F5',
        padding: type === "hubungi" ? 12 : 3,
        width: 55,
        borderRadius: 10,
        
        
       
     
        
    }),
    text: (type) => ({
        fontSize: type === "layanan" ? 14 : 10,
        textAlign: 'center'
    }),
  
})
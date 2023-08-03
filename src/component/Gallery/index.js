import { StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView } from 'react-native'
import { ImageHeaderGallery } from '../../assets'
import React, { useState } from 'react'
import { WARNA_PUTIH, WARNA_UTAMA} from '../../utils/constant'
import GalleryComponent from './GalleryComponent/GalleryComponent'
import { SLA750, DMP500, CrealityEnder } from '../../assets'


const Gallery = ({navigation}) => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={ImageHeaderGallery} style={styles.header}>
      <Text style={styles.TextHeader}>#Realisasikan Idemu Bersama Nusama 3D</Text>
      </ImageBackground>
      
      
        <View style={styles.GalleryHeader}>
        <Text style={styles.TextGalleryHeader}>#Machine 3D Printing</Text>
        </View>

    <View>
        <GalleryComponent title="SLA 750" 
        titleContent="Production-Grade SLA Workflow Solution
        The SLA 750 solution delivers a breakthrough in additive manufacturing productivity, speed, reliability, and automation from the leading innovator in stereolithography (SLA) 3D printing. A full solution is comprised of the SLA 750 family of large-format 3D printing systems, advanced production-grade photopolymer materials, the PostCure 1050 post-processing system, and the Oqton cloud-based, end-to-end manufacturing operation system." 
        gambar={SLA750} />

        <GalleryComponent title="DMP Factory 500 Solution" 
        titleContent="The DMP Factory 500 Solution is comprised of function-specific modules designed to maximize efficiency by optimizing utilization. Each module within the factory solution is fully integrated with a Removable Print Module (RPM) which is vacuum sealable for a controlled print environment and engineered to move between printer and powder modules for continuous production workflow.

        Printer modules (PTM) are designed for ongoing, 24/7 printing of parts. The Depowdering Module (DPM) and Powder Recycling Module (PRM) are designed to efficiently depowder parts on build platforms and automatically recycle unused powder materials to prepare the RPM for the next build." 
        gambar={DMP500} />

        <GalleryComponent title="Creality Ender 3 S1 V-Slot 3D Printer Autolevel Direct Drive Hotend" 
        titleContent="Creality Ender 3 S1 V-Slot 3D Printer Autolevel Direct Drive Hotend
        Use the latest 32 Bit Silent Board mainboard from Creality so the print is less content and the print is more precise, other stores sell using the old 8 bit board." 
        gambar={CrealityEnder} />
    </View>
        
    </ScrollView>  
    </View>
  )
}

export default Gallery
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const styles = StyleSheet.create({

  header: {
    width: windowWidth,
    marginTop: 28,
    height: windowHeight * 0.20
  },
  TextHeader: {
    fontWeight: 'bold',
    color: WARNA_PUTIH,
    paddingLeft: 20,
    marginVertical: 40,
    fontSize: 20
  },
  GalleryHeader :{
    backgroundColor: '#ffffff',
    paddingVertical: 7,
    marginHorizontal: 65,
    borderRadius: 5,
    marginTop: -7,
    paddingLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  TextGalleryHeader:{
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
    paddingLeft:6,
    paddingRight: 10

  }
  
 
})
import { StyleSheet, Text, View, Dimensions, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { ImageTrackingQuote } from '../../../assets'
import ComponentQuoteTracking from '../ComponentTracking/ComponentQuoteTracking'


const TrackingQuote = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImageTrackingQuote} style={styles.header}></ImageBackground>

       <ComponentQuoteTracking status="On Process" />
       <ComponentQuoteTracking status="On Process"/>
       <ComponentQuoteTracking status="Done"/>
       <ComponentQuoteTracking status="Done"/>
       
      
       </ScrollView>
    </View>
  )
}

export default TrackingQuote
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const styles = StyleSheet.create({
    header: {
        width: windowWidth,
        marginTop: 28,
        height: windowHeight * 0.20
      }
})
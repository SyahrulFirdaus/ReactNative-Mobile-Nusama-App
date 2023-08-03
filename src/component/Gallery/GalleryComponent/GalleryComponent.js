import { StyleSheet, Text, View, Dimensions, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { SLA750, ImageHeaderGallery } from '../../../assets'



const GalleryComponent = ({title, titleContent, gambar}) => {
  return (
    <View>
   

    <View style={styles.content}>
    <View style={styles.bgContent}>
    <ImageBackground source={(gambar)} style={styles.header}></ImageBackground>
    </View>
    
    <Text style={styles.title(title)}>{title}</Text>
    <Text style={styles.titleContent(titleContent)}>{titleContent}</Text>
    </View>
    
    </View>
  )
}

export default GalleryComponent
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const styles = StyleSheet.create({
    header: {
        width: 200,
        marginTop: 28,
        height: 150,

      },
      content: {
        backgroundColor: '#ffffff',
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 15,
        paddingLeft: 10,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    
        elevation: 6,
        
        
        
      },
      bgContent:{
        justifyContent: 'center',
        alignItems: 'center'
      },
      title : (title) => ({
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 10,
        paddingBottom: 10
        
      }),
      titleContent: (titleContent) => ({
        textAlign: 'justify',
        fontSize: 12,
        paddingLeft: 2,
        paddingRight: 10,
        paddingBottom: 10
      })
})
import { StyleSheet, Text, View, Dimensions, ImageBackground, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { ImageQuote } from '../../../assets'
import { WARNA_ABU, WARNA_PUTIH, WARNA_WARNING, WARNA_UTAMA } from '../../../utils/constant'



const ComponentMaterial = ({status,content}) => {
  return (
    <View>
        

    <View style={styles.HeaderQuote }>
    <Text style={styles.content(content)}>{content}</Text>

    </View>
      <View style={styles.QuoteBg}>
        
        <Text style={styles.status(status)}>{status}</Text>
    
      </View>

        <TouchableOpacity>
        <View style={styles.FooterBG}>
            <Text style={styles.FooterText}>Baca Selengkapnya</Text>
        </View>
        </TouchableOpacity>
      

      

    </View>
  )
}

export default ComponentMaterial
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const styles = StyleSheet.create({
    FooterBG: {
        backgroundColor: '#000000',
        marginHorizontal: 20,
        marginTop: -20,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingTop: 10,
        marginBottom: 20,
        
    },
    FooterText: {
        color: WARNA_PUTIH,
        fontWeight: 'bold'
    },
    HeaderQuote: {
        backgroundColor: '#ad0101',
        marginHorizontal: 20,
        marginBottom: -20,
        marginTop: 20,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        paddingLeft: 10,
        paddingVertical: 5
        
    },
    content: (content) => ({
        fontWeight: 'bold',
        fontSize: 15,
        color: WARNA_PUTIH
    }),
    header: {
        width: windowWidth,
        marginTop: 30,
        height: windowHeight * 0.25
      },
    
    QuoteBg : {
        backgroundColor :'#ffffff',
        marginTop: 20,
        marginHorizontal: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginBottom: 20
    },
 
    TextMaterials: {
        fontSize: 12,
        textAlign: 'justify'
    },
   
    status : (status) => ({
        fontSize: 12,
        textAlign: 'justify'
 
    })
    
})
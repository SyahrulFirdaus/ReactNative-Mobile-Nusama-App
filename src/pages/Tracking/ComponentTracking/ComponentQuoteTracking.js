import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import { ImageQuote } from '../../../assets'
import { WARNA_ABU, WARNA_PUTIH, WARNA_WARNING, WARNA_UTAMA } from '../../../utils/constant'



const ComponentQuoteTracking = ({status}) => {
  return (
    <View>

    <View style={styles.HeaderQuote }>
    <Text style={styles.TextQuoteHeader}>No. Quote 13052022</Text>
    </View>
      <View style={styles.QuoteBg}>

        <Text style={styles.LabelPengirim}>Nama Pengirim</Text>
        <Text style={styles.TextPengirim}>Haura Nabilla Syakieb</Text>

        <Text style={styles.LabelPenerima}>Nama Penerima</Text>
        <Text style={styles.TextPenerima}>Syahrul Firdaus</Text>

        <Text style={styles.LabelExpedisi}>Nama Expedisi</Text>
        <Text style={styles.TextExpedisi}>JNE</Text>

        <Text style={styles.LabelJenisExpedisi}>Jenis Expedisi</Text>
        <Text style={styles.TextJenisExpedisi}>YES (1-2 Hari)</Text>

        <Text style={styles.LabelAlamat}>Alamat Penerima</Text>
        <Text style={styles.TextAlamat}>
            Taman Bukit Cibogo Blok A4 RT 08 RW 17 No.12, Kel.Leuwigajah, 
        Kec.Cimahi Selatan, Kota Cimahi, 40532, Jawa Barat, Indonesia</Text>
        <Text style={styles.status(status)}>{status}</Text>

      </View>

    </View>
  )
}

export default ComponentQuoteTracking
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const styles = StyleSheet.create({
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
    TextQuoteHeader: {
        fontWeight: 'bold',
        fontSize: 15,
        color: WARNA_PUTIH
    },
    header: {
        width: windowWidth,
        marginTop: 30,
        height: windowHeight * 0.25
      },
    //   quotebg: {
    //     justifyContent: 'center',
        
    //   },
      bgquote: {
        width:100,
        marginTop: 30,
        height: 100,
        justifyContent: 'center',
      },
    QuoteBg : {
        backgroundColor :'#ffffff',
        marginTop: 20,
        marginHorizontal: 20,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15, 
        paddingLeft: 10,
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
    LabelExpedisi: {
        fontWeight: 'bold',
        fontSize: 14
    },
    TextExpedisi: {
        fontSize: 10
    },
    LabelPengirim: {
        fontWeight: 'bold',
        fontSize: 14
    },
    TextPengirim: {
        fontSize: 10
    },
    LabelJenisExpedisi: {
        fontWeight: 'bold',
        fontSize: 14
    },
    TextJenisExpedisi: {
        fontSize: 10
    },
    LabelPenerima: {
        fontWeight: 'bold',
        fontSize: 14
    },
    TextPenerima: {
        fontSize: 10
    },
    LabelAlamat: {
        fontWeight: 'bold',
        fontSize: 14
    },
    TextAlamat: {
        fontSize: 10
    },
    status : (status) => ({
        fontSize: 12,
        color: status === 'Done' ? WARNA_UTAMA : status === 'On Process' ? WARNA_WARNING : WARNA_ABU, 
    })
    
})
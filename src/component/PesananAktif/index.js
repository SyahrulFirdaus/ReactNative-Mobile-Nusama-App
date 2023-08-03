import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconPesananAktif } from '../../assets'
import { WARNA_ABU, WARNA_UTAMA, WARNA_WARNING } from '../../utils/constant'

const PesananAktif = ({title, status}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <IconPesananAktif />
            <View style={styles.text}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.status(status)}>{status}</Text>
            </View>
      
    </TouchableOpacity>
  )
}

export default PesananAktif
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        padding: 17,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        marginVertical: windowHeight*0.01,
        alignItems: 'center'
    },

    text: {
        marginLeft: windowWidth*0.02
    },
    title : {
        fontWeight: 'bold',
        fontSize: 15,
    },
    status : (status) => ({
        fontSize: 12,
        color: status === 'Done' ? WARNA_UTAMA : status === 'On Process' ? WARNA_WARNING : WARNA_ABU, 
    })
})
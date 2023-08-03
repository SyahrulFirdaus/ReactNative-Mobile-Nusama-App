import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WARNA_UTAMA } from '../../utils/constant'
import ButtonIcon from '../ButtonIcon'
import Gap from '../Gap'

const Pesanan3D = () => {
  return (
    <View style={styles.container}>
        <View style={styles.informasiPesanan}>
        <View style={styles.text}>
        <Text style={styles.labelPesanan}>Pesanan 3D</Text>
        <Text style={styles.valuePesanan}> Rp. 100.000</Text>
        </View>

        <View style={styles.text}>
        <Text style={styles.labelPoint}>Point</Text>
        <Text style={styles.valuePoint}> 100 Point</Text>
        </View>
        </View>

        <View style={styles.buttonAksi}>
            <ButtonIcon title="Add Saldo" />
                <Gap width={2} />
            <ButtonIcon title="Get Point" />
        </View>
    </View>
  )
}

export default Pesanan3D

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 17,
        marginHorizontal: 20,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
        marginTop: windowHeight* -0.02,
        flexDirection: 'row'

    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    informasiPesanan: {
        width: '60%'
    },
    labelPesanan: {
        fontSize: 15,
        fontFamily: 'Titillium-Reguler'
    },
    valuePesanan: {
        fontSize: 15,
        fontWeight:'bold'
    },
    labelPoint: {
        fontSize: 9,
        fontFamily: 'Titillium-Reguler'
    },
    valuePoint: {
        fontSize: 9,
        fontWeight:'bold',
        color: WARNA_UTAMA
    },
    buttonAksi: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: -2
    }

})
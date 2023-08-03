import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';


const ComponentTextInputPassword = (props) => {
    
  return (
    <View style={styles.input}>
    <View style={styles.iconinput}>
    <Icon name="lock"   size={30} color="#900" />
    </View>
    
    <TextInput value={props.state} style={styles.inputpassword} placeholder=" Enter your password" onChangeText={text=> props.set(text)}
    secureTextEntry={props.secureTextEntry}
    />
    </View>
  )
}

export default ComponentTextInputPassword

const styles = StyleSheet.create({
    inputpassword: {
        backgroundColor: '#ffffff',
        // marginHorizontal: 20,
        // borderRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        // paddingVertical: 20,
        height: 40,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,
        flex: 1,
        paddingLeft: 10
        
        
      },
      iconinput : {
        justifyContent :'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width: 50,
        borderTopLeftRadius:15,
        borderBottomLeftRadius: 15,
      },
      input: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 10
      }
})
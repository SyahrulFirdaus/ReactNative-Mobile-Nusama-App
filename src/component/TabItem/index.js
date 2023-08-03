import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {IconHome, IconHomeAktive, IconOrder, IconOrderAktive, IconUser, IconUserAktive} from '../../assets'
import { WARNA_UTAMA, WARNA_DISABLE } from '../../utils/constant'


const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon =() =>{
    if(label === "Home") return isFocused ? <IconHomeAktive /> : <IconHome/>

    if(label === "Tracking") return isFocused ? <IconOrderAktive /> : <IconOrder />

    if(label === "Akun") return isFocused ?  <IconUserAktive /> : <IconUser />

    return <IconHome />
  }
  return (
    <TouchableOpacity
    onPress={onPress}
    onLongPress={onLongPress}
    style={styles.container}>
      <Icon />
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (isFocused) => ({
    fontSize: 13,
    color:isFocused ? WARNA_UTAMA: WARNA_DISABLE,
    marginTop: 8
  })
})
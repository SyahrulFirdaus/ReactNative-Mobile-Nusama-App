import * as React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Router from './src/router'


const App = () => {
  return (
    <>
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#ad0101" translucent = {true}/>
     <NavigationContainer>
     <Router />
    </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/home';
import Akun from '../pages/akun';
import Splash from '../pages/Splash';
import Tracking from '../pages/Tracking';
import Register from '../pages/akun/register';
import TrackingQuote from '../pages/Tracking/TrackingQuote/TrackingQuote.js';
import Materials from '../component/Materials';
import Gallery from '../component/Gallery';
import Profile from '../component/Profile';




import { BottomNavigator } from '../component/';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false}}/>
            <Tab.Screen name="Tracking" component={Tracking} options={{ headerShown: false}} />
            <Tab.Screen name="Akun" component={Akun} options={{ headerShown: false}} />
        </Tab.Navigator>
    )
  }
  
const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
        <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="TrackingQuote" component={TrackingQuote} options={{ headerShown: false }}/>
        <Stack.Screen name="Materials" component={Materials} options={{ headerShown: false }}/>
        <Stack.Screen name="Gallery" component={Gallery} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
      
        
        
       
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})
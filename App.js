import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/Home/HomeScreen'
import { useFonts } from 'expo-font'


export default function App() {
  const [isLoaded] = useFonts({
    "RobotoSlab-Black": require("./assets/fonts/RobotoSlab-Black.ttf"),
    "RobotoSlab-Bold": require("./assets/fonts/RobotoSlab-Bold.ttf"),
    "RobotoSlab-ExtraBold": require("./assets/fonts/RobotoSlab-ExtraBold.ttf"),
    "RobotoSlab-ExtraLight": require("./assets/fonts/RobotoSlab-ExtraLight.ttf"),
    "RobotoSlab-Light": require("./assets/fonts/RobotoSlab-Light.ttf"),
    "RobotoSlab-Medium": require("./assets/fonts/RobotoSlab-Medium.ttf"),
    "RobotoSlab-Regular": require("./assets/fonts/RobotoSlab-Regular.ttf"),
    "RobotoSlab-SemiBold": require("./assets/fonts/RobotoSlab-SemiBold.ttf"),
    "RobotoSlab-Thin": require("./assets/fonts/RobotoSlab-Thin.ttf"),
    
  });

  return (
    <HomeScreen />
  )
}


const styles = StyleSheet.create({})
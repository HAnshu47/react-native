import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import {Colors} from '../assets/color/color'

export default function _layout() {
  //根
  const colorSheme = useColorScheme()
  console.log(colorSheme,'=')
  const theme = Colors[colorSheme]??Colors.light
  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{
        headerStyle: {backgroundColor: theme.navBackground,}, 
        headerTintColor: {color: theme.title},
   }}>
        {/* 注册屏幕 */}
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="demo" options={{ title: '第二个页面' }} />
        </Stack>  
      <Text>_layout</Text>
    </View>
  )
}
 
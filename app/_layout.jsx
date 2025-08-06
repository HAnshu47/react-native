import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

export default function _layout() {
  //根
  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{headerStyle:{backgroundColor:'#ccc'}}}>
        {/* 注册屏幕 */}
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="demo" options={{ title: '第二个页面' }} />
        </Stack>  
      <Text>_layout</Text>
    </View>
  )
}
 
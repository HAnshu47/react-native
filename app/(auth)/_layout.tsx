import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { Colors } from '../../assets/color/color'

export default function _layout() {
  //根
  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false, animation: "none", }}>
        {/* 注册屏幕 */}
        {/* <Stack.Screen name="login" options={{ title: '登录' }} /> */}
      </Stack>
    </View>
  )
}

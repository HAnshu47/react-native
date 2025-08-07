import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { Colors } from '../../assets/color/color'

export default function _layout() {
  //根
  const theme = useColorScheme() === 'dark' ? Colors.dark : Colors.light
  return (
    <Tabs screenOptions={{
      headerShown: false,
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor,
        tabBarStyle: { backgroundColor: theme.background },
    }} />
  )
}

import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { Colors } from '../../assets/color/color'
import { Ionicons } from '@expo/vector-icons'

export default function _layout() {
  //根
  const theme = useColorScheme() === 'dark' ? Colors.dark : Colors.light
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.iconColorFocused,
      tabBarInactiveTintColor: theme.iconColor,
      tabBarStyle: { backgroundColor: theme.background },
    }} >
      <Tabs.Screen name="text" options={{
        title: '文本',
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} />
        )
      }}>
      </Tabs.Screen>
      <Tabs.Screen name="time" options={{
        title: '时间',
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name={focused ? 'time' : 'time-outline'} size={size} color={color} />
        )
      }}>
      </Tabs.Screen>
    </Tabs>
  )
}

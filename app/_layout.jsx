import { View, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { Colors } from '../assets/color/color'
const colorSheme = useColorScheme()
const theme = Colors[colorSheme] ?? Colors.light
export default function _layout() {
  //根

  return (
    <View style={styles.container}>
      <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground, },
        headerTintColor: { color: theme.title },
      }}>
        {/* 注册屏幕 */}
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="demo" options={{ title: '第二个页面' }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />

      </Stack>
      </View>
   
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


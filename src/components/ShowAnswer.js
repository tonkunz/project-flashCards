import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default function ShowAnswer ({style, value, onClick}) {
  return (
    <TouchableOpacity
      style={style}
      onPress={() => onClick()}
    >
      <Text>{value}</Text>
    </TouchableOpacity>
  )
}
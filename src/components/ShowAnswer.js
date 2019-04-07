import React from 'react'
import {  Text, TouchableOpacity, StyleSheet } from 'react-native'
export default function ShowAnswer ({style = {}, value, onPress }) {
  return (
    <TouchableOpacity
      style={style}
      onPress={() => onPress()}
    >
      <Text>{value}</Text>
    </TouchableOpacity>
  )
}
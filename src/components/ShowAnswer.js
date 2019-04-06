import React from 'react'
import {  Text, TouchableOpacity } from 'react-native'
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
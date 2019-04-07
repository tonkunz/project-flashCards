import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

// Utils
import { white } from '../utils/colors'

export default function TextButton ({ value, onPress, style = {}, textStyle={} }) {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      <Text style={[styles.btnText, textStyle]}>{value}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    borderRadius: 7,
    height: 45,
    margin: 3,
    width: 150,
  },
  btnText: {
    fontSize: 17,
    textAlign: 'center',
    color: white
  }
})
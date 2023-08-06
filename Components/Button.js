import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import COLORS from '../constants/COLORS'
const Button = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    height: 55,
    width: '100%',
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  textStyle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18
  }
})
export default Button

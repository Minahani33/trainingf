import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { Octicons } from '@expo/vector-icons'
function HomeButton(props) {
  const { container, leftIcon, textStyle, icon } = styles
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={container}>
        <Octicons
          name="chevron-left"
          size={30}
          color="white"
          style={leftIcon}
        />
        <Text style={textStyle}>{props.textValue}</Text>
        <Octicons name={props.iconName} size={30} color="white" style={icon} />
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#031C41',
    height: 70,
    borderRadius: 35,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    padding: 5
  },
  textStyle: {
    fontSize: 30,
    color: 'white',
    flex: 1,
    textAlign: 'center'
  },
  icon: {
    marginRight: 10
  },
  leftIcon: {
    marginLeft: 10
  }
})
export default HomeButton

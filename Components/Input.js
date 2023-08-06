import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import COLORS from '../constants/COLORS'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Input = ({
  label,
  iconName,
  text,
  onFocus = () => {},
  onChangeText,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.focusedInputContainer
        ]}
      >
        <MaterialIcons
          name={iconName}
          size={22}
          color={COLORS.darkBlue}
          style={styles.icon}
        />
        <TextInput
          onChangeText={onChangeText}
          style={styles.textInput}
          autoCorrect={false}
          value={text}
          onFocus={() => {
            onFocus()
            setIsFocused(true)
          }}
          onBlur={() => {
            setIsFocused(false)
          }}
          {...props}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey
  },
  inputContainer: {
    height: 55,
    flexDirection: 'row',
    backgroundColor: COLORS.grey,
    borderWidth: 0.5,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderColor: COLORS.light
  },
  focusedInputContainer: {
    borderColor: Colors.darkBlue
  },
  errorInputContainer: {
    borderColor: COLORS.red
  },
  icon: {
    marginRight: 10
  },
  textInput: {
    color: COLORS.darkBlue,
    flex: 1
  },
  errorStyle: {
    color: COLORS.red,
    fontSize: 12,
    marginTop: 7
  }
})
export default Input

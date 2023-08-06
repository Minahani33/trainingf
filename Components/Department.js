import React from 'react'
import Input from './Input'
import CheckBox from 'expo-checkbox'
import COLORS from '../constants/COLORS'
import { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
const Department = ({
  onChangeText1,
  onChangeText2,
  label,
  error,
  text1,
  text2,
  onFocus = () => {},
  ...props
}) => {
  const [isSelected, setIsSelected] = useState(props.selected)
  return (
    <View style={{ marginVertical: 5 }}>
      <View style={styles.subContainer}>
        <CheckBox
          value={isSelected}
          style={styles.myCheckBox}
          color={COLORS.darkBlue}
          onValueChange={setIsSelected}
        />
        <Text
          style={{ color: COLORS.darkBlue, fontWeight: 'bold', fontSize: 16 }}
        >
          {label} Department
        </Text>
      </View>
      {isSelected && (
        <Input
          keyboardType="numeric"
          label={`Number of ${label} Eng. students 4th year`}
          iconName={'engineering'}
          placeholder={`Enter ${label} Eng. students 4th year`}
          onFocus={onFocus}
          value={text1}
          onChangeText={onChangeText1}
          {...props}
        />
      )}
      {isSelected && (
        <Input
          keyboardType="numeric"
          label={`Number of ${label} Eng. students 3rd year`}
          iconName={'engineering'}
          placeholder={`Enter ${label} Eng. students 3rd year`}
          onFocus={onFocus}
          value={text2}
          onChangeText={onChangeText2}
          {...props}
        />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  myCheckBox: {
    color: COLORS.darkBlue,
    height: 22,
    width: 22,
    marginRight: 5
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
export default Department

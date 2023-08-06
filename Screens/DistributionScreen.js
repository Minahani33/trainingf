import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import COLORS from '../constants/COLORS'
import DEPARTMENTS from '../constants/DEPARTMENTS'
function Item(props) {
  return (
    <TouchableOpacity style={styles.itemStyle} onPress={props.onPress}>
      <Text style={styles.itemText}>{props.text}</Text>
    </TouchableOpacity>
  )
}
function DistributionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Departments</Text>
      <View style={styles.holder}>
        <Item
          text="Communication"
          onPress={() =>
            navigation.navigate('Ditribution Results', {
              name: DEPARTMENTS.COMMUNICATION
            })
          }
        />
        <Item
          text="Computer"
          onPress={() =>
            navigation.navigate('Ditribution Results', {
              name: DEPARTMENTS.COMPUTER
            })
          }
        />
        <Item
          text="Electricity"
          onPress={() =>
            navigation.navigate('Ditribution Results', {
              name: DEPARTMENTS.ELECTRICAL
            })
          }
        />
        <Item
          text="Civil"
          onPress={() =>
            navigation.navigate('Ditribution Results', {
              name: DEPARTMENTS.CIVIL
            })
          }
        />
        <Item
          text="Surveying"
          onPress={() =>
            navigation.navigate('Ditribution Results', {
              name: DEPARTMENTS.SURVEYING
            })
          }
        />
        <Item
          text="Architecture"
          onPress={() =>
            navigation.navigate('Ditribution Results', {
              name: DEPARTMENTS.ARCHITECTURE
            })
          }
        />
        <Item
          text="Mechanical Power"
          onPress={() =>
            navigation.navigate('Ditribution Results', {
              name: DEPARTMENTS.MECHANICALPOWER
            })
          }
        />
        <Item
          text="Mechanical Production"
          onPress={() =>
            navigation.navigate('Ditribution Results', {
              name: DEPARTMENTS.MECHANICALPRODUCTION
            })
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: COLORS.darkBlue,
    marginBottom: 40
  },
  itemStyle: {
    color: COLORS.darkBlue,
    width: '100%',
    backgroundColor: COLORS.tomato,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    lineHeight: 1,
    borderRadius: 5,
    height: 50
  },
  itemText: {
    color: COLORS.darkBlue,
    fontSize: 30
  },
  holder: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    width: '100%'
  }
})
export default DistributionScreen

import React from 'react'
import { View, StyleSheet, Text, SectionList } from 'react-native'
import COLORS from '../constants/COLORS'
import { getThirdYear, getForthYear } from '../data/getData'
function ResultScreen({ navigation, route }) {
  const DATA = [
    {
      title: 'Forth Year students',
      data: getForthYear(route.params.name)
    },
    {
      title: 'Third Year students',
      data: getThirdYear(route.params.name)
    }
  ]
  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>{item.company}</Text>
        <Text style={styles.text2}>{item.studentName}</Text>
      </View>
      <View style={styles.vLine}></View>
    </View>
  )
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.name}</Text>
      <SectionList
        style={styles.list}
        sections={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.title}>{title}</Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.darkBlue,
    padding: 10,
    alignSelf: 'center'
  },
  vLine: {
    backgroundColor: COLORS.tomato,
    width: 5,
    height: '100%'
  },
  textContainer: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text1: {
    fontSize: 15,
    fontWeight: '500',
    alignSelf: 'flex-start',
    backgroundColor: COLORS.blue
  },
  text2: {
    fontSize: 15,
    alignSelf: 'flex-end',
    justifyContent: 'center'
  },
  itemContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    justifyContent: 'center'
  },
  list: {
    width: '100%'
  }
})

export default ResultScreen

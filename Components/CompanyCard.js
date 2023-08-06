import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import COLORS from '../constants/COLORS'
const CompanyCard = ({
  name,
  specialization,
  email,
  phone,
  trustLevel,
  thirdYearStudents,
  forthYearStudents,
  location,
  supervisor,
  ...props
}) => {
  return (
    <TouchableOpacity style={styles.cardStyle} onPress={props.onPress}>
      <View style={styles.textHolder}>
        <Text style={styles.title}>Name:</Text>
        <Text style={styles.description}>{name}</Text>
      </View>
      <View style={styles.textHolder}>
        <Text style={styles.title}>Phone:</Text>
        <Text style={styles.description}>{phone}</Text>
      </View>
      <View style={styles.textHolder}>
        <Text style={styles.title}>specialization:</Text>
        <Text style={styles.description}>{specialization}</Text>
      </View>
      <View style={styles.textHolder}>
        <Text style={styles.title}>Email:</Text>
        <Text style={styles.description}>{email}</Text>
      </View>
      <View style={styles.textHolder}>
        <Text style={styles.title}>Trust Level:</Text>
        <Text style={styles.description}>{trustLevel}</Text>
      </View>
      <View style={styles.textHolder}>
        <Text style={styles.title}>Number of 3rd year students:</Text>
        <Text style={styles.description}>{thirdYearStudents}</Text>
      </View>
      <View style={styles.textHolder}>
        <Text style={styles.title}>Number of 4th year students:</Text>
        <Text style={styles.description}>{forthYearStudents}</Text>
      </View>
      <View style={styles.textHolder}>
        <Text style={styles.title}>Location:</Text>
        <Text style={styles.description}>{location}</Text>
      </View>
      <View style={styles.textHolder}>
        <Text style={styles.title}>Supervisor:</Text>
        <Text style={styles.description}>{supervisor}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  cardStyle: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: COLORS.blue,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 15
  },
  textHolder: {
    padding: 2,
    flexDirection: 'row',
    marginVertical: 2
  },
  title: {
    fontSize: 18,
    color: COLORS.darkBlue
  },
  description: {
    fontSize: 18,
    color: COLORS.white,
    marginLeft: 5
  }
})
export default CompanyCard

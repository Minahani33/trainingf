import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import CompanyCard from '../Components/CompanyCard'
import { ShowOrganization } from '../data/Database'
function CompaniesScreen({ navigation }) {
  const renderItem = ({ item, index }) => (
    <CompanyCard
      name={item.comp_name ? item.comp_name.toString() : '#####'}
      phone={item.telephone.toString()}
      forthYearStudents={item.Number_Of_Students4.toString()}
      thirdYearStudents={item.Number_Of_Students3.toString()}
      trustLevel={item.trust_Level.toString()}
      email={item.e_mail.toString()}
      specialization={item.Specialization.toString()}
      supervisor={item.supervisor.toString()}
      location={item.address.toString()}
      onPress={() =>
        navigation.replace('Organization Details', {
          name: item.comp_name.toString(),
          phone: item.telephone.toString(),
          trustLevel: item.trust_Level.toString(),
          email: item.e_mail.toString(),
          specialization: item.Specialization.toString(),
          thirdYearStudents: item.Number_Of_Students3.toString(),
          forthYearStudents: item.Number_Of_Students4.toString(),
          location: item.address.toString(),
          subervisor:item.supervisor.toString(),
          index:item.comp_id
        })
      }
    />
  )
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={ShowOrganization()}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    width: '100%'
  }
})
export default CompaniesScreen

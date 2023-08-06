import React from 'react'
import Home from './Screens/Home'
import CompaniesScreen from './Screens/CompaniesScreen'
import AddOrg from './Screens/AddOrg'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import COLORS from './constants/COLORS'
import OrganizationScreen from './Screens/OrganizationScreen'
import DistributionScreen from './Screens/DistributionScreen'
import ResultScreen from './Screens/ResultScreen'
import * as SQLite from 'expo-sqlite'
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTintColor: COLORS.darkBlue,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        />
        <Stack.Screen
          name="Add Organization"
          component={AddOrg}
          options={{
            headerTintColor: COLORS.darkBlue,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        />
        <Stack.Screen
          name="Organizations"
          component={CompaniesScreen}
          options={{
            headerTintColor: COLORS.darkBlue,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        />
        <Stack.Screen
          name="Organization Details"
          component={OrganizationScreen}
          options={{
            headerTintColor: COLORS.darkBlue,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        />
        <Stack.Screen
          name="Departments"
          component={DistributionScreen}
          options={{
            headerTintColor: COLORS.darkBlue,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        />
        <Stack.Screen
          name="Ditribution Results"
          component={ResultScreen}
          options={{
            headerTintColor: COLORS.darkBlue,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

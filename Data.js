import React, { useEffect, useState } from 'react'
import { StyleSheet ,View,Text,TextInput,Button} from 'react-native'
import * as SQLite from 'expo-sqlite'

export default function Data() {
const db = SQLite.openDatabase('Test.db')
const [names, setNames] = useState([])
const [currentName, setCurrentName] = useState(undefined)
useEffect(() => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Organization ("comp_id" INTEGER PRIMARY KEY AUTOINCREMENT, "comp_name" INTEGER NOT NULL,"Specialization" TEXT NOT NULL,"e_mail" INTEGER NOT NULL UNIQUE,"telephone"	TEXT NOT NULL UNIQUE,"supervisor"	INTEGER NOT NULL,"address"	TEXT NOT NULL,PRIMARY KEY("comp_id" AUTOINCREMENT))'
    )
  })

  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM Organization',
      null,
      (txObj, resultSet) => console.log(resultSet.rows._array),
      (txObj, error) => console.log(error)
    )
  })
}, [db])



    const showNames = () => {
      return names.map((name, index) => {
        return (
          <View key={index} style={styles.row}>
            <Text>{name.name}</Text>
          </View>
        )
      })
    }

    return (
      <View style={styles.container}>
        <TextInput
          value={currentName}
          placeholder="name"
          onChangeText={setCurrentName}
        />
        <Button title="Add Name" onPress={addName} />
        {showNames()}
        <StatusBar style="auto" />
      </View>
    )
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    margin: 8
  }
})

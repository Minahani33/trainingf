import React, { useState } from 'react'
import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('memorey.db')
export function ShowOrganization() {
  const [names, setNames] = useState([])
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM Organization',
      null,
      (txObj, resultSet) => setNames(resultSet.rows._array),
      (txObj, error) => console.log(error)
    )
  })
  return names
}
export function addOrganization(
  comp_name,
  Specialization,
  e_mail,
  telephone,
  supervisor,
  address,
  Number_Of_Students3,
  Number_Of_Students4,
  trust_Level
) {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO Organization (comp_name,Specialization,e_mail,telephone,supervisor,address,Number_Of_Students3,Number_Of_Students4, trust_Level) values (?,?,?,?,?,?,?,?,?)',
      [
        comp_name,
        Specialization,
        e_mail,
        telephone,
        supervisor,
        address,
        Number_Of_Students3,
        Number_Of_Students4,
        trust_Level
      ],
      (txObj, error) => console.log(error)
    )
  })
}


export function updateOrg(id,name,spec,email,phone,supervisor,location,n3,n4,trustLevel)  {
    db.transaction(tx => {
      tx.executeSql('UPDATE Organization SET (comp_name,Specialization,e_mail,telephone,supervisor,address,Number_Of_Students3,Number_Of_Students4,trust_Level) = (?,?,?,?,?,?,?,?,?) WHERE id = ?', [name,spec,email,phone,supervisor,location,n3,n4,trustLevel, id])
        },
      );
    };
export default function Database() {}

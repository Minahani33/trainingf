import DEPARTMENTS from '../constants/DEPARTMENTS'
export let students = [
  {
    id: 1,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1480,
    specialization: DEPARTMENTS.COMMUNICATION,
    company: '',
    year: 3
  },
  {
    id: 2,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1485,
    specialization: DEPARTMENTS.COMMUNICATION,
    company: '',
    year: 4
  },
  {
    id: 3,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1280,
    specialization: DEPARTMENTS.COMMUNICATION,
    company: '',
    year: 3
  },
  {
    id: 4,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1180,
    specialization: DEPARTMENTS.COMMUNICATION,
    company: '',
    year: 3
  },
  {
    id: 5,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1440,
    specialization: DEPARTMENTS.COMMUNICATION,
    company: '',
    year: 4
  },
  {
    id: 6,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1230,
    specialization: DEPARTMENTS.CIVIL,
    company: '',
    year: 3
  },
  {
    id: 7,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1120,
    specialization: DEPARTMENTS.COMMUNICATION,
    company: '',
    year: 4
  },
  {
    id: 8,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1480,
    specialization: DEPARTMENTS.CIVIL,
    company: '',
    year: 4
  },
  {
    id: 9,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1480,
    specialization: DEPARTMENTS.CIVIL,
    company: '',
    year: 3
  },
  {
    id: 10,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1180,
    specialization: DEPARTMENTS.COMMUNICATION,
    company: '',
    year: 4
  },
  {
    id: 30,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1122,
    specialization: DEPARTMENTS.SURVEYING,
    company: '',
    year: 3
  },
  {
    id: 11,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 999,
    specialization: DEPARTMENTS.MECHANICALPRODUCTION,
    company: '',
    year: 3
  },
  {
    id: 12,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1491,
    specialization: DEPARTMENTS.MECHANICALPOWER,
    company: '',
    year: 4
  },
  {
    id: 13,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1111,
    specialization: DEPARTMENTS.COMPUTER,
    company: '',
    year: 4
  },
  {
    id: 14,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1000,
    specialization: DEPARTMENTS.COMMUNICATION,
    company: '',
    year: 3
  },
  {
    id: 15,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1480,
    specialization: DEPARTMENTS.COMPUTER,
    company: '',
    year: 4
  },
  {
    id: 16,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1233,
    specialization: DEPARTMENTS.ELECTRICAL,
    company: '',
    year: 3
  },
  {
    id: 17,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1232,
    specialization: DEPARTMENTS.MECHANICALPRODUCTION,
    company: '',
    year: 4
  },
  {
    id: 18,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1321,
    specialization: DEPARTMENTS.COMMUNICATION,
    company: '',
    year: 4
  },
  {
    id: 19,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1211,
    specialization: DEPARTMENTS.CIVIL,
    company: '',
    year: 4
  },
  {
    id: 20,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1321,
    specialization: DEPARTMENTS.SURVEYING,
    company: '',
    year: 3
  },
  {
    id: 21,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1280,
    specialization: DEPARTMENTS.COMPUTER,
    company: '',
    year: 4
  },
  {
    id: 22,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1480,
    specialization: DEPARTMENTS.COMPUTER,
    company: '',
    year: 4
  },
  {
    id: 23,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1180,
    specialization: DEPARTMENTS.COMPUTER,
    company: '',
    year: 4
  },
  {
    id: 24,
    studentName: 'Ahmed Essam Saleh Mahmoud',
    degree: 1180,
    specialization: DEPARTMENTS.COMPUTER,
    company: '',
    year: 3
  },
  {
    id: 25,
    studentName: 'Essam Saleh Mahmoud',
    degree: 1380,
    specialization: DEPARTMENTS.COMPUTER,
    company: '',
    year: 3
  }
]
export function getSortedSpecializedArrayOfStudents(specialization) {
  let array = students.filter(function (student) {
    return student.specialization === specialization
  })
  array = array.sort((a, b) => b.degree - a.degree)
  return array
}
export function getThirdYearStudents(specialization) {
  return getSortedSpecializedArrayOfStudents(specialization).filter(
    (student) => student.year === 3
  )
}
export function getForthYearStudents(specialization) {
  return getSortedSpecializedArrayOfStudents(specialization).filter(
    (student) => student.year === 4
  )
}

import { companies, getSortedSpecializedArrayOfCompanies } from './companies'
import { getThirdYearStudents, getForthYearStudents } from './students'

function getCompanies(specialization) {
  return getSortedSpecializedArrayOfCompanies(specialization)
}

export function getThirdYear(specialization) {
  const array = getThirdYearStudents(specialization)
  const companiesArray = getCompanies(specialization)
  let idx = 0
  for (let i = 0; i < companiesArray.length; i++) {
    if (companiesArray[i].thirdYearStudents > 0) {
      let j = 0
      for (
        j = idx;
        j < array.length && idx - j < companiesArray[i].thirdYearStudents;
        j++
      ) {
        array[j].company = companiesArray[i].companyName
      }
      idx = j
    }
  }
  return array
}
export function getForthYear(specialization) {
  const array = getForthYearStudents(specialization)
  const companiesArray = getCompanies(specialization)
  let idx = 0
  for (let i = 0; i < companiesArray.length; i++) {
    if (companiesArray[i].forthYearStudents > 0) {
      let j = 0
      for (
        j = idx;
        j < array.length && j - idx < companiesArray[i].forthYearStudents;
        j++
      ) {
        array[j].company = companiesArray[i].companyName
      }
      idx = j
    }
  }
  console.log(array)
  return array
}

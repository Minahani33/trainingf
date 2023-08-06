import DEPARTMENTS from '../constants/DEPARTMENTS'
export function addCompany(
  comp_name,
  Spec,
  e_mail,
  capacity,
  period,
  telephone,
  supervisor,
  trust_level,
  address
) {
  companies.push({
    comp_name: comp_name.toString(),
    Spec: Spec.toString(),
    e_mail: e_mail.toString(),
    capacity: capacity.toString(),
    period: period.toString(),
    telephone: telephone.toString(),
    supervisor: supervisor.toString(),
    trust_level: trust_level.toString(),
    address: address.toString()
  })
}

export function updateCompany(
  index,
  name,
  email,
  phone1,
  phone2,
  location,
  trustLevel,
  spec,
  n3,
  n4
) {
  companies[Number(index)] = {
    companyName: name.toString(),
    phone1: phone1.toString(),
    phone2: phone2.toString(),
    trustLevel: Number(trustLevel),
    location: location.toString(),
    email: email.toString(),
    specialization: spec.toString(),
    thirdYearStudents: Number(n3),
    forthYearStudents: Number(n4)
  }
}
export function getSortedSpecializedArrayOfCompanies(specialization) {
  let array = companies.filter(function (company) {
    return company.specialization === specialization
  })
  array = array.sort((a, b) => b.trustLevel - a.trustLevel)
  return array
}

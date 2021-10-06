import { extend } from 'vee-validate'
import { required as rule_requied, numeric as rule_numeric, email as rule_email, min as rule_min, max as rule_max, length as rule_length } from 'vee-validate/dist/rules'

function getAge(dob) {
  let date = dob == null ? '' : dob
  let today = new Date()
  let birthday = new Date(
    `${date.split('/')[2]}-${date.split('/')[1]}-${date.split('/')[0]}`
  )
  // let birthday = new Date(dob)
  let year = 0
  if (today.getMonth() < birthday.getMonth()) {
    year = 1
  } else if (Number(date.split('/')[1]) > 12) {
    // if month > 12 return 0
    year = 0
  } else if (
    today.getMonth() == birthday.getMonth() &&
    today.getDate() < birthday.getDate()
  ) {
    year = 1
  }
  var age = today.getFullYear() - birthday.getFullYear() - year

  if (age < 0 || age > 150) {
    age = 0
  }

  return age
}

export const required = extend('required', {
  ...rule_requied,
  message: 'Kolom harus diisi.'
})

export const numeric = extend('numeric', {
  ...rule_numeric,
  message: 'Harus diisi menggunakan angka'
})

export const email = extend('email', {
  ...rule_email,
  message: 'Format email tidak benar.'
})

export const length = extend('length', {
  ...rule_length,
  message: 'Harus {length} digit.'
})

export const min = extend('min', {
  ...rule_min,
  message: 'Minimal {length} karakter.'
})

export const max = extend('max', {
  ...rule_max,
  message: 'Maksimal {length} karakter.'
})

export const phone = extend('phone', value => {
  if (value.charAt(0) == 0) {
    return true
  }
  return 'Awali dengan angka 0!'
})

export const dob = extend('dob', value => {
  console.log(getAge(value.toString()))
  if (getAge(value.toString()) < 120) {
    return true
  }
  if (isNaN(getAge(value.toString()))) {
    return 'Format tanggal tidak benar!'
  }
  return 'Maksimum usia 120 tahun!'
})


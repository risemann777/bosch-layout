export default class Validate {
  static validName(name) {
    let valid = {
      check: true,
      errorName: ''
    }
    if (!name.length) {
      valid.check = false
      valid.errorName = 'Заполните поле'
    }
    return valid
  }
}
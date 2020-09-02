export const deadline = (length, language) => {
  const dateNow = new Date()
  let simposlPerHours
  let value
  const defaultMinute = 60 * 60

  if (language === 'en') {
    simposlPerHours = 333
    value = Math.floor(length / simposlPerHours) * 60
  } else {
    simposlPerHours = 1333
    value = Math.floor(length / simposlPerHours) * 60
  }

  dateNow.setSeconds(dateNow.getSeconds() + (defaultMinute > value ? defaultMinute : value))

  return `Срок сдачи: ${formatData(dateNow)}`
}

const formatData = date => {
  let dd = date.getDate()
  if (dd < 10) dd = '0' + dd

  let mm = date.getMonth() + 1
  if (mm < 10) mm = '0' + mm

  let yy = date.getFullYear() % 100
  if (yy < 10) yy = '0' + yy

  let hh = date.getHours()
  if (hh < 10) hh = '0' + hh

  let min = date.getMinutes()
  if (min < 10) min = min + '0'

  return `${dd}.${mm}.${yy} в ${hh}:${min}`
}

function resetDate(date, days = 1, hour = 10, minutes = 0, seconds = 0, ms = 0) {
  date.setDate(date.getDate() + days)
  date.setHours(hour, minutes, seconds, ms)

  return date
}

module.exports = { resetDate }

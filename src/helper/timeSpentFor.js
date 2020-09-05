const symbolsPerHour = {
  ru: 1333,
  ukr: 1333,
  en: 333,
}

const HOUR = 60 * 60
const HALF_HOUR = HOUR / 2

export function timeSpentFor(count, ln) {
  if (!symbolsPerHour[ln]) {
    // throw new Error(`Unknown language: ${ln}`)
    return
  }

  if (count === 0) {
    return 0
  }

  const velocity = symbolsPerHour[ln]

  const timeToSpend = Math.max(HOUR, HALF_HOUR + (count / velocity) * 3600)
  // return in seconds
  return Math.floor(timeToSpend)
}

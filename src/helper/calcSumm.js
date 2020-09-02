export const calcSumm = (length, language, value, minCost) => {

  if (language === 'en') {
    value = 0.12
    minCost = 120
  } else {
    value = 0.05
    minCost = 50
  }

  return minCost < Math.floor(value * length) ? (value * length).toFixed(2) : minCost.toFixed(2)
}

export function chooseCoefficientSpeed(language) {
  if (language === 'en') {
    return { coefficient: 0.12, speed: 333, minCost: 120 }
  }

  if (language === 'ru' || language === 'ukr') {
    return { coefficient: 0.05, speed: 1333, minCost: 50 }
  }

  return {}
}

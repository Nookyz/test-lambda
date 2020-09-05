export function calculatePrice(length, obj) {
  return obj.minCost < Math.floor(obj.coefficient * length)
    ? Math.floor(obj.coefficient * length).toFixed(2)
    : obj.minCost.toFixed(2)
}

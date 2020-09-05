import { resetDate } from './resetDate'
import { timeSpentFor } from './timeSpentFor'

// const dateStart = new Date()
// const timeSpent = timeSpentFor(2333, "en")

export function calculateResultDate(durationToWork, start = new Date()) {
  const evening = 19
  const morning = 10
  let deadline = start
  let tempSeconds = 0

  while (true) {
    let todayWorkLeft = (evening - deadline.getHours()) * 60 * 60 // in minutes

    if (deadline.getDay() === 6 || deadline.getDay() === 0) {
      resetDate(deadline)
      continue
    }

    if (deadline.getHours() >= evening) {
      resetDate(deadline)
      continue
    }

    if (deadline.getHours() < morning) {
      resetDate(deadline, 0)
    }

    if (durationToWork < todayWorkLeft) {
      deadline.setSeconds(deadline.getSeconds() + durationToWork + tempSeconds)

      return deadline
    }

    if (todayWorkLeft > 0) {
      durationToWork = durationToWork - todayWorkLeft
      tempSeconds = deadline.getMinutes() * 60
      resetDate(deadline)
    }
  }
}

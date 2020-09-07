const moment = require('moment')
const { calculateResultDate } = require('../helper/calculateResultDate')
const { calculatePrice } = require('../helper/calculatePrice')
const { chooseCoefficientSpeed } = require('../helper/chooseCoefficientSpeed')

describe('chooseCoefficientSpeed', () => {
  test.each`
    language       | result
    ${'ru'}        | ${{ coefficient: 0.05, speed: 1333, minCost: 50 }}
    ${'ukr'}       | ${{ coefficient: 0.05, speed: 1333, minCost: 50 }}
    ${'en'}        | ${{ coefficient: 0.12, speed: 333, minCost: 120 }}
    ${'some text'} | ${{}}
    ${undefined}   | ${{}}
  `('chooseCoefficientSpeed__table', ({ language, result }) => {
    expect(chooseCoefficientSpeed(language)).toMatchObject(result)
  })
})

describe('calculatePrice', () => {
  test.each`
    length   | language | object                                             | result
    ${1000}  | ${'ru'}  | ${{ coefficient: 0.05, speed: 1333, minCost: 50 }} | ${'50.00'}
    ${1000}  | ${'ukr'} | ${{ coefficient: 0.05, speed: 1333, minCost: 50 }} | ${'50.00'}
    ${1000}  | ${'en'}  | ${{ coefficient: 0.12, speed: 333, minCost: 120 }} | ${'120.00'}
    ${10000} | ${'en'}  | ${{ coefficient: 0.12, speed: 333, minCost: 120 }} | ${'1200.00'}
  `('calculatePrice__table', ({ length, language, object, result }) => {
    expect(calculatePrice(length, object)).toBe(result)
  })
})

describe('calculateResultDate', () => {
  test.each`
    startTime                        | durationHours | expectedResult
    ${'21/09/2020, 11:00 Monday'}    | ${1}          | ${'21/09/2020, 12:00 Monday'}
    ${'21/09/2020, 18:00 Monday'}    | ${2}          | ${'22/09/2020, 11:00 Tuesday'}
    ${'21/09/2020, 18:20 Monday'}    | ${2}          | ${'22/09/2020, 11:20 Tuesday'}
    ${'25/09/2020, 18:00 Friday'}    | ${4}          | ${'28/09/2020, 13:00 Monday'}
    ${'25/09/2020, 18:20 Friday'}    | ${4}          | ${'28/09/2020, 13:20 Monday'}
    ${'25/09/2020, 18:45 Friday'}    | ${4}          | ${'28/09/2020, 13:45 Monday'}
    ${'21/09/2020, 08:00 Monday'}    | ${4}          | ${'21/09/2020, 14:00 Monday'}
    ${'21/09/2020, 18:00 Monday'}    | ${8}          | ${'22/09/2020, 17:00 Tuesday'}
    ${'26/09/2020, 15:00 Saturday'}  | ${8}          | ${'28/09/2020, 18:00 Monday'}
    ${'26/09/2020, 20:00 Saturday'}  | ${8}          | ${'28/09/2020, 18:00 Monday'}
    ${'27/09/2020, 15:00 Sunday'}    | ${8}          | ${'28/09/2020, 18:00 Monday'}
    ${'30/09/2020, 15:00 Wednesday'} | ${8}          | ${'01/10/2020, 14:00 Thursday'}
    ${'21/09/2020, 12:00 Monday'}    | ${24}         | ${'23/09/2020, 18:00 Wednesday'}
  `('calculateResultDate__table', ({ startTime, durationHours, expectedResult }) => {
    const startDate = new Date(moment(startTime, 'DD/MM/YYYY HH:mm dddd').valueOf())
    const durationSec = 60 * 60 * durationHours
    const expectedResult__ = new Date(moment(expectedResult, 'DD/MM/YYYY HH:mm dddd').valueOf())
    expect(calculateResultDate(durationSec, startDate)).toEqual(expectedResult__)
  })
})

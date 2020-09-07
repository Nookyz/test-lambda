const moment = require('moment')

function formatDate(date) {
  return moment(date).format('DD.MM.YYYY HH:mm')
}

module.exports = { formatDate }

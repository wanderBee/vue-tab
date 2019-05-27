const chalk = require('chalk')

function error (msg) {
  console.log(chalk.red(msg))
}

module.exports = {
  error
}

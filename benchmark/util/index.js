const fs = require('fs')
const { strip } = require('ansicolor')
function checkPathAndMkdir (p) {
  if (!fs.existsSync(p)) {
    fs.mkdirSync(p)
    return true
  }
  return false
}

function wait (ts = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ts)
  })
}

function stripAnsi (str) {
  return strip(str)
}

module.exports = {
  checkPathAndMkdir,
  wait,
  stripAnsi
}

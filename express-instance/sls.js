const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send({
    data: Array(100)
      .fill(0)
      .map((x) => Date.now())
  })
})

module.exports = app


'use strict'

const { Router } = require('express')

const route = Router()

route.get('/', (req, res) => {
  res.send('<h1>Welcome!</h1><h3>Thanks for using Node Project Structure.</h3>')
})

module.exports = route

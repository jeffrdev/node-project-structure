'use strict'

const { Router } = require('express')

const route = Router()

route.get('/', (req, res) => {
  res.json({
    message: 'Welcome! Thanks for using Node Project Structure.'
  })
})

module.exports = route

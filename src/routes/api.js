'use strict'

const { Router: route } = require('express')

route.get('/', (req, res) => {
  res.json({
    message: 'Welcome!'
  })
})

module.exports = route

'use strict'

const { Router: route } = require('express')

route.get('/', (req, res) => {
  res.send('Welcome!')
})

module.exports = route

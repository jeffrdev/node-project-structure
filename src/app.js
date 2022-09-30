'use strict'

require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const routes = require('./routes/index')
const app = express()

app.set('host', process.env.NODE_HOST || '127.0.0.1')
app.set('port', process.env.NODE_PORT || 4000)
app.set('env', process.env.NODE_ENV || 'development')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

if(app.get('env') === 'development') app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(routes)

module.exports = app

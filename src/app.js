'use strict'

require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const path = require('path')

const webRoutes = require('./routes/web/web')
const apiRoutes = require('./routes/api/api')

const app = express()

/* SETTINGS */

app.set('host', process.env.NODE_HOST || '127.0.0.1')
app.set('port', process.env.NODE_PORT || 3000)
app.set('env', process.env.NODE_ENV || 'development')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

/* MIDDLEWARE */

if (app.get('env') === 'development') app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

/* ROUTES */

// WEB Routes
app.use(webRoutes)

// API Routes
app.use('/api', apiRoutes)

module.exports = app

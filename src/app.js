'use strict'

// Load Environment Variables
require('dotenv').config()

// Dependencies or Packages
const fastify = require('fastify')
const staticFiles = require('@fastify/static')
const path = require('path')
const cors = require('@fastify/cors')

// Routes
const webRoutes = require('./routes/web/web')
const apiRoutes = require('./routes/api/api')

// Initialize App
const app = fastify({ logger: true })

/* SETTINGS */

// Host
app.decorate('host', process.env.NODE_HOST)

// Port
app.decorate('port', process.env.NODE_PORT)

// Environment
app.decorate('env', process.env.NODE_ENV)

/* PLUGINS */

// Static Files
app.register(staticFiles, {
  root: path.join(__dirname, 'public'),
  prefix: '/'
})

// CORS
app.register(cors)

/* ROUTES */

// WEB Routes
app.register(webRoutes)

// API Routes
app.register(apiRoutes, { prefix: '/api' })

module.exports = app

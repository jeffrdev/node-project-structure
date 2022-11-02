// Load Environment Variables
import 'dotenv/config'

// Dependencies or Packages
import fastify from 'fastify'
import staticFiles from '@fastify/static'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from '@fastify/cors'

// Routes
import webRoutes from './routes/web/web.js'
import apiRoutes from './routes/api/api.js'

// Initialize App
const app = fastify({ logger: true })

// Dirname URL
const __dirname = path.dirname(fileURLToPath(import.meta.url))

/* SETTINGS */

// Host
app.decorate('host', process.env.NODE_HOST || '127.0.0.1')

// Port
app.decorate('port', process.env.NODE_PORT || 3000)

// Environment
app.decorate('env', process.env.NODE_ENV || 'development')

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

export default app

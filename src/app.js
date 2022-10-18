import 'dotenv/config'

import express from 'express'
import path from 'path'
import morgan from 'morgan'
import { fileURLToPath } from 'url'

import webRoutes from './routes/web/index.js'
import apiRoutes from './routes/api/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
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

export default app

'use strict'

const { Router } = require('express')

const router = Router()

const webRoutes = require('./web')
const apiRoutes = require('./api')

router.use(webRoutes)
router.use('/api', apiRoutes)

module.exports = router

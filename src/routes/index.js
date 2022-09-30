'use strict'

const { Router: router } = require('express')

const webRoutes = require('./web')
const apiRoutes = require('./api')

router.use(webRoutes)
router.use('/api', apiRoutes)

module.exports = router

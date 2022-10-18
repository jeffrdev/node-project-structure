import { Router } from 'express'

import webRoutes from './web.js'

const router = Router()

router.use(webRoutes)

export default router

import { Router } from 'express'

const route = Router()

route.get('/', (req, res) => {
  res.json({
    message: 'Welcome! Thanks for using Node Project Structure.'
  })
})

export default route

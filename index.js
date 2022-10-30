'use strict'

const app = require('./src/app')
const { sequelize } = require('./src/app/Models/index')

app.listen({ port: app.port, host: app.host }, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }

  if (app.env === 'development') {
    console.log(`Online server in ${address}`)

    sequelize
      .authenticate()
      .then(() => console.log('Online database'))
      .catch(err => console.log('Error connecting database', err))
  }
})

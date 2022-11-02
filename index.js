import app from './src/app.js'
import db from './src/app/Models/index.js'

app.listen({ port: app.port, host: app.host }, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }

  if (app.env === 'development') {
    console.log(`Online server in ${address}`)

    db
      .sequelize
      .authenticate()
      .then(() => console.log('Online database'))
      .catch(err => console.log('Error connecting database', err))
  }
})

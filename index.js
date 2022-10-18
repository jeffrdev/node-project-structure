'use strict'

const app = require('./src/app')
const { sequelize } = require('./src/app/Models/index')

app.listen(app.get('port'), app.get('host'), error => {
  if (error) console.log(error)

  if (app.get('env') === 'development') {
    console.log(`Online server in http://${app.get('host')}:${app.get('port')}`)

    sequelize
      .authenticate()
      .then(() => console.log('Online database'))
      .catch(error => console.log('Error connecting database', error))
  }
})

'use strict'

const app = require('./src/app')
const { sequelize } = require('./src/app/Models/index')

app.listen(app.get('port'), app.get('host'), () => {
  if (app.get('env') === 'development') {
    console.log(`Server connected in http://${app.get('host')}:${app.get('port')}`)

    sequelize.authenticate()
      .then(() => console.log('Connected database'))
      .catch(error => console.log('Error connecting database', error))
  }
})

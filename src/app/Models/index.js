import { fileURLToPath } from 'url'
import path from 'path'
import Sequelize from 'sequelize'
import fs from 'fs'

import configs from '../../config/database.js'

const env = process.env.NODE_ENV || 'development'
const config = configs[env]

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const basename = path.basename(__filename)
const db = {}

let sequelize

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(async (file) => {
    let model = await import(`./${file}`)

    model = model.default(sequelize, Sequelize.DataTypes)

    db[model.name] = model
  })

Object
  .keys(db)
  .forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db)
    }
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db

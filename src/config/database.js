'use strict'

require('dotenv').config()

module.exports = {
  development: {
    dialect: process.env.DEV_DB_DIALECT || 'mysql',
    host: process.env.DEV_DB_HOST || '127.0.0.1',
    port: process.env.DEV_DB_PORT || '3306',
    username: process.env.DEV_DB_USERNAME || 'root',
    password: process.env.DEV_DB_PASSWORD || '',
    database: process.env.DEV_DB_DATABASE || 'node',
    define: {
      charset: 'utf8',
      collate: 'utf8mb4_unicode_ci',
      underscored: false,
      timestamps: true
    }
  },
  test: {
    dialect: process.env.TES_DB_DIALECT,
    host: process.env.TES_DB_HOST,
    port: process.env.TES_DB_PORT,
    username: process.env.TES_DB_USERNAME,
    password: process.env.TES_DB_PASSWORD,
    database: process.env.TES_DB_DATABASE,
    define: {
      charset: 'utf8',
      collate: 'utf8mb4_unicode_ci',
      underscored: false,
      timestamps: true
    }
  },
  production: {
    dialect: process.env.PRO_DB_DIALECT,
    host: process.env.PRO_DB_HOST,
    port: process.env.PRO_DB_PORT,
    username: process.env.PRO_DB_USERNAME,
    password: process.env.PRO_DB_PASSWORD,
    database: process.env.PRO_DB_DATABASE,
    define: {
      charset: 'utf8',
      collate: 'utf8mb4_unicode_ci',
      underscored: false,
      timestamps: true
    },
    logging: false
  }
}

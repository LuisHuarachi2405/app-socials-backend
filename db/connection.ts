const { Sequelize } = require('sequelize');
import dotenv from 'dotenv'

dotenv.config()

const database: string = process.env.DATABASE || ''
const username: string = process.env.USERNAME || ''
const password: string = process.env.PASSWORD || ''
const host: string = process.env.HOST || ''
const dialect: string = process.env.DIALECT || ''

const db = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  dialectOptions: {
    ssl: { rejectUnauthorized: false }
  }
})

export default db
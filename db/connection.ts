const { Sequelize } = require('sequelize');

const database: string = process.env.DATABASE || ''
const username: string = process.env.USERNAME || ''
const password: string = process.env.PASSWORD || ''
const host: string = process.env.HOST || ''

const db = new Sequelize('app-social','root','', {
  host: 'localhost',
  dialect: 'mysql',
})

export default db
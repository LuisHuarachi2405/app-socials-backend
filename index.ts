import dotenv from 'dotenv'
import Server from './models/server'

dotenv.config()
const database: string = process.env.DATABASE || ''

console.log(database);


const server = new Server

server.listen()
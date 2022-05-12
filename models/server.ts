import express, { Application } from 'express'
import db from '../db/connection';

class Server {

  private app: Application;
  private port: string;

  constructor() {
    this.app = express()
    this.port = process.env.port || '1500'

    this.dbConnection()
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  listen() {
    this.app.listen( this.port, () => {
      console.log('Servidor corriendo en puerto ' + this.port);
    })
  }
}

export default Server
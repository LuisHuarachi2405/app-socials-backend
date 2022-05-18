import express, { Application } from 'express'
import db from '../db/connection';
import User from './user.model';
import cors from 'cors';
import userRoutes from '../routes/users.router';

class Server {

  private app: Application;
  private port: string;
  private apiPaths = {
    users: '/api/users'
}

  constructor() {
    this.app = express()
    this.port = process.env.port || '1500'
    this.dbConnection()
    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.use( this.apiPaths.users, userRoutes )
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
}

  async dbConnection() {
    try {
      await db.authenticate();
      await User.sync({ force: true });
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
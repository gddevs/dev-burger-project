import express from 'express';
import { resolve } from 'node:path';
import cors from 'cors';

import routes from './routes';

import './database';



class App {
  constructor() {
    this.app = express();
    
    this.app.use(cors());
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    // eslint-disable-next-line no-undef
    this.app.use('/product-file',express.static(resolve(__dirname,'..','uploads')))
    // eslint-disable-next-line no-undef
    this.app.use('/category-file',express.static(resolve(__dirname,'..','uploads')))
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;


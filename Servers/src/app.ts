import express from'express';
import routes from './routes/index';
import './db.js';

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');


const server = express();

server.use(express.json());

server.use('/api', routes);


//-------------------cors config--------------------//

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//


server.use((err:any, _req:any, res:any, _next:any) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send({message});
});

export default server;
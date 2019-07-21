import express from 'express';
import { ApiRouter } from './routes/api.routes';
import './config/passport.setup';
import mongoose from 'mongoose';
import keys from './config/keys';
import passport from 'passport';
import cors from 'cors';
import logger from 'morgan';
import bodyParser from 'body-parser';

const app: express.Application = express();

const corsOption: cors.CorsOptions = {
  origin: true,
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
}
app.use(cors(corsOption));

const port = parseInt(process.env.PORT || '5000');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(logger('dev'));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoose.uri, () => {
  console.log('Connected to mongo database: metrofeed-dev');
});

app.use('/api', ApiRouter);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`)
});
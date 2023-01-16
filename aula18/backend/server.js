import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { routes } from './routes/index.js';
import { initializeDbConnection } from './db.js';

const port = 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

initializeDbConnection().then(() => {
  app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
  });
});

import express from 'express';
import { routes } from './routes/index.js';
import cors from 'cors';

const port = 8080;
const app = express();

app.use(express.json());
app.use(cors());

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});

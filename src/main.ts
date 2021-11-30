import * as express from 'express';
import * as cors from 'cors';
// import * as session from 'express-session';
import {} from './middlewares';
import {} from './libs';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(3000, () => {
  console.log(`Server is running on port: ${3000}`);
});

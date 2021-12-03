import express from 'express';
import cors from 'cors';
import { config, configurePassport, configureSession, connectDb } from './config';
import {} from './middlewares';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDb();

configureSession(app);
configurePassport(app);

app.listen(config.port, () => {
  console.log(`Server is running on port: ${config.port}`);
});

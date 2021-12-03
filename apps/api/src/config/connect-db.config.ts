import mongoose from 'mongoose';
import { config } from '../config';

export function connectDb(): void {
  mongoose
    .connect(config.mongoDbUri)
    .then(() => {
      console.log('Connected to db');
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
}

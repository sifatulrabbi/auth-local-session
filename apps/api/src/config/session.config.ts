import { Express } from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import { config } from '../config';

export function configureSession(app: Express): void {
  const store = MongoStore.create({
    collectionName: 'passport-sessions',
    mongoUrl: config.mongoDbUri,
  });
  app.use(
    session({
      secret: config.sessionSecret,
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 60 * 60 * 24 },
      store,
    }),
  );
}

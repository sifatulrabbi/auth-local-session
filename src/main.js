const express = require('express');
const cors = require('cors');
const config = require('./config');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const { localStrategy } = require('./libs');
const { authService } = require('./services');
const router = require('./routers');
const { errorHandler } = require('./middlewares');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

config.connectDb(config.mongoUri);

app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 24, secure: false },
    store: MongoStore.create({
      mongoUrl: config.mongoUri,
      dbName: 'users-sessions',
    }),
  })
);

passport.use(localStrategy);
passport.serializeUser(authService.serializer);
passport.deserializeUser(authService.deserializer);

app.use(passport.initialize());
app.use(passport.session());

app.use(router);

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server is running on port: ${config.port}`);
});

const express = require('express');
const cors = require('cors');
const config = require('./config');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const { localStrategy, serializer, deserializer } = require('./libs');
const router = require('./routers');

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
passport.serializeUser(serializer);
passport.deserializeUser(deserializer);

app.use(passport.initialize());
app.use(passport.session());

app.use(router);

app.listen(config.port, () => {
  console.log(`Server is running on port: ${config.port}`);
});

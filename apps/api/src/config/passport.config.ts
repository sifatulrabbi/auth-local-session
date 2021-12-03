import { Express } from 'express';
import passport from 'passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../services';

const authService = AuthService.getService();

export function configurePassport(app: Express): void {
  passport.use(
    new Strategy({ usernameField: 'email', passwordField: 'password' }, authService.validateUser),
  );

  passport.serializeUser<string>(authService.serializer);

  passport.deserializeUser<string>(authService.deserializer);

  app.use(passport.initialize());
  app.use(passport.session());
}

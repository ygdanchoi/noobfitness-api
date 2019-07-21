import passport from 'passport';
import { Strategy as GoogleTokenStrategy } from 'passport-google-token';
import keys from './keys';
import * as users from '../controllers/users.controller';

passport.serializeUser<any, any>((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser<any, any>((id, done) => {
  return users.deserializeUser(id, done);
})

passport.use(new GoogleTokenStrategy(
  { clientID: keys.google.clientID, clientSecret: keys.google.clientSecret },
  users.findOrCreateByGoogleId
));
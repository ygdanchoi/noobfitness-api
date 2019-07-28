import { RequestHandler } from 'express';
import passport from 'passport';
import expressJwt from 'express-jwt';
import keys from '../config/keys';
import jwt from 'jsonwebtoken';

export const checkGoogleToken: RequestHandler = passport.authenticate(
  'google-token',
  { session: false, scope: ['profile'] }
);
 
export const createJwt: RequestHandler = (req, res, next) => {
  if (!req.user) {
    return res.send(401);
  }

  console.log(req.user);

  const token = jwt.sign(
    { _id: req.user.id },
    keys.session.secret,
    { expiresIn: 60 * 120 }
  );

  res.setHeader('x-auth-token', token);
  return res.status(200).send(req.user);
};

export const checkJwt: RequestHandler = expressJwt({
  secret: keys.session.secret,
  getToken: req => req.headers['x-auth-token']
});

export const logRequest: RequestHandler = (req, res, next) => {
  console.log(req);
  next();
}
import { Request, RequestHandler } from 'express';
import { User, IUser }  from '../models/user.model';

const parseGoogleProfile = (profile: any) => {
  return {
    googleId: profile.id,
    username: profile.displayName,
    avatar: profile._json.picture,
    placeIds: []
  };
};

const parseRequest = (req: Request) => {
  return {
    username: req.body.username,
    googleId: req.body.googleId,
    avatar: req.body.avatar,
    placeIds: req.body.placeIds
  };
};

export const findById: RequestHandler = (req, res) => {
  console.log(req.params);
  User.findById(req.params.userId)
    .then(data => res.send(data))
    .catch(err => res.send(err));
};

export const update: RequestHandler = (req, res) => {
  User.findByIdAndUpdate(req.params.userId, parseRequest(req), { new: true })
    .then(user => res.send(user))
    .catch(err => res.send(err));
};

export const findOrCreateByGoogleId = (accessToken: string, refreshToken: string, profile: any, done: Function) => {
  return User.findOne({ googleId: profile.id })
    .then(currentUser => {
      if (currentUser) {
        return done(null, currentUser);
      } else {
        return User.create(parseGoogleProfile(profile))
          .then(newUser => done(null, newUser))
          .catch(err => done(err));
      }
    })
    .catch(err => done(err));
};

export const deserializeUser = (id: string, done: Function) => {
  return User.findById(id)
    .then(user => done(null, user))
    .catch(err => done(err));
};
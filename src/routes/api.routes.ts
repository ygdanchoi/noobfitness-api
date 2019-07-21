import { Router } from 'express';
import * as auth from '../controllers/auth.controller';
import * as users from '../controllers/users.controller';
import * as exercises from '../controllers/exercises.controller';

const router = Router();

// auth
router.post(  '/auth/google',           auth.checkGoogleToken, auth.createJwt);

// users
router.get(   '/users/:userId',         auth.checkJwt, users.findById);

// exercises
router.post(  'exercises',              auth.checkJwt, exercises.create);
router.get(   'exercises/:exerciseId',  auth.checkJwt, exercises.findById);
router.put(   'exercises/:exerciseId',  auth.checkJwt, exercises.findByIdAndUpdate);
router.delete('exercises/:exerciseId',  auth.checkJwt, exercises.findByIdAndRemove);

export const ApiRouter = router;
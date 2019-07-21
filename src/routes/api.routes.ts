import { Router } from 'express';
import * as auth from '../controllers/auth.controller';
import * as users from '../controllers/users.controller';
import * as exercises from '../controllers/exercises.controller';
import * as workouts from '../controllers/workouts.controller';
import * as routines from '../controllers/routines.controller';

const router = Router();

// auth
router.post(  '/auth/google',            auth.checkGoogleToken, auth.createJwt);

// users
router.get(   '/users/:userId',          auth.checkJwt, users.findById);
router.put(   '/users/:userId',          auth.checkJwt, users.findByIdAndUpdate);

// exercises
router.post(  '/exercises',              auth.checkJwt, exercises.create);
router.get(   '/exercises',              auth.checkJwt, exercises.find);
router.get(   '/exercises/:exerciseId',  auth.checkJwt, exercises.findById);
router.put(   '/exercises/:exerciseId',  auth.checkJwt, exercises.findByIdAndUpdate);
router.delete('/exercises/:exerciseId',  auth.checkJwt, exercises.findByIdAndRemove);

// workouts
router.post(  '/workouts',               auth.checkJwt, workouts.create);
router.get(   '/workouts',               auth.checkJwt, workouts.find);
router.get(   '/workouts/:workoutId',    auth.checkJwt, workouts.findById);
router.put(   '/workouts/:workoutId',    auth.checkJwt, workouts.findByIdAndUpdate);
router.delete('/workouts/:workoutId',    auth.checkJwt, workouts.findByIdAndRemove);

// routines
router.post(  '/routines',               auth.checkJwt, routines.create);
router.get(   '/routines',               auth.checkJwt, routines.find);
router.get(   '/routines/:routineId',    auth.checkJwt, routines.findById);
router.put(   '/routines/:routineId',    auth.checkJwt, routines.findByIdAndUpdate);
router.delete('/routines/:routineId',    auth.checkJwt, routines.findByIdAndRemove);

export const ApiRouter = router;
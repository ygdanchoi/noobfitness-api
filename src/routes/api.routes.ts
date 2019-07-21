import { Router } from 'express';
import * as auth from '../controllers/auth.controller';
import * as users from '../controllers/users.controller';

const router = Router();

// auth
router.post(  '/auth/google',     auth.checkGoogleToken, auth.createJwt);

// users
router.get(   '/users/:userId',   auth.checkJwt, users.findById);

export const ApiRouter = router;
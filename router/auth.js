import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import signOut from "../controllers/auth/signOut.js";
import passport from "../middlewares/passport.js";
import passportGoogle from "../middlewares/passportGoogle.js";
import accountNoExists  from "../middlewares/accountNoExists.js";
import generateToken  from "../middlewares/generateToken.js";
import isValidatedPassword from "../middlewares/isValidatedPassword.js";
import googleCallback from "../controllers/auth/googleCallback.js";
import validator from "../middlewares/validator.js";
import userSchema from "../schemas/userSchema.js"
import accountExists from "../middlewares/accountExist.js";
import createHash from "../middlewares/createHash.js";
import SignUp from "../controllers/auth/signUp.js";


const routerAuth = Router();
routerAuth.post('/signIn', accountNoExists, isValidatedPassword, generateToken, signIn);
routerAuth.post('/signOut', passport.authenticate('jwt', { session: false }), signOut);
routerAuth.post('/signUp',validator(userSchema),accountExists,createHash, generateToken, SignUp)

routerAuth.get('/signin/google', passportGoogle.authenticate('google', { session: false, scope: ['profile', 'email'] }));

routerAuth.get("/signin/google/callback", passportGoogle.authenticate("google", {session: false, failureRedirect: process.env.FRONTEND_URL
            ? `${process.env.FRONTEND_URL}/signin`
            : "http://localhost:5173/signin",
    }),
    generateToken,
    googleCallback
);;

export default routerAuth;

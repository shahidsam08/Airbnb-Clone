import express from 'express'



const router = express.Router()

/*  -----------------sign up logic -----------------------*/
router.post("/signup", signupValidation, signup)


/*  ----------------- login logic -----------------------*/
router.post("/login",loginvalidation, login);


/*  ----------------- Dashboard logic -----------------------*/
router.post("/dashboard", isVerified, dashboard)
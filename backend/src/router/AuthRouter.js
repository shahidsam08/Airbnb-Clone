import express from "express";
import User from "../model/User.model.js";
import { LoginController, SignupController } from "../controller/Authcontroller.js";
import verifyToken  from "../middleware/VerifyToken.js"

const router = express.Router();


router.post("/signup", SignupController)

router.post("/login", LoginController) 

export default router;

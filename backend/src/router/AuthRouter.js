import express from "express";
import { LoginController, SignupController } from "../controller/Authcontroller.js";
import VerifyToken from "../middleware/VerifyToken.js"
import { NavbarAuth } from "../controller/Authcontroller.js";

const router = express.Router();


router.post("/signup", SignupController)

router.post("/login", LoginController) 


router.get("/navbar", VerifyToken, NavbarAuth)

export default router;

import express from "express";
import User from "../model/User.model.js";
import { LoginController } from "../controller/Authcontroller.js";

const router = express.Router();


router.post("/login", LoginController)

export default router;

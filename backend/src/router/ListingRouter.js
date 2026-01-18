import express from "express"
import { Createlisting } from "../controller/ListingController.js";


const router = express.Router();

router.post("/listing", Createlisting)

export default router;
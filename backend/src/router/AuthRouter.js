import express from "express";
import User from "../model/User.model.js";

const router = express.Router();

router.get("/user", (req, res) => {
  res.json({ user: "shahid ali", age: 24 });
});

router.post("/login", async (req, res) => {
  try {
    const { phone, name } = req.body;
    const user = await User.findOne({ name: name });
    if (user) {
      return res
        .status(200)
        .json({ message: "already registered", success: false });
    } else {
      User.create({
        name: name,
        phone: phone,
      });
      res.status(200).json({ message: "successfully created!", success: true });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/againlogin", async (req, res) => {
  try {
    const { phone, name } = req.body;
    const check = await User.findOne({ name: name });
    if (check) {
      const phonecheck = await User.findOne({phone: phone})
      if(phonecheck) {
        res.json({message : "valid user"})
      } else{
        res.json({message : "Invalid user"})
      }
    } else {
      res.json({ message: "create a new account" });
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;

import express from "express";
import User from "../model/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const SignupController = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      res.json({ message: "Already Registered!" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      await User.create({
        email: email,
        password: hashedPassword,
        username: username,
      });
      res.status(200).json({ message: "New User Created!" });
    }
  } catch (error) {
    console.log(error);
  }
};

// login controller( generate the json web token and send to the frontend.)
export const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "Email not found" });
    }
    const isMatchPassword = await bcrypt.compare(password, user.password);
    if (!isMatchPassword) {
      return res.status(404).json({ message: "password is incorrect" });
    } else {
      const token = jwt.sign(
        { _id: user._id, email: user.email },
        process.env.SECRET_KEY,
        { expiresIn: "1d" }
      );

      return res.status(200).json({ message: "Login Successfully", token });
    }
  } catch (error) {
    console.log(error);
  }
};

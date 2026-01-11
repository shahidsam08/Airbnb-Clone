import express from "express";
import User from "../model/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// sign up controller
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
      return res.status(401).json({ message: "Invalid email" });
    }
    const isMatchPassword = await bcrypt.compare(password, user.password);
    if (!isMatchPassword) {
      return res.status(401).json({ message: "Invalid password" });
    } else {
      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.SECRET_KEY,
        { expiresIn: "1d" }
      );

      res.cookie("token", token);

      return res
        .status(200)
        .json({ message: "Login Successfully", token: token });
    }
  } catch (error) {
    console.log(error);
  }
};

// -------- Navbar authentication
export const NavbarAuth = async (req, res) => {
  const token = req.cookies
  try {
    const user = await User.findOne({email : req.user.emai})
    console.log(user)
    console.log(token)
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

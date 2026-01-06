import express from "express"
import User from "../model/User.model.js";


export const LoginController = async (req, res) => {
  try {
    const {email , username, password } = req.body;
    const user = await User.findOne({email: email});
    if(user) {
      res.json({message : "Already Registered!"})
    } else {
      await User.create({
        email : email,
        password: password,
        username: username
      })
      res.status(200).json({message : "New User Created!"})
    }
  } catch (error) {
    console.log(error)
  }
  
}
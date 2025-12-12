import express from "express";

const app = express();

app.get("/" , (req, res) => {
  console.log(req.header)
  res.json({message : "Initial setup chek"})
})

app.get("/helpcenter", (req, res) => {
  res.json({message : "Help center page response"})
})

app.listen(3000, () => {
  console.log("http://localhost:3000");
})
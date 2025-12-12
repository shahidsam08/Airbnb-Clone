import express from "express";

const app = express();

const port = process.env.PORT || 8080;

app.get("/" , (req, res) => {
  console.log(req.header)
  res.json({message : "Initial setup chek"})
})

app.get("/helpcenter", (req, res) => {
  res.json({message : "Help center page response"})
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})
import express from "express"
import dbconnection from "./src/database/dbConnection.js";


const app = express();

// connnect to the database.
dbconnection();


app.get("/", (req, res)=> {
  res.json("this is the data where database run")
})


app.listen(3000, () => {
  console.log(`http://localhost:${3000}`)
})
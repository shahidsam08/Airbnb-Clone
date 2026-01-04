import express from "express"
import dbconnection from "./src/database/dbConnection.js";
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import Authrouter from "./src/router/AuthRouter.js";

const app = express();

dotenv.config();
app.use(cors({origin: process.env.CLIENT_CONNECTION, credentials: true}));
app.use(express.json())
app.use(helmet())

// connnect to the database.
dbconnection();


app.get("/", (req, res)=> {
  res.json("this is the data where database run")
})



app.use("/api", Authrouter)
// http://localhost:PORT/api/user


app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`)
})
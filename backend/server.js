import express from "express";
import dbconnection from "./src/database/dbConnection.js";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import Authrouter from "./src/router/AuthRouter.js";
import cookieParser from "cookie-parser";



dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://airbnb-clone-wine-ten.vercel.app",
    ], // deployed frontend // React app
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
// ------ Fixes preflight errors
// app.options("/*", cors()); 

app.use(helmet({crossOriginResourcePolicy : false}));

// connnect to the database.
dbconnection();



app.use("/api", Authrouter);
// http://localhost:PORT/api/user


app.use((req, res) => {
  res.json({message : "Route not found!"});
});

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});

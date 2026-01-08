import express from "express";
import dbconnection from "./src/database/dbConnection.js";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import Authrouter from "./src/router/AuthRouter.js";

const app = express();

dotenv.config();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://airbnb-clone-wine-ten.vercel.app",
    ], // deployed frontend // React app
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(helmet());

// connnect to the database.
dbconnection();

app.get("/", (req, res) => {
  res.json("Home backend method for testing.");
});

app.use("/api", Authrouter);
// http://localhost:PORT/api/user

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});

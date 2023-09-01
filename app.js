import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

config({
    path: "./data/config.env"
})

export const app = express();

// using MiddleWare

app.use(express.json());
app.use(cookieParser());

//Using Routes
app.use("/api/v1/users" , userRouter);
app.use("/api/v1/task" , taskRouter);

app.get("/" , (req , res) => {
    res.send("Home Page");
})


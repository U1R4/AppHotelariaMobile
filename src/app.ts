import express from "express";
import { Request, Response, NextFunction } from "express";
import taskRouter from "./routes/task";

const app = express();
app.use(express.json());

app.use("/task", taskRouter);

export default app;

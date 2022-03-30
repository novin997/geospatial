import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import locationRouter from "./Routers/locationRouter";

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const db = await mongoose.connect(process.env.MONGO_DB_URL ?? "");

const PORT = process.env.PORT || 800;

const app: Application = express();

app.get("/", (req, res): void => {
  res.send("Hello Typescript with Node.js!")
});

app.get("/", (req, res): void => {
  res.send("Hello Typescript with Node.js!")
});

app.listen(PORT, (): void => {
  console.log(`Server Running here 👉 https://localhost:${PORT}`);
});

app.use("/location", locationRouter);

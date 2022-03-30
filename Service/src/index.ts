import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import locationSchema from "./Model/locationSchema";

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

const temp = {
  "type": "Polygon",
  "coordinates": [
    [
      [
        103.89770507812499,
        1.2808305026090836
      ],
      [
        103.89427185058594,
        1.2087497436491068
      ],
      [
        103.97289276123047,
        1.2008550660203365
      ],
      [
        103.96602630615234,
        1.2839196334992269
      ],
      [
        103.89770507812499,
        1.2808305026090836
      ]
    ]
  ]
}

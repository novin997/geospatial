import locationSchema from "../Model/locationSchema";
import { Router } from "express";
import mongoose from "mongoose";
import { changiPolygon, marineParadePolygon } from "../Location/data";

const locationRouter = Router();
const Location = mongoose.model("Location", locationSchema);


locationRouter.get("/", (req, res) => {
  res.send("Get All Location Codes");
})

locationRouter.get("/init", async (req, res) => {
  await Location.deleteMany({});
  await Location.insertMany(
    [
      {
        name: "Marine Parade",
        location: marineParadePolygon
      },
      {
        name: "Changi",
        location: changiPolygon
      }
    ]
  );
  res.send("Init Location Data");
});

// const Location = db.model('Location', locationSchema);

export default locationRouter;
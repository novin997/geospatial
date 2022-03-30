import mongoose from "mongoose";
import polygonSchema from "./polygonSchema";

const locationSchema = new mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  location: polygonSchema
});

export default locationSchema;
import mongoose, { Schema } from "mongoose";

const LocationSchema = new mongoose.Schema({
    region: String,
    city: String,
    district: String,
})

export default mongoose.model("Location", LocationSchema);
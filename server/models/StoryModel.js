import mongoose, { Schema } from "mongoose";

const StorySchema = new mongoose.Schema({
  title: {type: String, required: true},
  cover: {type: String, required: true},
  slides: {type: Array, required: true},
})

export default mongoose.model("Story", StorySchema);
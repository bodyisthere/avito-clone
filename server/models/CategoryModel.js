import mongoose, { Schema } from "mongoose";

const CategorySchema = new mongoose.Schema({
   category: {type: String, required: true},
   chapter: {type: Array}
})

export default mongoose.model("Category", CategorySchema);
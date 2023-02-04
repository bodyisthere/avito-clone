import mongoose, { Schema } from "mongoose";

const AutoBrandSchema = new mongoose.Schema({
    brand: {type: String}
})

export default mongoose.model("autoBrands", AutoBrandSchema);
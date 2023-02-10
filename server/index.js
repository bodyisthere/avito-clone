import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import multer from "multer";
import { v4 as uuidv4 } from 'uuid';

import { errorMiddleware } from "./middlewares/errorMiddleware.js";

import { userRoutes } from './router/index.js'
import { categoriesRoutes } from './router/categoriesRoutes.js'
import { locationRoutes } from './router/locationRoutes.js'
import { autoBrandRoutes } from "./router/autoBrandRoutes.js";

dotenv.config();
const app = express();
mongoose.set('strictQuery', true);

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(userRoutes);
app.use(categoriesRoutes);
app.use(locationRoutes);
app.use(autoBrandRoutes);
app.use(errorMiddleware);
app.use("/uploads", express.static("uploads"));


const PORT = process.env.PORT || 5000;

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './uploads');
    },
    filename: function(req, file, callback) {
        const fileType = file.mimetype.split('/')[1];
        callback(null, `${uuidv4()}.${fileType}`);
    }
})

const uploads = multer({ storage });

app.post("/uploads", uploads.array("files"), (req, res) => {
    res.json({
        data: req.files
    })
})

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))  
        mongoose
        .connect(process.env.DB_URL)
        .then(() => console.log('DB connected'))
        .catch((err) => console.log("DB error: ", err));
    } catch (err) {
        console.log(err)
    }
}

start()
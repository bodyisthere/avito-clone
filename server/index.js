import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

import { errorMiddleware } from "./middlewares/errorMiddleware.js";

import { userRoutes, categoriesRoutes, locationRoutes, autoBrandRoutes, storyRoutes, uploadRoutes} from './router/index.js'
import { adsRouter } from "./router/adsRouter.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
mongoose.set('strictQuery', true);

//подключение пакетов
app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true,origin: process.env.CLIENT_URL}));

//подключение роутов
app.use(userRoutes); //взаимодействие с пользователем
app.use(categoriesRoutes); //взаимодействие с категориями
app.use(locationRoutes); //взаимодействие с локацией
app.use(autoBrandRoutes); //взаимодействие с брендами машин
app.use(storyRoutes); //взаимодействие с историями - авито
app.use(uploadRoutes); //взаимодействие с загрузкой файлов
app.use(adsRouter); //взаимодействие с объявлениями

//обработка ошибок
app.use(errorMiddleware);


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
start();
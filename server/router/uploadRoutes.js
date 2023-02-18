import { Router } from 'express';
import multer from "multer";
import { v4 as uuidv4 } from 'uuid';
import express from "express";

import UploadController from '../controllers/UploadController.js';
import fileFilter from '../validation/imageValidation.js';
import { errorMiddleware } from '../middlewares/errorMiddleware.js';

export const uploadRoutes = new Router();

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
      callback(null, './uploads');
  },
  filename: function(req, file, callback) {
      const fileType = file.mimetype.split('/')[1];
      callback(null, `${uuidv4()}.${fileType}`);
  },
})

const uploads = multer({ storage, fileFilter });

uploadRoutes.post("/uploads", uploads.array("files"), UploadController.upload)

uploadRoutes.use("/uploads", express.static("uploads"));

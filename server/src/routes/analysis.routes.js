import { Router } from 'express'
import { uploadToCloudinary } from '../utils/cloudinary.js';
import { summary } from '../controllers/summary.controllers.js';
import multer from 'multer';
const upload = multer()

const analysisRouter = Router();

analysisRouter.route("/summary").post(
    upload.single('pdf'),
    uploadToCloudinary,
    summary
)

export default analysisRouter;
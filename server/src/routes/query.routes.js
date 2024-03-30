import { Router } from "express";
import { query } from "../controllers/query.controllers.js";
import multer from 'multer';
const upload2 = multer()

const queryRouter = Router();

queryRouter.route("/query").post(upload2.single(),query);

export default queryRouter;
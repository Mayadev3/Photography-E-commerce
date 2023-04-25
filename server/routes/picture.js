import express from "express";
import { getPictures, getSpecificPicture } from "../controllers/picture.js";

const router = express.Router();

/*READ*/
router.get("/", getPictures);

/*Update*/
router.patch("/:id", getSpecificPicture);

export default router;

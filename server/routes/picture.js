import express from "express";
import {
  getPictures,
  patchUniquePicture,
  getUniquePicture,
  deletePicture,
  addPicture,
} from "../controllers/picture.js";

const router = express.Router();

/*READ*/
router.get("/", getPictures);
router.get("/:id", getUniquePicture);

/*CREATE*/
router.post("/", addPicture);

/*DELETE*/
router.delete("/:id", deletePicture);

/*UPDATE*/
router.patch("/:id", patchUniquePicture);

export default router;

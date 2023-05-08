import express from "express";
import {
  getPictures,
  patchUniquePicture,
  getUniquePicture,
  addPicture,
  addNewPicToCart,
  deletePicture,
} from "../controllers/picture.js";

const router = express.Router();

/*READ*/
router.get("/", getPictures);
router.get("/:id", getUniquePicture);

/*CREATE*/
router.post("/", addPicture);

/*CREATE*/
router.post("/:id", addNewPicToCart);

/*DELETE*/
router.delete("/:id", deletePicture);

/*UPDATE*/
router.patch("/:id", patchUniquePicture);

export default router;

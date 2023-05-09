import express from "express";

import {
  getPicturesLonely,
  patchUniquePictureLonely,
  getUniquePictureLonely,
  addPictureLonely,
  addNewPicToCartLonely,
  deletePictureLonely,
} from "../controllers/lonely.js";

const router = express.Router();

/*READ*/
router.get("/", getPicturesLonely);
router.get("/:id", getUniquePictureLonely);

/*CREATE*/
router.post("/", addPictureLonely);

/*CREATE*/
router.post("/:id", addNewPicToCartLonely);

/*DELETE*/
router.delete("/:id", deletePictureLonely);

/*UPDATE*/
router.patch("/:id", patchUniquePictureLonely);

export default router;

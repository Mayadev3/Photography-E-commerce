import express from "express";
import {
  getCategories,
  getCategoryByName,
  getCategoryPictures,
  addPicToCategory,
  addCategory,
  patchCategory,
  deleteCategory,
  deletePicture,
} from "../controllers/category.js";

const router = express.Router();

/*READ*/
router.get("/", getCategories);
router.get("/:name", getCategoryByName);
router.get("/:name/pictures", getCategoryPictures);

/*CREATE*/
router.post("/", addCategory);
router.post("/:name/pictures/:id", addPicToCategory);

/*UPDATE*/
router.patch("/:id", patchCategory);

/*DELETE*/
router.delete("/:name", deleteCategory);
router.delete("/:name/pictures/:id", deletePicture);

export default router;

import express from "express";
import {
  getCart,
  quantityPictures,
  addNewPicToCart,
} from "../controllers/cart.js";

const router = express.Router();

/*READ*/
router.get("/:id", getCart);

/*CREATE*/
router.post("/:id", addNewPicToCart);

/*update*/
router.patch("/:id/quantity", quantityPictures);

export default router;

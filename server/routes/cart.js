import express from "express";
import { getCart, addItemToCart, emptyCart } from "../controllers/cart.js";

const router = express.Router();

/*READ*/
router.get("/", getCart);

/*CREATE*/
router.post("/", addItemToCart);

/*DELETE*/
router.delete("/empty-cart", emptyCart);

export default router;

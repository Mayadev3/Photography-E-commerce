import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  items: [{ pictureId: String, quantity: Number, price: Number }],
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;

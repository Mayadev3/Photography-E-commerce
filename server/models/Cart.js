import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  pictureId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Picture",
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, "Quantity can not be less then 1."],
  },
  price: {
    type: Number,
    // required: true,
  },
  total: {
    type: Number,
    // required: true,
  },
});
const CartSchema = new mongoose.Schema(
  {
    items: [ItemSchema],
    subTotal: {
      default: 0,
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", CartSchema);
export default Cart;

//line 4 to 6 , we use ref create a foreign key
//this is a way to do the one to many relation... one Cart can have an array of many items which makes items in the cart schema an array of objects

import mongoose from "mongoose";

const LonelySchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    story: {
      type: String,
    },
    imagePath: {
      type: String,
      default: "",
    },
    price: {
      type: String,
      required: [true, "Please Include the product price"],
    },
  },
  { timestamps: true }
);

const Lonely = mongoose.model("Lonely", LonelySchema);
export default Lonely;

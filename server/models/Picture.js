import mongoose from "mongoose";

const PictureSchema = new mongoose.Schema(
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

const Picture = mongoose.model("Picture", PictureSchema);
export default Picture;

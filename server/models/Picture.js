import mongoose from "mongoose";

const PictureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    story: {
      type: String,
    },
    image: {
      type: String,
      default: "",
    },
    price: {
      type: String,
      required: [true, "Please Include the product price"],
    },
    likes: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Picture = mongoose.model("Picture", PictureSchema);
export default Picture;

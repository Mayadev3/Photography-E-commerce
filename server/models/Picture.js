import mongoose from "mongoose";

const PictureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    story: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    likes: {
      type: Map,
      of: Boolean,
    },
    picturePath: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Picture = mongoose.model("Picture", PictureSchema);
export default Picture;

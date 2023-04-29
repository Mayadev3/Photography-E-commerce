import mongoose from "mongoose";

const PictureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    story: {
      type: String,
    },
    picturePath: {
      type: String,
      default: "",
    },
    likes: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Picture = mongoose.model("Picture", PictureSchema);
export default Picture;

import mongoose from "mongoose";

const CategoriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    pictures: [
      {
        type: String,
        ref: "Picture",
      },
    ],
  },
  { timestamps: true }
);

const Categories = mongoose.model("Categories", CategoriesSchema);
export default Categories;

import mongoose from "mongoose";

const CategoriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    pictures: [{ type: mongoose.Schema.Types.ObjectId, ref: "Picture" }],
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", CategoriesSchema);
export default Category;

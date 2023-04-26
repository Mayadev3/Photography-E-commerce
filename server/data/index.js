import mongoose from "mongoose";

const pictureIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const pictures = [
  {
    _id: pictureIds[0],
    title: "Barcelona Sunshine",
    story: "Me",
    description: "taken with phone camera and size to be sold in",
    price: 20,
    path: "p6.jpeg",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
];

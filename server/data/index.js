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
    path: "lady-city.jpeg",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: pictureIds[1],
    title: "Barcelona Biking",
    story: "Bike Away into the the cloud",
    description: "Amazing wall paper",
    price: 24,
    path: "bike-stack.jpeg",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
];

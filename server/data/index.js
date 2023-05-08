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
    title: "Birds in the City",
    story: "Migrations",
    description: "taken with phone camera and size to be sold in",
    price: 20,
    imagePath: "praha-1.jpeg",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: pictureIds[1],
    title: "Vintage Cars overloard",
    story: "Big lights",
    description: "Amazing wall paper",
    price: 24,
    imagePath: "praha-2.jpeg",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: pictureIds[2],
    title: "Man on a bean",
    story: "Educate",
    description: "Amazing wall paper",
    price: 30,
    imagePath: "praha-3.jpeg",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: pictureIds[3],
    title: "Clean and Skate",
    story: "Up",
    description: "Amazing wall paper",
    price: 40,
    imagePath: "praha-4.jpeg",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
];

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
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const pictures = [
  {
    _id: "1P",
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
    _id: "2P",
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
    _id: "3P",
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
    _id: "4P",
    title: "Clean and Skate",
    story: "Up",
    description: "Amazing wall paper",
    price: 40,
    imagePath: "praha-4.jpeg",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: "5P",
    title: "Hidden Time Machine",
    story: "Forward",
    description: "Amazing wall paper",
    price: 40,
    imagePath: "praha-5.jpeg",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: "6P",
    title: "Copy here little one",
    story: "Closer",
    description: "Amazing wall paper",
    price: 35,
    imagePath: "praha-6.jpeg",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: "1L",
    title: "Back to the Future",
    story: "Closer",
    description: "Amazing wall paper",
    price: 40,
    imagePath: "lonely-1.jpeg",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: "2L",
    title: "Paint me a Family",
    story: "Loneliness",
    description: "Amazing wall paper",
    price: 35,
    imagePath: "lonely-2.jpeg",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: "3L",
    title: "Read till my last breath",
    story: "Forever",
    description: "Amazing wall paper",
    price: 35,
    imagePath: "lonely-3.jpeg",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: "4L",
    title: "Nostalgia Gentleman",
    story: "Philosophical",
    description: "Amazing wall paper",
    price: 35,
    imagePath: "lonely-4.jpeg",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: "5L",
    title: "Church bells ring",
    story: "Heavens",
    description: "Amazing wall paper",
    price: 35,
    imagePath: "lonely-5.jpeg",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: "6L",
    title: "Curious Future",
    story: "See",
    description: "Amazing wall paper",
    price: 35,
    imagePath: "lonely-6.jpeg",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
];

const categoryIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const categories = [
  {
    _id: categoryIds[0],
    name: "categoryPraha",
    pictures: ["1P", "2P", "3P", "4P", "5P", "6P"],
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: categoryIds[1],
    name: "categoryLonely",
    pictures: ["1L", "2L", "3L", "4L", "5L", "6L"],
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
];

import Cart from "../models/Cart.js";
import Lonely from "../models/Lonely.js";

export const getPicturesLonely = async (req, res) => {
  try {
    const data = await Lonely.find();
    res.status(201).send(data);
  } catch (err) {
    res.status(404).send({ err: err.message });
  }
};
export const getUniquePictureLonely = async (req, res) => {
  try {
    const { id } = req.params;

    const unique = await Lonely.findById(id);
    res.status(200).send(unique);
  } catch (err) {
    res.status(404).send({ err: err.message });
  }
};

export const patchUniquePictureLonely = async (req, res) => {
  try {
    const { id } = req.params;
    const toPatch = await Lonely.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        story: req.body.story,
        price: req.body.price,
        imagePath: req.body.imagePath,
      },
      { new: true }
    );
    res.status(200).json(toPatch);
  } catch (err) {
    res.status(404).send({ err: err.message });
  }
};

export const addPictureLonely = async (req, res) => {
  try {
    const newLonely = new Lonely();

    newLonely.title = req.body.title;
    newLonely.story = req.body.story;
    newLonely.description = req.body.description;
    newLonely.price = req.body.price;
    newLonely.imagePath = req.body.imagePath;

    await newLonely.save();

    const lonelies = await Lonely.find();

    res.status(201).send(lonelies);
  } catch (err) {
    res.status(409).json({ err: err.message });
  }
};

export const addNewPicToCartLonely = async (req, res) => {
  try {
    const { id } = req.params;
    const uniqueLonely = await Lonely.findById(id);

    const allCart = await Cart.find();

    allCart.items.push(uniqueLonely);
    res.status();
  } catch (err) {
    res.status(409).json({ err: err.message });
  }
};

export const deletePictureLonely = async (req, res) => {
  try {
    const { id } = req.params;

    const toDelete = await Lonely.findByIdAndDelete(id);

    res.status(200).json(`Successfully Deleted`, toDelete);
  } catch (err) {
    res.status(204).json({ err: err.message });
  }
};

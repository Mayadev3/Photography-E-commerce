import Picture from "../models/Picture.js";
import User from "../models/User.js";

/*READ*/

export const getPictures = async (req, res) => {
  try {
    const pictures = await Picture.find();

    res.status(201).json(pictures);
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};

export const getUniquePicture = async (req, res) => {
  try {
    const { id } = req.params;

    const picture = await Picture.findById(id);

    res.status(200).json(picture);
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};

/*UPDATE*/

//only by admin
export const patchUniquePicture = async (req, res) => {
  try {
    const { id } = req.params;

    // const picture = await Picture.findById(id);

    const updatedPicture = await Picture.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        story: req.body.story,
        description: req.body.description,
        price: req.body.price,
        picturePath: req.body.picturePath,
      },
      { new: true }
    );
    res.status(200).json(updatedPicture);
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};

/*DELETE*/
//only by admin
export const deletePicture = async (req, res) => {
  try {
    const { id } = req.params;

    const picture = await Picture.findByIdAndDelete(id);
    res.status(200).json(`Successfully Deleted:`, picture);
  } catch (err) {
    res.status(204).json({ err: err.message });
  }
};

/*CREATE*/

//only by admin

export const addPicture = async (req, res) => {
  try {
    const newPicture = new Picture();

    newPicture.title = req.body.title;
    newPicture.story = req.body.story;
    newPicture.description = req.body.description;
    newPicture.price = req.body.price;
    newPicture.likes = req.body.likes;
    newPicture.picturePath = req.body.picturePath;
    newPicture.comments = req.body.comments;

    await newPicture.save();

    const pictures = await Picture.find();
    res.status(201).json(pictures);
  } catch (err) {
    res.status(409).json({ err: err.message });
  }
};

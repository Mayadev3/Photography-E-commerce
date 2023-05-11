import Picture from "../models/Picture.js";
import Categories from "../models/Categories.js";

/*READ*/

export const getCategories = async (req, res) => {
  try {
    const allCategories = await Categories.find();
    res.status(201).json(allCategories);
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};

export const getCategoryByName = async (req, res) => {
  try {
    const { name } = req.params;
    const category = await Categories.findOne({ name: name });

    if (!category) {
      return res.status(404).json({ err: `Category not found` });
    }

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export const getCategoryPictures = async (req, res) => {
  try {
    const { name } = req.params;
    const category = await Categories.findOne({ name: name }).populate(
      "pictures"
    );
    if (!category) {
      return res.status(404).json({ err: `Category not found` });
    }
    let pictures = category.pictures;
    res.status(200).json(pictures);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

/*CREATE*/
export const addCategory = async (req, res) => {
  try {
    const newCategory = new Categories();

    newCategory.name = req.body.name;
    newCategory.pictures = req.body.pictures;

    await newCategory.save();
    const categories = await Categories.find();

    res.status(201).json(categories);
  } catch (err) {
    res.status(409).json({ err: err.message });
  }
};

//????
export const addPicToCategory = async (req, res) => {
  try {
    const { name, id } = req.params;

    const getPicture = await Picture.findById(id);
    const getCategory = await Categories.findOne({ name: name });

    if (!getPicture || !getCategory) {
      return res.status(404).json({ error: "Picture or category not found" });
    }

    getCategory.pictures.push(getPicture._id); // Push the picture ID

    await getCategory.save();

    res.status(201).json(getCategory);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/*UPDATE*/

export const patchCategory = async (req, res) => {
  try {
    const { name } = req.params;

    const category = await Categories.findOneAndUpdate(
      name,
      { name: req.body.name, pictures: req.body.pictures },
      { new: true }
    );

    res.status(200).json(category);
  } catch (err) {
    res.status(404).json({ error: "Internal Server Error" });
  }
};

/*DELETE*/
export const deleteCategory = async (req, res) => {
  try {
    const { name } = req.params;
    const category = await Categories.findOneAndDelete({ name: name });

    res.status(200).json(`Successfully deleted`, category);
  } catch (err) {
    res.status(205).json({ err: err.message });
  }
};

export const deletePicture = async (req, res) => {
  try {
    const { name, id } = req.params;

    const category = await Categories.findOne({ name: name });

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    const pictureIndex = category.pictures.indexOf(id);
    if (pictureIndex === -1) {
      return res
        .status(404)
        .json({ error: "Picture not found in the category" });
    }

    category.pictures.splice(pictureIndex, 1);

    await category.save();

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

import Cart from "../models/Cart.js";
import Picture from "../models/Picture.js";

//------------------

//all cart logic is here

//here we need to define what we want to populate the cart with since it is a one to many
const cartItems = async () => {
  //this retrieves all the documents from within the cart collection ending up with an array of cart documents
  //The populate method is chained onto the find method call to populate the items field
  //of each cart document with related data from the Picture model.
  const carts = await Cart.find().populate({
    path: "items.pictureId",
    select: "title quantity price total",
  });
  return carts[0];
};

//here we are defining how to add an item to the cart
//a payload is what a client is sending to the backend
//article showing the difference betwee then create method and new Cart and save(): https://masteringjs.io/tutorials/mongoose/create
//this is saying in Cart , create and save the new item
const addItem = async (payload) => {
  const newItem = await Cart.create(payload);
  return newItem;
};

// the above two functions are used in the following exports

export const addItemToCart = async (req, res) => {
  const { pictureId } = req.body;
  const quantity = Number.parseInt(req.body.quantity);
  try {
    let cart = await cartItems();
    const pictureDetails = await Picture.findById(pictureId);
    if (!pictureDetails) {
      return res.status(500).json({
        type: "Not Found",
        msg: "Invalid request",
      });
    }

    //--If Cart Exists ----
    if (cart) {
      //check if index exists
      const indexFound = cart.items.findIndex(
        (item) => item.pictureId.id === pictureId
      );

      //so if the item is in the cart and the user sets the quantity to zero, remove it from the cart
      if (indexFound !== -1 && quantity <= 0) {
        cart.items.splice(indexFound, 1);
        if (cart.items.length == 0) {
          cart.subTotal = 0;
        } else {
          cart.subTotal = cart.items
            .map((item) => item.total)
            .reduce((before, current) => before + current);
        }
      } //check if product exist,just add the previous quantity with the new quantity and update the total price
      //if the product exists then i am setting the general logic of how to change quantity, total, price and subtotal
      else if (indexFound !== -1) {
        cart.items[indexFound].quantity =
          cart.items[indexFound].quantity + quantity;
        cart.items[indexFound].total =
          cart.items[indexFound].quantity * pictureDetails.price;
        cart.items[indexFound].price = pictureDetails.price;
        cart.subTotal = cart.items
          .map((item) => item.total)
          .reduce((before, current) => before + current);
      }
      //Check if Quantity is Greater than 0 then add item to items Array in the database
      else if (quantity > 0) {
        cart.items.push({
          pictureId: pictureId,
          quantity: quantity,
          price: pictureDetails.price,
          total: parseInt(pictureDetails.price * quantity),
        });
        cart.subTotal = cart.items
          .map((item) => item.total)
          .reduce((before, current) => before + current);
      }
      //if price is 0 throw the error
      else {
        return res.status(400).json({
          type: "Invalid",
          msg: "Invalid request",
        });
      }
      let data = await cart.save();
      res.status(200).json({
        type: "success",
        mgs: "Process Successful",
        data: data,
      });
    }
    //if there is no user with a cart...it creates a new cart and then adds the item to the cart that has been created
    else {
      const cartData = {
        items: [
          {
            pictureId: pictureId,
            quantity: quantity,
            total: parseInt(pictureDetails.price * quantity),
            price: pictureDetails.price,
          },
        ],
        subTotal: parseInt(pictureDetails.price * quantity),
      };
      cart = await addItem(cartData);
      let data = await cart.save();
      res.json(data);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      type: "Invalid",
      msg: "Something Went Wrong",
      err: err,
    });
  }
};

export const getCart = async (req, res) => {
  try {
    let cart = await cartItems();
    if (!cart) {
      return res.status(400).json({
        type: "Invalid",
        msg: "Cart Not Found",
      });
    }
    res.status(200).json({
      status: true,
      data: cart,
    });
  } catch (err) {
    res.status(400).json({
      type: "Invalid",
      msg: "Something Went Wrong",
      err: err,
    });
  }
};

export const emptyCart = async (req, res) => {
  try {
    let cart = await cartItems();
    cart.items = [];
    cart.subTotal = 0;
    let data = await cart.save();
    res.status(200).json({
      type: "success",
      mgs: "Cart Has been emptied",
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      type: "Invalid",
      msg: "Something Went Wrong",
      err: err,
    });
  }
};

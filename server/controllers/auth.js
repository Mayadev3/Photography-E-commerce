// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// export const register = async (req, res) => {
//   //in this function we are going step by step
//   //first since it is a post, assign the req.body
//   //second we need to salt and hash the password
//   //third insert all the info the user registered with into the database after hashing the password
//   try {
//     //those are the values the client sends
//     const { firstName, lastName, email, city, address, phoneNumber, zipCode } =
//       req.body;

//     //here i am creating a new user in the User table in the model file..those are the columns of the table and the whole process in the backend
//     const newUser = new User({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       city: req.body.city,
//       address: req.body.address,
//       zipCode: req.body.zipCode,
//     });
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//     //here we are saying save  the savedUser in json format in the database
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email: email });
//     //line 46, the findOne is a mongoDB method to find one item in the table
//     if (!user) return res.status(400).json({ msg: "User does not exist." });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

//     delete user.password;

//     res.status(200).json({ token, user });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

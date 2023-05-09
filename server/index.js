import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
// import { register } from "./controllers/auth.js";
// import { addPicture } from "./controllers/picture.js";
// import authRoutes from "./routes/auth.js";
import pictureRoutes from "./routes/picture.js";
import cartRoutes from "./routes/cart.js";
import lonelyRoutes from "./routes/lonely.js";
// import User from "./models/User.js";
import Picture from "./models/Picture.js";
import Cart from "./models/Cart.js";
import { pictures } from "./data/index.js";
import Lonely from "./models/Lonely.js";
import { lonely } from "./data/index.js";

/*CONFIGURATIONS*/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
// app.use(express.static("public/assets"));
/*FILE STORAGE*/
// taken from multer github repo inside the ReadMe
// destination is that each time a user uploads a picture it will go to the public/assets folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// //each time we want to upload a file we will use the upload variable on line 39
const upload = multer({ storage });

/* ROUTES WITH FILES*/
// app.post("/auth/register", upload.single("Picture"), register);

/*ROUTES*/
// app.use("/auth", authRoutes);
app.use("/pictures", pictureRoutes);
app.use("/cart", cartRoutes);
app.use("/lonely", lonelyRoutes);

/*MONGOOSE SETUP*/
const PORT = process.env.PORT || 6001;
const HOST = process.env.DB_HOST;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, HOST, () => console.log(`Server Port: ${PORT}`));

    /*ADD DATA ONE TIME*/

    // User.insertMany(users);
    // Picture.insertMany(pictures);
    // Lonely.insertMany(lonely);
  })
  .catch((error) => console.log(`${error} did not connect`));

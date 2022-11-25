import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRouter from "./apps/users.js";
import authRouter from "./apps/auth.js";
import swipeRouter from "./apps/swipe.js";
import filterRouter from "./apps/filter.js";
import complaintsRouter from "./apps/complaints.js";
import cloudinary from "cloudinary";


async function init() {
  dotenv.config();

  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true,
  });

  const app = express();
  const port = 4001;

  app.use(cors());
  app.use(bodyParser.json());

  app.use("/auth", authRouter);
  app.use("/users", userRouter);
  app.use("/swipe", swipeRouter);
  app.use("/filter", filterRouter );
  app.use("/complaints", complaintsRouter);

  app.get("/", (req, res) => {
    return res.json({
      message: "Merry Match!! ",
    });
  });

  app.get("*", (req, res) => {
    res.status(404).send("Not found");
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

init();

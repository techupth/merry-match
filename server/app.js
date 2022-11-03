import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRouter from "./apps/users.js";
import authRouter from "./apps/auth.js";

async function init() {
  dotenv.config();

  const app = express();
  const port = 4001;

  app.use(cors());
  app.use(bodyParser.json());

  app.use("/auth", authRouter);
  app.use("/users", userRouter);

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

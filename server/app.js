import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from "./apps/users.js";

async function init() {
  const app = express();
  const port = 4001;

  app.use(cors());
  app.use(bodyParser.json());
  
  app.use('/users', userRouter)

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

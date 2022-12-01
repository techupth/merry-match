import { Router } from "express";
import {
  getEachUserController,
  filterController,
} from "../controller/filter.controller.js";

const filterRouter = Router();

filterRouter.get("/:userId", getEachUserController);

filterRouter.post("/", filterController);

export default filterRouter;

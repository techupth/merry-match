import { Router } from "express";
import {
  getMerryListController,
  swipeController,
  deleteSwipeController,
} from "../controller/swipe.controller.js";

const swipeRouter = Router();

swipeRouter.get("/", getMerryListController);

swipeRouter.post("/", swipeController);

swipeRouter.delete("/", deleteSwipeController);

export default swipeRouter;

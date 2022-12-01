import { Router } from "express";
import {
  getComplaintsController,
  getEachComplaintController,
  postComplaintController,
  updateComplaintController,
} from "../controller/complaints.controller.js";

const complaintsRouter = Router();

complaintsRouter.get("/", getComplaintsController);

complaintsRouter.get("/:id", getEachComplaintController);

complaintsRouter.post("/", postComplaintController);

complaintsRouter.put("/:id", updateComplaintController);

export default complaintsRouter;

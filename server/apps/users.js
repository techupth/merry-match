import Router from "express";
import { protect } from "../middlewares/protect.js";
import {
  getAllUsers,
  getUserById,
  editUserController,
  deleteUserController,
} from "../controller/users.controller.js";

const userRouter = Router();

userRouter.delete("/:userId", deleteUserController);

// userRouter.use(protect);

userRouter.get("/", getAllUsers);

userRouter.get("/:userId", getUserById);

userRouter.put("/:userId", editUserController);

export default userRouter;

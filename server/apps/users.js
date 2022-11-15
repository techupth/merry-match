import Router from "express";
import { protect } from "../middlewares/protect.js";
import { getAllUsers, getUserById, postUser, editUserController, deleteUserController } from "../controller/users.controller.js";

const userRouter = Router();
userRouter.use(protect);

userRouter.get("/", getAllUsers );

userRouter.get("/:userId",getUserById );

userRouter.post("/", postUser);

userRouter.put("/:userId", editUserController);

userRouter.delete("/:userId", deleteUserController );

export default userRouter;

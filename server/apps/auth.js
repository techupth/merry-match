import { Router } from "express";
import {
  registerController,
  loginController,
  postRegister,
} from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.post("/register", registerController);

authRouter.get("/register", postRegister);

authRouter.post("/login", loginController);

export default authRouter;

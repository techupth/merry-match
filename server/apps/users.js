import Router from "express";
import { protect } from "../middlewares/protect.js";
import {
  getAllUsers,
  getUserById,
  postUser,
  editUserController,
  deleteUserController,
} from "../controller/users.controller.js";

const userRouter = Router();

userRouter.delete("/:userId", deleteUserController);

userRouter.use(protect);

userRouter.get("/", getAllUsers);

// userRouter.get("/", async (req, res) => {
//   try {
//     const result = await pool.query(`select * from users`);

//     return res.json({
//       message: "Successful!",
//       data: result.rows,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

userRouter.get("/:userId", getUserById);

userRouter.post("/", postUser);

userRouter.put("/:userId", editUserController);

export default userRouter;

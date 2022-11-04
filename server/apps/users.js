import Router from "express";
import { pool } from "../utils/db.js";
import { protect } from "../middlewares/protect.js";

const userRouter = Router();
userRouter.use(protect);

userRouter.get("/", async (req, res) => {
  const result = await pool.query(`select * from users`);
  console.log(result);
  return res.json({
    message: "Successful!",
    data: result.rows,
  });
});

userRouter.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const result = await pool.query(`select * from users where user_id=$1`, [
    userId,
  ]);
  return res.json({
    message: `User info at user id : ${userId} is found`,
    data: result.rows,
  });
});

userRouter.post("/", async (req, res) => {
  try {
    const newUserProfile = {
      ...req.body,
      created_at: new Date(),
      updated_at: new Date(),
    };
    console.log(newUserProfile);
    await pool.query(
      `insert into users(name,birthday,location,city,username,email,password,sex_identity,sex_pref,racial_pref,meeting_int,hobby,created_at,updated_at,profile_pics) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)`,
      [
        newUserProfile.name,
        newUserProfile.birthday,
        newUserProfile.location,
        newUserProfile.city,
        newUserProfile.username,
        newUserProfile.email,
        newUserProfile.password,
        newUserProfile.sex_identity,
        newUserProfile.sex_pref,
        newUserProfile.racial_pref,
        newUserProfile.meeting_int,
        newUserProfile.hobby,
        newUserProfile.created_at,
        newUserProfile.updated_at,
        newUserProfile.profile_pics,
      ]
    );
    return res.json({
      message: "Registered Successful!",
    });
  } catch (error) {
    alert(error);
    console.log("error is :", error);
  }
});

userRouter.put("/:userId", async (req, res) => {
  const userId = req.params.userId;
  await pool.query(`select * from users where user_id=$1`, [userId]);
  return res.json({
    message: `User info at user id : ${userId} is found`,
    data: result.rows,
  });
});

export default userRouter;

import Router from "express";
import { pool } from "../utils/db.js";
import { protect } from "../middlewares/protect.js";

const userRouter = Router();
// userRouter.use(protect);

userRouter.get("/", async (req, res) => {
  const result = await pool.query(`select * from users`);

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
    await pool.query(`SET datestyle = dmy`);

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
    console.log("error is");
    console.log(error);
    res.json({
      message: `${error}`,
    });
  }
});

userRouter.put("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const updatedUser = {
    ...req.body,
    updated_at: new Date(),
  };
  await pool.query(
    `UPDATE users
    SET name=$1,birthday=$2,location=$3,city=$4,username=$5,email=$6,sex_identity=$7,sex_pref=$8,racial_pref=$9,meeting_int=$10,hobby=$11,about_me=$12,updated_at=$13,profile_pics=$14
    WHERE user_id = $15`,
    [
      updatedUser.name,
      updatedUser.birthday,
      updatedUser.location,
      updatedUser.city,
      updatedUser.username,
      updatedUser.email,
      updatedUser.sex_identity,
      updatedUser.sex_pref,
      updatedUser.racial_pref,
      updatedUser.meeting_int,
      updatedUser.hobby,
      updatedUser.about_me,
      updatedUser.updated_at,
      updatedUser.profile_pics,
      userId,
    ]
  );
 
  await pool.query(`select * from users where user_id=$1`, [userId]);
  return res.json({
    message: `User ${userId} info has been updated!`,
  });
});

userRouter.delete("/:userId", async (req, res) => {
  const userId = req.params.userId;
  await pool.query(
    `
 delete from users where user_id = $1
 `,
    [userId]
  );

  return res.json({
    message: `User ${userId} has been deleted!`,
  });
});

export default userRouter;

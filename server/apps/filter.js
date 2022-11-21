import { Router } from "express";
import { pool } from "../utils/db.js";
import { protect } from "../middlewares/protect.js";

const filterRouter = Router();

filterRouter.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  const eachUserData = await pool.query(
    `select user_id,name,meeting_int,sex_pref,user_age from users where user_id=$1`,
    [userId]
  );
  return res.json({
    data: eachUserData.rows,
    message: `${userId}`,
  });
});

filterRouter.post("/", async (req, res) => {
  try {
    const filter = req.body;
    console.log("filter", filter);
    const result = await pool.query(
      `SELECT * FROM users AS u INNER JOIN swipe as swp ON swp.swiper = u.user_id INNER JOIN swipe as swp2 on swp2.swipee = u.user_id where (u.user_age between $1 and $2) and (u.meeting_int = $3 or u.meeting_int = $4 or u.meeting_int = $5 or u.meeting_int = $6 or u.meeting_int = $7) and (u.sex_identity = $8) and (u.user_id != $9) `,
      [
        filter.ageRange[0],
        filter.ageRange[1],
        filter.meetingInt[0],
        filter.meetingInt[1],
        filter.meetingInt[2],
        filter.meetingInt[3],
        filter.meetingInt[4],
        filter.sexPreference,
        filter.user_id,
      ]
    );
    console.log(result.rows);
    return res.json({
      message: "Filtered users successfully!",
      person: `${result.rowCount}`,
      data: result.rows,
    });
  } catch (err) {
    console.log(err);
  }
});

export default filterRouter;

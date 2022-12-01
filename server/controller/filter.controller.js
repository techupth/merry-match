// import { Router } from "express";
import { pool } from "../utils/db.js";
import { protect } from "../middlewares/protect.js";

// filterRouter.use(protect);

const getEachUserController = async (req, res) => {
  const userId = req.params.userId;

  const eachUserData = await pool.query(
    `select user_id,name,meeting_int,sex_pref,user_age from users where user_id=$1`,
    [userId]
  );
  return res.json({
    data: eachUserData.rows,
    message: `${userId}`,
  });
};

const filterController = async (req, res) => {
  try {
    const filter = req.body;

    const isMatched = await pool.query(
      `
    SELECT swipee FROM swipe
    WHERE swiper = $1 AND swipe_type = $2
    `,
      [filter.user_id, true]
    );

    const userMatched = await isMatched.rows.map((value) => {
      return value.swipee;
    });

    const limit = 32 + userMatched.length;

    const result = await pool.query(
      `select * FROM users where (user_age between $1 and $2) and (meeting_int = $3 or meeting_int = $4 or meeting_int = $5 or meeting_int = $6 or meeting_int = $7) and (sex_identity = $8) and (user_id != $9) ORDER BY Random() limit $10`,
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
        limit,
      ]
    );

    const filterMatched = result.rows.filter((value) => {
      return !userMatched.includes(value.user_id);
    });

    return res.json({
      message: "Filtered users successfully!",
      person: `${filterMatched.rowCount}`,
      data: filterMatched,
    });
  } catch (err) {
    console.log(err);
  }
};

export { getEachUserController, filterController };

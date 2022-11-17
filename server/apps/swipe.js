import { Router } from "express";
import { protect } from "../middlewares/protect.js";
import { pool } from "../utils/db.js";

const swipeRouter = Router();

// swipeRouter.use(protect());

swipeRouter.get("/", async (req, res) => {
  if (req.query.userId) {
    const swiperId = req.query.userId;
    const swipeeList = await pool.query(
      `
    SELECT * FROM swipe
    INNER JOIN users
    ON swipee = user_id
    where swiper = $1
  `,
      [swiperId]
    );

    const isMatch = await pool.query(
      `
    SELECT swiper FROM swipe
    WHERE swipee = $1 AND swipe_type = $2
    `,
      [swiperId, true]
    );

    return res.json({
      data: swipeeList.rows,
      isMatchId: isMatch.rows,
    });
  } else {
    const allUsersDataResult = await pool.query(`select * from users`);
    console.log(allUsersDataResult.rows);
    return res.json({
      data: allUsersDataResult.rows,
    });
  }
});

swipeRouter.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  console.log(req);
  console.log(userId);
  const eachUserData = await pool.query(
    `select * from users where user_id=$1`,
    [userId]
  );
  return res.json({
    data: eachUserData.rows,
    message: `${userId}`,
  });
});

swipeRouter.post("/", async (req, res) => {
  try {
    const filter = req.body;
    const result = await pool.query(
      `select * from users where (user_age between $1 and $2) and (meeting_int = $3 or meeting_int = $4 or meeting_int = $5 or meeting_int = $6 or meeting_int = $7) and (sex_identity not like $8) `,
      [
        filter.ageRange[0],
        filter.ageRange[1],
        filter.meetingInt[0],
        filter.meetingInt[1],
        filter.meetingInt[2],
        filter.meetingInt[3],
        filter.meetingInt[4],
        filter.sexIdentity,
      ]
    );

    return res.json({
      message: "Filtered users successfully!",
      person: `${result.rowCount}`,
      data: result.rows,
    });
  } catch (err) {
    console.log(err);
  }
});

export default swipeRouter;

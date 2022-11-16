import { Router } from "express";
import { protect } from "../middlewares/protect.js";
import { pool } from "../utils/db.js";

const swipeRouter = Router();

// swipeRouter.use(protect());

swipeRouter.get("/", async (req, res) => {
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
});

swipeRouter.post("/",async (req, res) => {
    try {
      const filter = req.body;
      console.log(filter);
      const result = await pool.query(
        `select * from users where meeting_int = $1 or meeting_int = $2 or meeting_int = $3 or meeting_int = $4 or meeting_int = $5 and user_age between $6 and $7`,
        [
          filter.meetingInt[0],
          filter.meetingInt[1],
          filter.meetingInt[2],
          filter.meetingInt[3],
          filter.meetingInt[4],
          filter.ageRange[0],
          filter.ageRange[1],
        ]
      );

      return res.json({
        message: "Filtered users successfully!",
        data: result.rows,
      });
    } catch (err) {
      console.log(err);
    }
  });

export default swipeRouter;

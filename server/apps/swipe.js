import { Router } from "express";
import { protect } from "../middlewares/protect.js";
import { pool } from "../utils/db.js";

const swipeRouter = Router();

// swipeRouter.use(protect());

swipeRouter.get("/", async (req, res) => {
  const swiperId = req.body.user_id;
  await pool.query(`
  SELECT * FROM swipe
  Where swiper = $1
    LEFT JOIN users
    select * FROM swipeON swipe.swipee = user.user_id
  `,[swiperId]);
});


export default swipeRouter;
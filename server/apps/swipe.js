import { Router } from "express";
import { protect } from "../middlewares/protect.js";
import { pool } from "../utils/db.js";

const swipeRouter = Router();

// swipeRouter.use(protect());

swipeRouter.get("/", async (req, res) => {
  const swiperId = req.body.user_id;
    const swipeeList = await pool.query(
    `
  SELECT * FROM swipe
INNER JOIN users
ON swipee = user_id
where swiper = $1
  `,
    [swiperId]
  );
    
  return res.json({
    data : swipeeList,
  })
  
});

export default swipeRouter;

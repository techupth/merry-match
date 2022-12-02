import { protect } from "../middlewares/protect.js";
import { pool } from "../utils/db.js";

// swipeRouter.use(protect);

const getMerryListController = async (req, res) => {
  if (req.query.userId) {
    const swiperId = req.query.userId;
    const swipeeList = await pool.query(
      `
    SELECT * FROM swipe
    INNER JOIN users
    ON swipee = user_id
    where swiper = $1
    ORDER BY swipe_at DESC
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
    // console.log(allUsersDataResult.rows);
    return res.json({
      data: allUsersDataResult.rows,
    });
  }
};

const swipeController = async (req, res) => {
  const swiperId = req.body.swiper;
  const swipeData = {
    ...req.body,
    swipe_at: new Date(),
  };

  // console.log(swipeData);

  await pool.query(
    `
  insert into swipe (swiper,swipe_type, swipee ,swipe_at)
  values ($1,$2, $3,$4)
  `,
    [
      swipeData.swiper,
      swipeData.swipe_type,
      swipeData.swipee,
      swipeData.swipe_at,
    ]
  );

  return res.json({
    message: `User Id : ${swiperId} has swipe Id : ${swipeData.swipee} Sucessful!!`,
  });
};

const deleteSwipeController = async (req, res) => {
  try {
    const arr = req.query.request;
    if (arr !== "") {
      const spiltArr = req.query.request.split(",");

      for (let i = 0; i < spiltArr.length; i++) {
        // console.log(arr[i])
        await pool.query(
          `
      DELETE FROM swipe
      WHERE swipe_id IN ($1)
      `,
          [spiltArr[i]]
        );
      }
    }

    return res.json({
      message: "Delete UnMath successful!! ",
    });
  } catch (err) {
    console.log(err);
  }
};

export { getMerryListController, swipeController, deleteSwipeController };

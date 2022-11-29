import { pool } from "../utils/db.js";

const getAllUsers = async (req, res) => {
  const result = await pool.query(`select * from users`);

  return res.json({
    message: "Successful!",
    data: result.rows,
  });
};

const getUserById = async (req, res) => {
  const userId = req.params.userId;
  // console.log(userId);
  const result = await pool.query(`select * from users where user_id=$1`, [
    userId,
  ]);
  return res.json({
    message: `User info at user id : ${userId} is found`,
    data: result.rows,
  });
};

const editUserController = async (req, res) => {
  const userId = req.params.userId;
  const updatedUser = {
    ...req.body,
    updated_at: new Date(),
  };
  const yearNow = new Date().getFullYear();
  // console.log(yearNow);
  const userBirthYear = new Date(updatedUser["birthday"]).getFullYear();
  // console.log(userBirthYear);
  // console.log(yearNow - userBirthYear);

  await pool.query(
    `UPDATE users
          SET name=$1,birthday=$2,location=$3,city=$4,sex_identity=$5,sex_pref=$6,racial_pref=$7,meeting_int=$8,hobby=$9,about_me=$10,updated_at=$11,profile_pics=$12,contact=$13,user_age=$14
          WHERE user_id = $15`,
    [
      updatedUser.name,
      updatedUser.birthday,
      updatedUser.location,
      updatedUser.city,
      updatedUser.sex_identity,
      updatedUser.sex_pref,
      updatedUser.racial_pref,
      updatedUser.meeting_int,
      updatedUser.hobby,
      updatedUser.about_me,
      updatedUser.updated_at,
      updatedUser.profile_pics,
      updatedUser.contact,
      yearNow - userBirthYear,
      userId,
    ]
  );
  console.log(`UpDate ID :${userId} Successful!!`);
  await pool.query(`select * from users where user_id=$1`, [userId]);
  return res.json({
    message: `User ${userId} info has been updated!`,
  });
};

const deleteUserController = async (req, res) => {
  const userId = req.params.userId;
  // console.log(userId);
  await pool.query(
    `
   delete from users where user_id = $1
   `,
    [userId]
  );

  console.log(`User ${userId} has been deleted!`);
  return res.json({
    message: `User ${userId} has been deleted!`,
  });
};

export { getAllUsers, getUserById, editUserController, deleteUserController };

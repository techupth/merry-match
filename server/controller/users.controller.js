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

  const result = await pool.query(`select * from users where user_id=$1`, [
    userId,
  ]);
  return res.json({
    message: `User info at user id : ${userId} is found`,
    data: result.rows,
  });
};

const postUser = async (req, res) => {
  try {
    const newUserProfile = {
      ...req.body,
      created_at: new Date(),
      updated_at: new Date(),
    };

    await pool.query(`SET datestyle = dmy`);

    await pool.query(
      `insert into users(name,birthday,location,city,username,email,password,sex_identity,sex_pref,racial_pref,meeting_int,hobby,created_at,updated_at,profile_pics,contact) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)`,
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
        newUserProfile.contact,
      ]
    );

    console.log("Registered Successful!");
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
};

const editUserController = async (req, res) => {
  const userId = req.params.userId;
  const updatedUser = {
    ...req.body,
    updated_at: new Date(),
  };
  await pool.query(
    `UPDATE users
          SET name=$1,birthday=$2,location=$3,city=$4,sex_identity=$5,sex_pref=$6,racial_pref=$7,meeting_int=$8,hobby=$9,about_me=$10,updated_at=$11,profile_pics=$12, contact=$14
          WHERE user_id = $13`,
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
      userId,
      updatedUser.contact,
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
  console.log(userId);
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

export {
  getAllUsers,
  getUserById,
  postUser,
  editUserController,
  deleteUserController,
};

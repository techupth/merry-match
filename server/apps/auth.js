import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../utils/db.js";
import multer from "multer";

const authRouter = Router();

const multerUpload = multer({ dest: "uploads/" });
const avatarUpload = multerUpload.fields([{ name: "avatar", maxCount: 5 }]);

authRouter.post("/register", avatarUpload, async (req, res) => {
  try {
    const newUserProfile = {
      ...req.body,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const salt = await bcrypt.genSalt(10);
    newUserProfile.password = await bcrypt.hash(newUserProfile.password, salt);

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
      message: "Registered Successfully!",
    });
  } catch (error) {
    console.log("error is", error);
  }
});

authRouter.get("/register", async (req, res) => {
  try {
    const inputData = req.query;
    if (!inputData.email) {
      const result = await pool.query(
        `select username from users where username = $1`,
        [inputData.username]
      );
      if (result.rowCount === 0) {
        return res.json({ message: "Username Available" });
      } else {
        return res.json({ message: "*This Username is already taken." });
      }
    } else if (inputData.email) {
      const result = await pool.query(
        `select email from users where email = $1`,
        [inputData.email]
      );
      if (result.rowCount === 0) {
        return res.json({ message: "Email Available" });
      } else {
        return res.json({ message: "*This Email is already taken." });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

authRouter.post("/login", async (req, res) => {
  const loginKey = req.body.username;
  const password = req.body.password;

  // console.log(loginKey);
  // console.log(password);

  const result = await pool.query(
    `select user_id,name,username,password,email,profile_pics from users where username = $1 or email = $1`,
    [loginKey]
  );

  if (!result.rows[0]) {
    return res.json({
      message: "*Username or Email not found",
    });
  }
  const isValidPassword = await bcrypt.compare(
    password,
    result.rows[0].password
  );
  if (!isValidPassword) {
    return res.json({
      message: "*Password is invalid",
    });
  }

  // console.log(result.rows)
  const token = jwt.sign(
    {
      user_id: result.rows[0].user_id,
      username: result.rows[0].username,
      email: result.rows[0].email,
      name: result.rows[0].name,
      profile_pics: result.rows[0].profile_pics,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "900000",
    }
  );

  return res.json({
    message: "Logged in Successfully!",
    token,
  });
});

authRouter.get("/", async (req, res) => {
  return res.send("hello auth!!");
});

export default authRouter;

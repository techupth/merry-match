import { pool } from "../utils/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerController = async (req, res) => {
  try {
    const newUserProfile = {
      ...req.body,
      created_at: new Date(),
      updated_at: new Date(),
    };
    console.log(newUserProfile);
    const yearNow = new Date().getFullYear();
    console.log(yearNow);
    const userBirthYear = new Date(newUserProfile["birthday"]).getFullYear();
    console.log(userBirthYear);
    console.log(yearNow - userBirthYear);
    const salt = await bcrypt.genSalt(10);
    newUserProfile.password = await bcrypt.hash(newUserProfile.password, salt);

    await pool.query(
      `insert into users(name,birthday,location,city,username,email,password,sex_identity,sex_pref,racial_pref,meeting_int,hobby,created_at,updated_at,profile_pics,user_age,contact) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)`,
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
        yearNow - userBirthYear,
        newUserProfile.contact,
      ]
    );
    return res.json({
      message: "Registered Successfully!",
    });
  } catch (error) {
    console.log("error is", error);
  }
};

const loginController = async (req, res) => {
  const loginKey = req.body.username;
  const password = req.body.password;
  const nowDate = new Date();

  const isAdmin = await pool.query(
    `
  SELECT * FROM admins 
  WHERE  username = $1
  `,
    [loginKey]
  );

  if (isAdmin.rows[0] !== undefined) {
    let isValidPassword = false;
    if (isAdmin.rows[0].password === password) {
      isValidPassword = true;
      await pool.query(
        `
      UPDATE admins
      SET last_logged_in = $1 
      WHERE admin_id = $2
      `,
        [nowDate, isAdmin.rows[0].admin_id]
      );
    } else {
      return res.json({
        message: "*Admin Password is Invalid!!",
      });
    }

    const adminToken = jwt.sign(
      {
        admin_id: isAdmin.rows[0].admin_id,
        username: isAdmin.rows[0].username,
        isAdmin: true,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "900000",
      }
    );

    return res.json({
      message: `Admin ${
        isAdmin.rows[0].username
      } logged in successful!! at ${new Date()}`,
      adminToken,
    });
  }

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
};

const postRegister = async (req, res) => {
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
};

export { registerController, loginController, postRegister };

import { Router } from "express";
import { pool } from "../utils/db.js";
import { protect } from "../middlewares/protect.js";



const filterRouter = Router();



export default filterRouter;
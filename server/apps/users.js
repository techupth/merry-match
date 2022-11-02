import Router from 'express';
import { pool } from '../utils/db.js';



const userRouter = Router();


userRouter.get('/', async(req,res)=>{
    const result = await pool.query(`select * from users`)
    console.log(result)
    return res.json({
        message : "Successful!",
        data : result.rows,
    })
});


export default userRouter;
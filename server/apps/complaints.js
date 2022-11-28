import { Router } from "express";
import { pool } from "../utils/db.js";

const complaintsRouter = Router();

complaintsRouter.get("/", async (req, res) => {
  const result = await pool.query(
    `SELECT complaints.*
    FROM complaints
    INNER JOIN users
    on complaints.user_id = users.user_id order by CASE WHEN complaint_status = $1 THEN  0  WHEN complaint_status = $2  THEN 1 WHEN  complaint_status = $3 then 2 ELSE 3 END,
    complaint_status`,
    ["New", "Pending", "Canceled"]
  );

  return res.json({
    data: result.rows,
  });
});

complaintsRouter.get("/:id", async (req, res) => {
  const complaintId = req.params.id;
  const result = await pool.query(
    `select * from complaints where complaint_id = $1`,
    [complaintId]
  );
  return res.json({
    data: result.rows,
  });
});

complaintsRouter.post("/", async (req, res) => {
  const newComplaint = {
    ...req.body,
  };

  console.log(newComplaint);

  await pool.query(
    `INSERT INTO complaints (name,issue,description,user_id,date_submitted,complaint_status,updated_at,resolved_by) values($1, $2, $3, $4, $5,$6,$7,$8)`,
    [
      newComplaint.name,
      newComplaint.issue,
      newComplaint.description,
      newComplaint.user_id,
      newComplaint.date_submitted,
      newComplaint.complaint_status,
      newComplaint.updated_at,
      newComplaint.resolved_by,
    ]
  );

  return res.json({
    message: "Complaint has been created.",
  });
});

complaintsRouter.put("/:id", async (req, res) => {
  const complaintId = req.query.id;
  const updatedStatus = {
    ...req.body,
    updated_at: new Date(),
  };

  await pool.query(
    ` UPDATE complaints
    SET complaint_status = $2 ,updated_at = $3
    WHERE complaint_id=  $1`,
    [complaintId, updatedStatus.complaint_status, updatedStatus.updated_at]
  );

  return res.json({
    message: `Status ${complaintId} has been updated.`,
  });
});

export default complaintsRouter;

import express from "express"
import { getComment } from "../controllers/comments.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//GET COMMENT BY ID
router.get("/:commentId",  getComment)

export default router;
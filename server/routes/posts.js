import express from "express"
import {getFeedPosts, getUserPosts, updatePost} from "../controllers/posts.js"
import { verifyToken } from "../middleware/auth.js";
import { createComment } from "../controllers/comments.js";

const router = express.Router();

//READ 
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

//UPDATE LIKES
router.patch("/:postId/like", verifyToken, updatePost);

//CREATE COMMENT
router.post("/:postId/comment", verifyToken, createComment);

export default router;
import Comment from "../models/Comment.js"
import Post from "../models/Post.js";
import User from "../models/User.js"

//CREATE
export const createComment = async (req, res) => {
    
    try {
        const { userId,  comment } = req.body;
        const { postId } = req.params;
        const user = await User.findById(userId);

        const newComment = new Comment({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            comment:comment,
            postId,
            userPicturePath: user.picturePath
        });
        await newComment.save();

        // push the comment's id to the relevant post's comments array
        const UpdatedPost = await Post.findByIdAndUpdate(postId, {
            $push: { comments: newComment._id }
        },
        { new: true });

        res.status(201).json(UpdatedPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


//GET
export const getComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const comment = await Comment.findById(commentId).populate("userId");
        res.status(200).json(comment);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

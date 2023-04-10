import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPost } from "state";

const Comment = ({postId}) => {
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if(true) {
        try {
            const response = await fetch(`http://localhost:3001/posts/${postId}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ 
                    userId: loggedInUserId,
                    comment,
                })
            });
            const updatedPost = await response.json();
            dispatch(setPost({ post: updatedPost }));
            if(response.ok) {
                // handle successful comment creation
                // e.g. clear the comment input, update the comments list, etc
                setComment("")
            } else {
                // handle error
                // e.g. display an error message
            }
        } catch (error) {
            // handle error
            // e.g. display an error message
        }
    } else {
        // handle error when token or comment is not present
        // e.g. display an error message
    }
}
  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Post
      </button>
    </div>
  );
};

export default Comment;

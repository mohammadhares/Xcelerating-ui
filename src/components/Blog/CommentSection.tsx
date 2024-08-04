import { useState } from "react";
import Comment from "./Comment";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([
      ...comments,
      { id: comments.length + 1, text: newComment, replies: [] },
    ]);
    setNewComment("");
  };

  const handleReply = (commentId, replyText) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...comment.replies, replyText],
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <div className="mt-8">
      <h3 className="mb-4 text-xl font-bold">Comments</h3>
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full rounded-lg bg-dark outline-none border p-2"
          placeholder="Write a comment..."
        />
        <button
          type="submit"
          className="mt-2 rounded-lg bg-blue-500 px-4 py-2 text-white"
        >
          Submit
        </button>
      </form>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} handleReply={handleReply} />
      ))}
    </div>
  );
};

export default CommentSection;

import { useState } from "react";

const Comment = ({ comment, handleReply }) => {
  const [reply, setReply] = useState("");
  const [showReply, setShowReply] = useState(false);

  const handleReplySubmit = (e) => {
    e.preventDefault();
    handleReply(comment.id, reply);
    setReply("");
    setShowReply(false);
  };

  return (
    <div className="mb-4 rounded-lg border p-4">
      <p className="mb-2 text-sm text-gray-600">{comment.text}</p>
      <button
        onClick={() => setShowReply(!showReply)}
        className="text-xs text-blue-500"
      >
        Reply
      </button>
      {showReply && (
        <form onSubmit={handleReplySubmit} className="mt-2">
          <input
            type="text"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            className="w-full bg-dark rounded-lg border p-2"
            placeholder="Write a reply..."
          />
          <button
            type="submit"
            className="mt-2 rounded-lg bg-blue-500 px-4 py-2 text-white"
          >
            Submit
          </button>
        </form>
      )}
      {comment.replies &&
        comment.replies.map((reply, index) => (
          <div key={index} className="ml-4 mt-4 border-l pl-4">
            <p className="text-sm text-gray-600">{reply}</p>
          </div>
        ))}
    </div>
  );
};

export default Comment;

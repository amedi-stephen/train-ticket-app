import React, { useState } from "react";

const CommentField = () => {
    const [email, setEmail] = useState("")
    const [fullName, setFullname] = useState("")
    const [comment, setComment] = useState("")
  return (
    <form className="form-comment-wrapper">
      <div className="comment-form">
        <input type="text" placeholder="Email" className="form-text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="text" placeholder="Name" name="fullName" value={fullName} onChange={e => setFullname(e.target.value)} />
        <textarea placeholder="Share your opinion..." name="comment" value={comment} onChange={e => setComment(e.target.value)} />
        <button type="submit">Comment</button>
      </div>
    </form>
  );
};

export default CommentField;

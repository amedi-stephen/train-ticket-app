import React, { useState } from 'react';

const CommentField = () => {
    return (
        <form className="form-comment-wrapper">
            <div className="comment-form">
              <input type="text" placeholder="Email" className="form-text" />
              <input type="text" placeholder="Name" />
              <textarea placeholder="Share your opinion..." />
              <button>Comment</button>
            </div>
          </form>
    );
}
 
export default CommentField;
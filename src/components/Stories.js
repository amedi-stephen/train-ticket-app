import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function Stories() {
  return (
    <div>
      <Nav />

      <div className="comment-section container">
        <div className="comment-header header-center">
          <h1>stories</h1>
          <p>Listen to what other people are saying about our services</p>
        </div>

        <div className="comment-body">
          <div className="comment-body-header">
            <h2>340 comments</h2>
            <button>Post Comment</button>
            <hr />
          </div>
        </div>
          
      </div>

      <Footer />
    </div>
  );
}

export default Stories;

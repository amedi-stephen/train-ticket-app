import React, { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function Stories(title) {
  // hook code goes here
  useEffect(() => {
    document.title = "Hey there...";
    
  });

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
            <button type="button" className="display-post">
              <span className="plus-icon">
                <i className="fa fa-plus"></i>
              </span>
              <span className="minus-icon">
                <i className="fa fa-minus"></i>
              </span>
            </button>
          </div>

          <form className="form-comment-wrapper">
            <div className="comment-form">
              <input type="text" placeholder="Email" className="form-text" />
              <input type="text" placeholder="Name" />
              <textarea placeholder="Share your opinion..." />
              <button>Comment</button>
            </div>
          </form>

          <hr />

          <div className="comment-wrapper">
            <div className="media">
              <img
                className="mr-3"
                src="https://source.unsplash.com/random"
                alt="profile"
                width="64"
                height="64"
              />
              <div className="media-body">
                <h5>
                  <span className="media-name">johndoe@gmail</span>
                  <span className="text-muted">4 min ago</span>
                </h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
                <form className="comment-reply">
                  <input type="text" placeholder="Reply..." />
                </form>
                <div className="media-tools">
                  <span className="text-muted">Share</span>
                  <span className="text-muted">
                    <i className="fa fa-thumbs-up agree"></i> 34{" "}
                  </span>
                  <span className="text-muted">
                    <i className="fa fa-thumbs-down disagree"></i> 14{" "}
                  </span>
                </div>
                <div className="media">
                  <img
                    className="mr-3"
                    src="https://source.unsplash.com/random"
                    alt="profile"
                    width="64"
                    height="64"
                  />
                  <div className="media-body">
                    <h5>
                      <span className="media-name">johndoe@gmail</span>
                      <span className="text-muted">4 min ago</span>
                    </h5>
                    that something looked good. can i have some of that
                    <div className="media-tools">
                      <span className="text-muted">Share</span>
                      <span className="text-muted">
                        <i className="fa fa-thumbs-up agree"></i> 34{" "}
                      </span>
                      <span className="text-muted">
                        <i className="fa fa-thumbs-down disagree"></i> 14{" "}
                      </span>
                    </div>
                    <form className="comment-reply">
                      <input
                        type="text"
                        placeholder="Reply..."
                        style={{ width: "100%" }}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Stories;

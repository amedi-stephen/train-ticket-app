import React from "react";
import ReplyComments from "./ReplyComments";

const ViewComments = () => {
  return (
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
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
          <ReplyComments />
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
              <ReplyComments />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewComments;
